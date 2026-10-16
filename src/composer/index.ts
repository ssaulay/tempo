import {calibrationCapacity,calibrationFraction} from '../calibration';
import {getProgressSuggestion} from './progression';
import {initialDose,exercisePriority} from './policy';
import {exercises,rules,selectable,resistance,zoneLabels,exerciseForEquipment,catalogueExercises} from '../catalog';
import type {Block,Equipment,Estimate,Exercise,Intensity,Phase,Profile,Program,Zone} from '../types';
export const uid=()=>globalThis.crypto?.randomUUID?.()||`t-${Date.now()}-${Math.random().toString(36).slice(2)}`;
export function phasePlan(program:Program):Phase[]{
 const result:Phase[]=[];
 program.blocks.forEach((b,bi)=>{
  const add=(kind:Phase['kind'],seconds:number,set=0,side=0,attempt=1)=>{const key=`${b.id}:${set}:${side}:${attempt}`;result.push({id:`${key}:${kind}`,kind,seconds,blockIndex:bi,set,side,attempt,attemptId:key});};
  add('preparing',rules.preparationSeconds+(bi?rules.transitionSeconds:0));
  for(let s=1;s<=b.sets;s++){
   for(let side=1;side<=b.exercise.sides;side++){
    if(side>1)add('switching_side',rules.switchSeconds,s,side);
    add(b.exercise.mode==='timed'?'working_timed':'working_reps',b.exercise.mode==='timed'?b.value:b.value*rules.byExercise[b.exercise.id].secondsPerRep,s,side);
   }
   if(s<b.sets)add('resting',b.rest,s);
  }
 });
 return result;
}
export function estimate(program:Program):Estimate{
 let preparation=program.blocks.length*rules.preparationSeconds,work=0,rest=0,sides=0;
 for(const b of program.blocks){const r=rules.byExercise[b.exercise.id];work+=b.sets*b.exercise.sides*(b.exercise.mode==='timed'?b.value:b.value*r.secondsPerRep);rest+=(b.sets-1)*b.rest;sides+=b.sets*(b.exercise.sides-1)*rules.switchSeconds;}
 const transitions=Math.max(0,program.blocks.length-1)*rules.transitionSeconds;
 const total=preparation+work+rest+sides+transitions;
 return {total,preparation,work,rest,transitions,sides,deviation:program.budget?(total-program.budget)/program.budget:0};
}
export function validateBlock(b:Block):string[]{
 const r=rules.byExercise[b.exercise.id];if(!r)return ['Exercice inconnu.'];
 const errors:string[]=[];
 for(const [name,value,bounds] of [['Séries',b.sets,r.sets],['Objectif',b.value,b.exercise.mode==='reps'?r.reps:r.duration],['Repos',b.rest,r.rest]] as const){if(!Number.isFinite(value)||!Number.isInteger(value)||value<bounds.min||value>bounds.max||(bounds.step&&value%bounds.step!==0))errors.push(`${name} : valeur hors des bornes éditoriales (${bounds.min}–${bounds.max}).`);}
 return errors;
}
export const tubeCombinationOptions=Array.from({length:31},(_,i)=>[3,4,5,6,7].filter((_,bit)=>(i+1)&(1<<bit))).sort((a,b)=>a.reduce((n,x)=>n+x,0)-b.reduce((n,x)=>n+x,0)||a.length-b.length);
export const tubeCombinationLabel=(tubes:number[])=>`${tubes.length===1?'Tube':'Tubes'} ${tubes.join(' + ')} kg (valeurs nominales fabricant)`;
// First recommendation is a calibration, never a measured load inferred from level.
export function recommendTubes(e:Exercise,sessions:import('../types').Session[]=[]){
 const past=sessions.filter(s=>s.status==='completed'&&s.snapshot.blocks.some(b=>b.exercise.id===e.id&&b.exercise.version===e.version)).sort((a,b)=>Date.parse(a.startedAt)-Date.parse(b.startedAt));
 const block=past.at(-1)?.snapshot.blocks.find(b=>b.exercise.id===e.id&&b.exercise.version===e.version);
 const match=block?.resistance.match(/^Tubes? ([3-7](?: \+ [3-7])*) kg/);
 const tubes=match?match[1].split(' + ').map(Number):[3];
 const reason=match?'Combinaison précédente : à recalibrer selon cet exercice. Aucun changement automatique.':'Essai de départ avec le tube 3 kg nominal : ajuste selon ton effort et la qualité du mouvement.';
 return {tubes,label:tubeCombinationLabel(tubes),reason};
}
export function createBlock(e:Exercise,p:Profile,eq:Equipment,intensity:Intensity='moderate',section:Block['section']='training',id:string=uid(),completedSessions:import('../types').Session[]=[],adaptEquipment=true):Block{
 if(adaptEquipment)e=exerciseForEquipment(e,eq);
 const r=rules.byExercise[e.id];const b=e.mode==='reps'?r.reps:r.duration;
 const dose=initialDose(e,r,intensity);let value=dose.value;
 const capacity=calibrationCapacity(p,e.id);const step=b.step||1;
 if(capacity!==null)value=Math.max(b.min,Math.min(value,Math.floor(capacity*calibrationFraction(e.id)/step)*step));
 value=Math.max(b.min,Math.min(b.max,value));
 const suggestion=e.equipmentVariant==='tube'&&eq.resistanceKit?recommendTubes(e,completedSessions):null;
 return {id,resistanceRecommendation:suggestion?.reason,valueCeiling:capacity!==null?Math.max(b.min,Math.floor(capacity*(e.id==='EX27'?.5:.7)/step)*step):undefined,exercise:structuredClone(e),section,sets:section==='training'?dose.sets:1,value,rest:dose.rest,resistance:suggestion?.label||resistance(e,eq)};
}
export function blankProgram(id:string=uid(),now=new Date().toISOString()):Program{return {id,version:1,name:'Mon programme',origin:'manual',zones:[],objective:'muscles',budget:1200,blocks:[],favorite:false,createdAt:now,updatedAt:now,rulesVersion:rules.version,catalogVersion:1,reasons:[],constraints:[]};}
function seedRank(id:string,seed:number){let n=seed|0;for(const c of id)n=Math.imul(n^c.charCodeAt(0),16777619);return n>>>0;}
export interface ComposeInput {profile:Profile;equipment:Equipment;zones:Zone[];objective:Program['objective'];budget:number;intensity:Intensity;seed:number;catalogue?:Exercise[];eligible?:(e:Exercise)=>boolean;history?:Program[];completedSessions?:import('../types').Session[];createdAt?:string;}
export function compose(input:ComposeInput):{program:Program|null;error:string|null}{
 const {profile,equipment,zones,objective,budget,intensity,seed}=input;
 if(objective==='muscles'&&!zones.length)return {program:null,error:'Choisis au moins une zone ou le raccourci Cardio.'};
 if(budget<600||budget>3600||budget%300!==0)return {program:null,error:'Choisis une durée entre 10 et 60 minutes, par pas de 5 minutes.'};
 const pool=(input.catalogue||exercises).map(e=>exerciseForEquipment(e,equipment)).filter(e=>input.eligible?input.eligible(e):selectable(e,profile,equipment));
 const target=objective==='full'?(['legs','pectorals','back','abs'] as Zone[]):zones;
 const candidates=pool.filter(e=>objective==='cardio'?e.category==='cardio':e.category==='strength'&&e.zones.some(z=>target.includes(z)));
 if(!candidates.length)return {program:null,error:profile.prototype?'Aucun exercice compatible avec le matériel et les préférences renseignés. Essaie une autre zone ou ajuste ton matériel.':'Aucun exercice publié compatible. Le catalogue attend la revue technique et visuelle ; active le prototype dans les réglages pour tester les pilotes.'};
 const sorted=candidates.sort((a,b)=>{
  const previous=(e:Exercise)=>input.history?.slice(-2).some(p=>p.blocks.some(b=>b.exercise.id===e.id&&b.exercise.version===e.version))?0:1;
  return Number(a.id==='EX52')-Number(b.id==='EX52')||Number(calibrationCapacity(profile,b.id)!==null)-Number(calibrationCapacity(profile,a.id)!==null)||previous(a)-previous(b)||seedRank(a.id,seed)-seedRank(b.id,seed);
 });
 const chosen:Exercise[]=[];const covered=new Set<Zone>();const families=new Set<string>();
 const max=Math.min(12,Math.max(2,Math.ceil(budget*.8/240)));
 const select=(e:Exercise)=>{chosen.push(e);families.add(e.movementPattern);e.zones.forEach(z=>covered.add(z));};
 for(const zone of target){const e=sorted.find(e=>e.zones.includes(zone)&&!families.has(e.movementPattern));if(e&&chosen.length<max)select(e);}
 for(const e of sorted)if(chosen.length<max&&!families.has(e.movementPattern))select(e);
 if(!chosen.length)select(sorted[0]);
 chosen.sort((a,b)=>exercisePriority(a)-exercisePriority(b)||a.position.localeCompare(b.position)||a.equipmentKey.localeCompare(b.equipmentKey));
 let program=blankProgram('composition',input.createdAt||'1970-01-01T00:00:00.000Z');program.id=`generated-${seed}-${objective}-${target.join('-')}-${budget}`;program.name=objective==='cardio'?'Un peu de cardio':objective==='full'?'Corps entier':target.map(z=>zoneLabels[z]).join(' + ');program.origin='generated';program.objective=objective;program.zones=target;program.budget=budget;
 const warm=pool.find(e=>e.category==='cardio'&&e.minimumLevel==='beginner')||pool.find(e=>e.category==='mobility'&&e.id==='EX41');
 const cool=pool.find(e=>e.category==='mobility'&&e.zones.some(z=>target.includes(z))&&e.id!=='EX41');
 if(warm){
  const seconds=objective==='cardio'?300:Math.min(180,Math.max(60,budget*.1));
  if(warm.mode==='timed'){
   let remaining=seconds;while(remaining>0){const block=createBlock(warm,profile,equipment,'gentle','warmup',`warm-${seed}-${remaining}`);block.value=Math.min(rules.byExercise[warm.id].duration.max,remaining);program.blocks.push(block);remaining-=block.value;}
  }else program.blocks.push(createBlock(warm,profile,equipment,'gentle','warmup',`warm-${seed}`));
 }
 program.blocks.push(...chosen.map(e=>createBlock(e,profile,equipment,intensity,'training',`${seed}-${e.id}`,input.completedSessions)));
 if(objective==='cardio'&&warm?.category==='cardio'&&warm.mode==='timed'){
  let remaining=300;while(remaining>0){const block=createBlock(warm,profile,equipment,'gentle','cooldown',`cool-${seed}-${remaining}`);block.value=Math.min(rules.byExercise[warm.id].duration.max,remaining);program.blocks.push(block);remaining-=block.value;}
 }else if(cool){const block=createBlock(cool,profile,equipment,'gentle','cooldown',`cool-${seed}`);program.blocks.push(block);}
 program.blocks.forEach((b,i)=>b.id=`block-${seed}-${i}-${b.exercise.id}`);
 program.reasons=chosen.map(e=>`${e.name} : ${e.zones.filter(z=>target.includes(z)).map(z=>zoneLabels[z]).join(', ')||'objectif cardio'}, famille ${e.movementPattern}, matériel compatible.`);
 program.reasons.push('Dose de départ documentée : effort ajustable, repos préservé, durée non remplie artificiellement. Sources ACSM/NHS, politique v2.');
 if(objective==='cardio')program.constraints.push('Échauffement et retour au calme progressifs de 5 min chacun. Intensité modérée : pouvoir parler sans chanter ; ajuste ton rythme, le chronomètre ne mesure pas l’effort.');
 if(objective!=='cardio')program.constraints.push('Préparation générale proposée : commence progressivement et prépare le premier mouvement sans charge ou avec une résistance légère. Le compte à rebours ne remplace pas cet échauffement.');
 if(objective!=='cardio')for(const z of target)if(!covered.has(z))program.constraints.push(`${zoneLabels[z]} : aucun mouvement compatible disponible.`);
 if(!warm)program.constraints.push('Échauffement illustré indisponible dans le lot pilote. Préparation de 5 secondes uniquement.');
 if(!cool)program.constraints.push('Retour au calme illustré indisponible dans le lot pilote.');
 program=rebalance(program);
 if(objective!=='cardio')for(const z of target)if(!program.blocks.some(b=>b.section==='training'&&b.exercise.zones.includes(z))&&!program.constraints.some(c=>c.startsWith(zoneLabels[z]+':')))program.constraints.push(`${zoneLabels[z]} : zone non couverte dans le temps disponible.`);
 const duration=estimate(program);
 if(Math.abs(duration.deviation)>.1)program.constraints.push(`Durée accessible : ${Math.round(duration.total/60)} min pour ${budget/60} min demandées. Réduis la durée ou élargis les contraintes.`);
 return {program,error:null};
}
export function rebalance(input:Program):Program{
 const program=structuredClone(input);
 // Duration is a ceiling. Never grow dose or compress recovery to fill spare time.
 while(estimate(program).total>program.budget){
  const training=program.blocks.map((b,index)=>({b,index})).filter(x=>x.b.section==='training');
  if(!training.length)break;
  const reducible=[...training].reverse().find(({b})=>b.sets>rules.byExercise[b.exercise.id].sets.min);
  if(reducible){reducible.b.sets--;continue;}
  if(training.length<=1)break;
  const accessory=[...training].reverse().find(({b})=>exercisePriority(b.exercise)===1);
  const removed=accessory||training.at(-1)!;
  program.constraints.push(`${removed.b.exercise.name} retiré pour respecter le temps disponible, sans réduire le repos.`);
  program.blocks.splice(removed.index,1);
 }
 return program;
}
export function alternatives(block:Block,p:Profile,eq:Equipment){return catalogueExercises().filter(e=>(e.id!==block.exercise.id||e.version!==block.exercise.version)&&e.category===block.exercise.category&&e.movementPattern===block.exercise.movementPattern&&e.muscles.primary.some(m=>block.exercise.muscles.primary.includes(m))&&selectable(e,p,eq)).sort((a,b)=>rules.levels[a.minimumLevel]-rules.levels[b.minimumLevel]);}
export const progressSuggestion=getProgressSuggestion;

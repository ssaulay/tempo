import {exercises,rules,selectable,resistance,zoneLabels} from '../catalog';
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
export function createBlock(e:Exercise,p:Profile,eq:Equipment,intensity:Intensity='moderate',section:Block['section']='training',id:string=uid()):Block{
 const r=rules.byExercise[e.id];const b=e.mode==='reps'?r.reps:r.duration;
 let value=Math.round(b.default*r.levelFactors[p.level]*r.intensityFactors[intensity]/(b.step||1))*(b.step||1);
 if(e.id==='EX13'&&p.capacityPushups!==null)value=Math.max(r.reps.min,Math.min(value,Math.floor(p.capacityPushups*r.capacityFraction)));
 value=Math.max(b.min,Math.min(b.max,value));
 return {id,valueCeiling:e.id==='EX13'&&p.capacityPushups!==null?Math.max(r.reps.min,Math.floor(p.capacityPushups*r.capacityCeilingFraction)):undefined,exercise:structuredClone(e),section,sets:section==='training'?r.sets.default:1,value,rest:r.rest.default,resistance:resistance(e,eq)};
}
export function blankProgram(id:string=uid(),now=new Date().toISOString()):Program{return {id,version:1,name:'Mon programme',origin:'manual',zones:[],objective:'muscles',budget:1200,blocks:[],favorite:false,createdAt:now,updatedAt:now,rulesVersion:rules.version,catalogVersion:1,reasons:[],constraints:[]};}
function seedRank(id:string,seed:number){let n=seed|0;for(const c of id)n=Math.imul(n^c.charCodeAt(0),16777619);return n>>>0;}
export interface ComposeInput {profile:Profile;equipment:Equipment;zones:Zone[];objective:Program['objective'];budget:number;intensity:Intensity;seed:number;catalogue?:Exercise[];eligible?:(e:Exercise)=>boolean;history?:Program[];createdAt?:string;}
export function compose(input:ComposeInput):{program:Program|null;error:string|null}{
 const {profile,equipment,zones,objective,budget,intensity,seed}=input;
 if(objective==='muscles'&&!zones.length)return {program:null,error:'Choisis au moins une zone ou le raccourci Cardio.'};
 if(budget<600||budget>3600||budget%300!==0)return {program:null,error:'Choisis une durée entre 10 et 60 minutes, par pas de 5 minutes.'};
 const pool=(input.catalogue||exercises).filter(e=>input.eligible?input.eligible(e):selectable(e,profile,equipment));
 const target=objective==='full'?(['legs','pectorals','back','abs'] as Zone[]):zones;
 const candidates=pool.filter(e=>objective==='cardio'?e.category==='cardio':e.category==='strength'&&e.zones.some(z=>target.includes(z)));
 if(!candidates.length)return {program:null,error:profile.prototype?'Aucun pilote compatible. Essaie pectoraux + abdominaux au niveau intermédiaire, ou déclare une bande plate pour les bras.':'Aucun exercice publié compatible. Le catalogue attend la revue technique et visuelle ; active le prototype dans les réglages pour tester les pilotes.'};
 const sorted=candidates.sort((a,b)=>{
  const previous=(e:Exercise)=>input.history?.slice(-2).some(p=>p.blocks.some(b=>b.exercise.id===e.id))?1:0;
  return previous(a)-previous(b)||seedRank(a.id,seed)-seedRank(b.id,seed);
 });
 const chosen:Exercise[]=[];const covered=new Set<Zone>();const families=new Set<string>();
 const max=Math.min(12,Math.max(2,Math.ceil(budget*.8/240)));
 const select=(e:Exercise)=>{chosen.push(e);families.add(e.movementPattern);e.zones.forEach(z=>covered.add(z));};
 for(const zone of target){const e=sorted.find(e=>e.zones.includes(zone)&&!families.has(e.movementPattern));if(e&&chosen.length<max)select(e);}
 for(const e of sorted)if(chosen.length<max&&!families.has(e.movementPattern))select(e);
 if(!chosen.length)select(sorted[0]);
 chosen.sort((a,b)=>a.position.localeCompare(b.position)||a.equipmentKey.localeCompare(b.equipmentKey));
 let program=blankProgram('composition',input.createdAt||'1970-01-01T00:00:00.000Z');program.id=`generated-${seed}-${objective}-${target.join('-')}-${budget}`;program.name=objective==='cardio'?'Un peu de cardio':objective==='full'?'Corps entier':target.map(z=>zoneLabels[z]).join(' + ');program.origin='generated';program.objective=objective;program.zones=target;program.budget=budget;
 const warm=pool.find(e=>e.category==='cardio'&&e.minimumLevel==='beginner')||pool.find(e=>e.category==='mobility'&&e.id==='EX41');
 const cool=pool.find(e=>e.category==='mobility'&&e.zones.some(z=>target.includes(z))&&e.id!=='EX41');
 if(warm){const block=createBlock(warm,profile,equipment,intensity,'warmup',`warm-${seed}`);block.value=warm.mode==='timed'?Math.min(rules.byExercise[warm.id].duration.max,Math.round(Math.min(budget*.1,180)/5)*5):block.value;program.blocks.push(block);}
 program.blocks.push(...chosen.map(e=>createBlock(e,profile,equipment,intensity,'training',`${seed}-${e.id}`)));
 if(cool){const block=createBlock(cool,profile,equipment,'gentle','cooldown',`cool-${seed}`);program.blocks.push(block);}
 program.blocks.forEach((b,i)=>b.id=`block-${seed}-${i}-${b.exercise.id}`);
 program.reasons=chosen.map(e=>`${e.name} : ${e.zones.filter(z=>target.includes(z)).map(z=>zoneLabels[z]).join(', ')||'objectif cardio'}, famille ${e.movementPattern}, matériel compatible.`);
 if(objective!=='cardio')for(const z of target)if(!covered.has(z))program.constraints.push(`${zoneLabels[z]} : aucun mouvement compatible disponible.`);
 if(!warm)program.constraints.push('Échauffement illustré indisponible dans le lot pilote. Préparation de 5 secondes uniquement.');
 if(!cool)program.constraints.push('Retour au calme illustré indisponible dans le lot pilote.');
 program=rebalance(program);
 const duration=estimate(program);
 if(Math.abs(duration.deviation)>.1)program.constraints.push(`Durée accessible : ${Math.round(duration.total/60)} min pour ${budget/60} min demandées. Réduis la durée ou élargis les contraintes.`);
 return {program,error:null};
}
export function rebalance(input:Program):Program{
 const program=structuredClone(input);
 // Uniquement sur action explicite ou composition initiale. Recherche locale bornée.
 for(let loop=0;loop<300;loop++){
  const before=estimate(program).total,delta=program.budget-before;if(Math.abs(delta)<=Math.max(15,program.budget*.03))break;
  let best:{index:number;field:'sets'|'value'|'rest';value:number}|null=null;let bestError=Math.abs(delta);
  for(let i=0;i<program.blocks.length;i++){
   const b=program.blocks[i];if(b.section!=='training')continue;const r=rules.byExercise[b.exercise.id];
   for(const [field,bounds] of [['sets',r.sets],['value',b.exercise.mode==='reps'?r.reps:r.duration],['rest',r.rest]] as const){
    const step=bounds.step||1;const val=b[field]+Math.sign(delta)*step;const max=field==='value'?Math.min(bounds.max,b.valueCeiling??bounds.max):bounds.max;if(val<bounds.min||val>max)continue;
    const perValue=b.exercise.mode==='reps'?r.secondsPerRep:1;
    const change=field==='sets'?(val-b.sets)*(b.exercise.sides*b.value*perValue+b.rest+(b.exercise.sides-1)*rules.switchSeconds):field==='value'?(val-b.value)*b.sets*b.exercise.sides*perValue:(val-b.rest)*(b.sets-1);
    const error=Math.abs(program.budget-before-change);
    if(error<bestError){best={index:i,field,value:val};bestError=error;}
   }
  }
  if(!best)break;program.blocks[best.index][best.field]=best.value;
 }
 return program;
}
export function alternatives(block:Block,p:Profile,eq:Equipment){return exercises.filter(e=>e.id!==block.exercise.id&&e.category===block.exercise.category&&e.movementPattern===block.exercise.movementPattern&&e.muscles.primary.some(m=>block.exercise.muscles.primary.includes(m))&&selectable(e,p,eq)).slice(0,3);}
export function progressSuggestion(sessions:import('../types').Session[],p:Program):string|null{
 const comparable=sessions.filter(s=>s.status==='completed'&&s.snapshot.blocks.length===p.blocks.length&&s.snapshot.blocks.every((b,i)=>b.exercise.id===p.blocks[i].exercise.id&&b.exercise.version===p.blocks[i].exercise.version&&b.resistance===p.blocks[i].resistance&&b.sets===p.blocks[i].sets&&b.value===p.blocks[i].value&&b.rest===p.blocks[i].rest)).slice(-2);
 if(comparable.length===2&&comparable.every(s=>s.feedback.difficulty==='easy'&&s.feedback.quality==='good'))return 'Deux séances comparables déclarées faciles, avec une bonne qualité : tu peux augmenter légèrement une seule cible dans l’éditeur. Rien n’est appliqué automatiquement.';
 if(comparable.at(-1)?.feedback.difficulty==='hard')return 'La dernière séance comparable a été déclarée difficile : tu peux réduire une seule cible ou choisir une variante plus facile.';
 return null;
}

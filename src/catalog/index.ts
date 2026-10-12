import raw from '../../catalog/exercises.json';
import prescription from '../../catalog/prescription-rules.json';
import assetManifest from '../../assets/manifest.json';
import type {Exercise,Rules,Profile,Equipment,Zone} from '../types';
export const exercises=raw.exercises as Exercise[];
export const rules=prescription as Rules;
export const manifest=assetManifest;
export const zoneLabels:Record<Zone,string>={pectorals:'Pectoraux',abs:'Abdominaux',back:'Dos',shoulders:'Épaules',arms:'Bras',legs:'Jambes',glutes:'Fessiers'};
export const levelLabels={beginner:'Débutant',intermediate:'Intermédiaire',advanced:'Avancé'};
export const muscleLabels:Record<string,string>={pectorals:'Pectoraux',triceps:'Triceps',biceps:'Biceps',anterior_deltoids:'Avant des épaules',lateral_deltoids:'Côté des épaules',posterior_deltoids:'Arrière des épaules',shoulders:'Épaules',arms:'Bras',back:'Dos',upper_back:'Haut du dos',lats:'Grand dorsal',core:'Sangle abdominale',abdominals:'Abdominaux',rectus_abdominis:'Grand droit abdominal',obliques:'Obliques',lateral_stabilizers:'Stabilisateurs latéraux',quadriceps:'Avant des cuisses',glutes:'Fessiers',legs:'Jambes',calves:'Mollets',hip_flexors:'Avant de hanche',hamstrings:'Arrière des cuisses',adductors:'Intérieur des cuisses',thoracic_spine:'Haut de la colonne',shoulder_girdle:'Ceinture des épaules',ankle:'Cheville',forearms:'Avant-bras'};
export const asset=(e:Exercise,name:string)=>`/assets/exercises/v${e.version}/${e.id}/${name}`;
export const defaultEquipment:Equipment={dumbbells:false,dumbbellCount:2,dumbbellKg:2,band:false,bandType:'flat',bandNominal:'',bandHandles:false,bandUnderFoot:false,rope:false,wheel:false,support:false,mat:false};
export const defaultProfile:Profile={id:'local',initialized:false,level:'beginner',equipment:{...defaultEquipment},exclusions:[],limitationsKnown:false,noImpact:false,capacityPushups:null,wheelMastery:false,viewedTechniques:[],audio:true,sounds:true,encouragements:true,voice:'',volume:.8,prototype:false};
export function equipmentSummary(eq:Equipment){return [eq.dumbbells?`${eq.dumbbellCount} haltère${eq.dumbbellCount===2?'s':''} · ${eq.dumbbellKg} kg`:null,eq.band?'Élastique':null,eq.rope?'Corde':null,eq.wheel?'Roue':null,eq.support?'Support stable':null].filter(Boolean).join(', ')||'Poids du corps';}
export function compatible(e:Exercise,p:Profile,eq:Equipment){
 if(p.exclusions.includes(e.id)||p.exclusions.includes(e.movementPattern)||p.noImpact&&e.impact)return false;
 if(rules.levels[e.minimumLevel]>rules.levels[p.level])return false;
 if(e.id==='EX13'&&p.capacityPushups!==null&&p.capacityPushups<Math.ceil(rules.byExercise.EX13.reps.min/rules.byExercise.EX13.capacityFraction))return false;
 if(e.id==='EX34'&&(!p.wheelMastery||!p.viewedTechniques.includes(e.id)))return false;
 return e.equipmentRequirements.every(r=>r.kind==='dumbbells'?eq.dumbbells&&eq.dumbbellCount>=(r.count||1):r.kind==='band'?eq.band&&r.types?.includes(eq.bandType)&&(['EX15','EX21'].includes(e.id)||eq.bandUnderFoot):r.kind==='rope'?eq.rope:r.kind==='wheel'?eq.wheel:r.kind==='support'?eq.support:false);
}
export function hasAssets(e:Exercise){const entry=manifest.entries.find(x=>x.exerciseId===e.id&&x.version===e.version);return !!entry&&entry.files.length===6&&entry.files.every(f=>f.checksum&&f.status!=='pending');}
export function selectable(e:Exercise,p:Profile,eq:Equipment){return compatible(e,p,eq)&&hasAssets(e)&&(e.contentStatus==='published'&&e.assetStatus==='published'||p.prototype&&e.prototypeReady&&(!e.equipmentRequirements.some(r=>r.kind==='band')||eq.bandType==='flat'));}
export const availableExerciseCount=exercises.filter(hasAssets).length;
export function resistance(e:Exercise,eq:Equipment){return e.equipmentKey.startsWith('dumbbells')?`${eq.dumbbellKg} kg / haltère`:e.equipmentRequirements.some(r=>r.kind==='band')?`${eq.bandType==='flat'?'Bande plate':'Tube'}${eq.bandNominal?' · '+eq.bandNominal+' (nominale fabricant)':''}`:'Poids du corps';}

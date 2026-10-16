import {calibrationAllows,calibrationCapacity,calibrationFraction} from '../calibration';
import raw from '../../catalog/exercises.json';
import variants from '../../catalog/equipment-variants.json';
import kit from '../../catalog/kit-exercises.json';
import equivalences from '../../catalog/kit-equivalences.json';
import kitRules from '../../catalog/kit-rules.json';
import extensions from '../../catalog/extensions.json';
import extensionRules from '../../catalog/extension-rules.json';
import prescription from '../../catalog/prescription-rules.json';
import assetManifest from '../../assets/manifest.json';
import type {Exercise,Rules,Profile,Equipment,Zone} from '../types';
export const historicalExercises=raw.exercises as Exercise[];
export const exercises=[...historicalExercises,...extensions.exercises as Exercise[],...kit.exercises as Exercise[]];
export const equipmentVariants=variants.variants as Exercise[];
export function getExerciseVersion(id:string,version:number){return [...exercises,...equipmentVariants].find(e=>e.id===id&&e.version===version);}
export function exerciseForEquipment(e:Exercise,eq:Equipment):Exercise{
 if(e.version!==1)return e;
 const useTube=eq.resistanceKit||eq.band&&eq.bandType==='tube';
 return useTube?equipmentVariants.find(v=>v.id===e.id)||e:e;
}
export const catalogueExercises=()=>[...exercises,...equipmentVariants];
export function kitAlternatives(e:Exercise){return equivalences.links.filter(l=>l.from===e.id&&(l.to!==e.id||l.version!==e.version)).flatMap(l=>{const exercise=getExerciseVersion(l.to,l.version);return exercise?[{...l,exercise}]:[];});}
export const catalogExerciseCount=exercises.length+equipmentVariants.length;
export function exercisesForEquipment(eq:Equipment){return exercises.map(e=>exerciseForEquipment(e,eq));}
export const rules={...prescription,byExercise:{...prescription.byExercise,...extensionRules.byExercise,...kitRules.byExercise}} as Rules;
export const manifest=assetManifest;
export const zoneLabels:Record<Zone,string>={pectorals:'Pectoraux',abs:'Abdominaux',back:'Dos',shoulders:'Épaules',arms:'Bras',legs:'Jambes',glutes:'Fessiers'};
export const levelLabels={beginner:'Simple',intermediate:'Modérée',advanced:'Élevée'};
export const muscleLabels:Record<string,string>={pectorals:'Pectoraux',triceps:'Triceps',biceps:'Biceps',anterior_deltoids:'Avant des épaules',lateral_deltoids:'Côté des épaules',posterior_deltoids:'Arrière des épaules',shoulders:'Épaules',arms:'Bras',back:'Dos',upper_back:'Haut du dos',lats:'Grand dorsal',core:'Sangle abdominale',abdominals:'Abdominaux',rectus_abdominis:'Grand droit abdominal',obliques:'Obliques',lateral_stabilizers:'Stabilisateurs latéraux',quadriceps:'Avant des cuisses',glutes:'Fessiers',legs:'Jambes',calves:'Mollets',hip_flexors:'Avant de hanche',hamstrings:'Arrière des cuisses',adductors:'Intérieur des cuisses',thoracic_spine:'Haut de la colonne',shoulder_girdle:'Ceinture des épaules',ankle:'Cheville',forearms:'Avant-bras'};
export const asset=(e:Exercise,name:string)=>`/assets/exercises/v${e.version}/${e.id}/${name}`;
export const defaultEquipment:Equipment={resistanceKit:false,resistanceKitDoorAnchor:true,dumbbells:false,dumbbellCount:2,dumbbellKg:2,band:false,bandType:'flat',bandNominal:'',bandHandles:false,bandUnderFoot:false,rope:false,wheel:false,support:false,mat:false};
export const defaultProfile:Profile={id:'local',initialized:false,level:'beginner',equipment:{...defaultEquipment},exclusions:[],limitationsKnown:false,noImpact:false,capacityPushups:null,wheelMastery:false,viewedTechniques:[],audio:true,sounds:true,encouragements:true,voice:'',volume:.8,prototype:false};
export function equipmentSummary(eq:Equipment){return [eq.dumbbells?`${eq.dumbbellCount} haltère${eq.dumbbellCount===2?'s':''} · ${eq.dumbbellKg} kg`:null,eq.band?eq.bandType==='flat'?'Bande plate longue':'Tube':null,eq.shortBand?'Bande textile courte (suivi uniquement)':null,eq.resistanceKit?'Kit de résistance · 5 tubes':null,eq.rope?'Corde':null,eq.wheel?'Roue':null,eq.support?'Support stable':null].filter(Boolean).join(', ')||'Poids du corps';}
export function compatible(e:Exercise,p:Profile,eq:Equipment){
 if(e.documentaryOnly||!calibrationAllows(p,e.id))return false;
 if(e.requiresBandHandles&&!(eq.resistanceKit||eq.bandHandles))return false;
 if(p.exclusions.includes(e.id)||p.exclusions.includes(e.movementPattern)||p.noImpact&&e.impact)return false;
 const capacity=calibrationCapacity(p,e.id);const bounds=e.mode==='reps'?rules.byExercise[e.id].reps:rules.byExercise[e.id].duration;
 if(capacity!==null&&capacity*calibrationFraction(e.id)<bounds.min)return false;
 if(['EX34','EX68'].includes(e.id)&&(!p.wheelMastery||!p.viewedTechniques.includes(e.id)))return false;
 return e.equipmentRequirements.every(r=>r.kind==='dumbbells'?eq.dumbbells&&eq.dumbbellCount>=(r.count||1):r.kind==='band'?(eq.band&&r.types?.includes(eq.bandType)||eq.resistanceKit&&r.types?.includes('tube'))&&(e.bandMount?.startsWith('door')||['EX15','EX21'].includes(e.id)||eq.bandUnderFoot):r.kind==='doorAnchor'?!!eq.resistanceKit&&eq.resistanceKitDoorAnchor!==false:r.kind==='rope'?eq.rope:r.kind==='wheel'?eq.wheel:r.kind==='support'?eq.support:false);
}
export function hasAssets(e:Exercise){const entry=manifest.entries.find(x=>x.exerciseId===e.id&&x.version===e.version);return !!entry&&entry.files.length===6&&entry.files.every(f=>f.checksum&&f.status!=='pending');}
export function selectable(e:Exercise,p:Profile,eq:Equipment){return compatible(e,p,eq)&&(hasAssets(e)||p.prototype&&e.textOnlyPrototype)&&(e.contentStatus==='published'&&e.assetStatus==='published'||p.prototype&&e.prototypeReady&&(!e.equipmentRequirements.some(r=>r.kind==='band')||e.equipmentVariant==='tube'||eq.band&&eq.bandType==='flat'));}
export const availableExerciseCount=catalogueExercises().filter(hasAssets).length;
export function resistance(e:Exercise,eq:Equipment){return e.equipmentKey.startsWith('dumbbells')?`${eq.dumbbellKg} kg / haltère`:e.equipmentRequirements.some(r=>r.kind==='band')?e.equipmentVariant==='tube'&&eq.resistanceKit?`Kit de résistance · ${eq.resistanceKitTubes?.length?eq.resistanceKitTubes.join(' + ')+' kg nominaux':'combinaison non renseignée'} (valeurs fabricant)`:eq.resistanceKit&&!eq.band?'Kit de résistance · tubes de 3 à 7 kg (valeurs nominales fabricant)':`${eq.bandType==='flat'?'Bande plate':'Tube'}${eq.bandNominal?' · '+eq.bandNominal+' (nominale fabricant)':''}`:'Poids du corps';}

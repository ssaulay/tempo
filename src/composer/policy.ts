import type {Exercise,Intensity,Rule} from '../types';
// Practical defaults derived from the source register, not measured individual capacity.
export const trainingPolicy={version:2,sourceRegister:'docs/training-rules/RECHERCHE.md',dynamic:{sets:2,reps:8,accessoryRest:90,compoundRest:120},sources:['S01','S02','S03','S07']} as const;
const accessories=new Set(['calf_raise','shoulder_abduction','scapular_pull','elbow_extension','elbow_flexion','horizontal_adduction','horizontal_abduction']);
export const exercisePriority=(e:Exercise)=>accessories.has(e.movementPattern)?1:0;
export function initialDose(e:Exercise,r:Rule,intensity:Intensity){
 const dynamic=e.category==='strength'&&e.mode==='reps'&&e.id!=='EX52';
 const bounds=e.mode==='reps'?r.reps:r.duration,step=bounds.step||1;
 const target=dynamic?trainingPolicy.dynamic.reps:bounds.default*r.intensityFactors[intensity];
 const value=Math.max(bounds.min,Math.min(bounds.max,Math.round(target/step)*step));
 return {value,sets:dynamic?Math.max(r.sets.min,Math.min(r.sets.max,intensity==='gentle'?1:2)):r.sets.default,rest:dynamic?Math.max(r.rest.min,Math.min(r.rest.max,exercisePriority(e)?90:120)):r.rest.default};
}

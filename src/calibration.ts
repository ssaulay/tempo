import type {Calibration,CalibrationResult,Profile} from './types';
export const calibrationVariants={pushups:{wall:'Au mur',incline:'Sur support fixe',knees:'Sur les genoux',classic:'Classiques'},chair:{unassisted:'Sans les mains',assisted:'Avec aide des mains'},plank:{classic:'Sur les pieds',knees:'Sur les genoux'}};
export const emptyCalibration=():Calibration=>({pushups:null,chair:null,plank:null});
const usable=(r:CalibrationResult|null|undefined)=>!!r&&!['pain','interrupted'].includes(r.reason);
export function validateCalibration(raw:unknown):raw is Calibration{
 if(!raw||typeof raw!=='object'||Array.isArray(raw))return false;
 const c=raw as Calibration;
 return (['pushups','chair','plank'] as const).every(key=>{
  const r=c[key];if(r===null)return true;if(!r||typeof r!=='object')return false;
  return Object.keys(calibrationVariants[key]).includes(r.variant)&&Number.isInteger(r.value)&&r.value>=0&&r.value<=(key==='pushups'?200:key==='chair'?60:60)&&['fatigue','posture','cap','pain','interrupted'].includes(r.reason)&&['manual','guided'].includes(r.source)&&typeof r.date==='string'&&Number.isFinite(Date.parse(r.date))&&r.protocol===1;
 });
}
export function applyCalibration(p:Profile,c:Calibration):Profile{
 if(!validateCalibration(c))throw Error('Bilan invalide.');
 return {...p,calibration:structuredClone(c),capacityPushups:usable(c.pushups)&&c.pushups!.variant==='classic'&&c.pushups!.value>0?c.pushups!.value:null};
}
export function calibrationCapacity(p:Profile,id:string):number|null{
 const c=p.calibration;
 if(['EX11','EX12','EX13'].includes(id)){
  if(!c)return id==='EX13'?p.capacityPushups:null;
  const r=c.pushups;return usable(r)&&r!.variant===({EX11:'incline',EX12:'knees',EX13:'classic'} as Record<string,string>)[id]?r!.value:null;
 }
 return id==='EX27'&&usable(c?.plank)&&c!.plank!.variant==='classic'?c!.plank!.value:null;
}
// Conservative product starting point, refined by actual sessions, not a validated prescription.
export const calibrationFraction=(id:string)=>id==='EX27'?.5:.55;
// A chosen easier push-up is a conservative boundary, never evidence of a harder variant's capacity.
export function calibrationAllows(p:Profile,id:string):boolean{
 const r=p.calibration?.pushups;if(!usable(r))return true;
 const rank:Record<string,number>={EX11:1,EX12:2,EX13:3,EX14:4,EX49:4,EX50:4,EX51:4,EX52:4,EX53:4};
 const chosen=({wall:0,incline:1,knees:2,classic:3} as Record<string,number>)[r!.variant];
 return rank[id]===undefined||rank[id]<=chosen;
}

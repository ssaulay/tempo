import {it,expect} from 'vitest';
import {exercises,defaultEquipment,defaultProfile,exerciseForEquipment,getExerciseVersion,selectable} from '../src/catalog';
import {createBlock,compose} from '../src/composer';
import {announcement} from '../src/audio/phrases';
import {startSession,transition} from '../src/session-engine';
const profile={...defaultProfile,prototype:true,level:'intermediate' as const};
const kit={...defaultEquipment,resistanceKit:true,bandUnderFoot:true};
const base=(id:string)=>exercises.find(e=>e.id===id)!;
it('choisit les médias tubes pour le kit et conserve la variante plate et les snapshots',()=>{
 for(const id of ['EX19','EX26']){
  const original=structuredClone(base(id));const tube=exerciseForEquipment(base(id),kit);
  expect(tube.version).toBe(2);expect(tube.equipmentRequirements[0].types).toEqual(['tube']);
  expect(exerciseForEquipment(base(id),{...defaultEquipment,band:true,bandUnderFoot:true}).version).toBe(1);
  expect(base(id)).toEqual(original);expect(getExerciseVersion(id,1)).toEqual(original);expect(getExerciseVersion(id,2)).toEqual(tube);
  expect(selectable(tube,profile,kit)).toBe(true);expect(selectable(tube,{...profile,prototype:false},kit)).toBe(false);
 }
});
it('exige des poignées pour un tube séparé et conserve confirmation sous pieds',()=>{
 const tube=exerciseForEquipment(base('EX26'),kit);
 expect(selectable(tube,profile,{...kit,bandUnderFoot:false})).toBe(false);
 expect(selectable(tube,profile,{...defaultEquipment,band:true,bandType:'tube',bandUnderFoot:true,bandHandles:false})).toBe(false);
 expect(selectable(tube,profile,{...defaultEquipment,band:true,bandType:'tube',bandUnderFoot:true,bandHandles:true})).toBe(true);
});
it('intègre la version tube au programme sans changer les 48 IDs',()=>{
 expect(exercises).toHaveLength(77);
 const program=compose({profile,equipment:kit,catalogue:[base('EX19'),base('EX26')],zones:['back','arms'],objective:'muscles',budget:600,intensity:'moderate',seed:2}).program!;
 expect(program.blocks.some(b=>b.exercise.id==='EX19'&&b.exercise.version===2)).toBe(true);
 expect(createBlock(base('EX26'),profile,kit).exercise.version).toBe(2);
});
it('les annonces tubes utilisent leurs propres IDs et un repère technique de préparation',()=>{
 const b=createBlock(base('EX26'),profile,kit);const p={...compose({profile,equipment:kit,zones:['arms'],objective:'muscles',budget:600,intensity:'moderate',seed:2}).program!,blocks:[b]};
 const a=startSession(p,kit,0);expect(announcement(a).ids).toEqual(['EX26.v2.prepare']);expect(announcement(a).text).toContain('coudes');
 expect(announcement(transition(a,{type:'Next'},1)).ids).toContain('EX26.v2.name');
});
it('enregistre la combinaison nominale choisie sans en déduire une force constante',async()=>{
 const {resistance}=await import('../src/catalog');const {emptyData,exportData,parseImport}=await import('../src/storage');
 const equipment={...kit,resistanceKitTubes:[3,5,7]};const data=emptyData();data.profile.equipment=equipment;
 expect(parseImport(exportData(data)).data.profile.equipment.resistanceKitTubes).toEqual([3,5,7]);
 const label=resistance(exerciseForEquipment(base('EX26'),equipment),equipment);expect(label).toContain('3 + 5 + 7');expect(label).not.toContain('15 kg');
 data.profile.equipment.resistanceKitTubes=[3,3];expect(()=>parseImport(exportData(data))).toThrow('Matériel invalide');
});
it('propose le passage explicite d’un ancien bloc à sa variante tube',async()=>{
 const {alternatives}=await import('../src/composer');
 const old=createBlock(base('EX19'),profile,{...defaultEquipment,band:true,bandUnderFoot:true});
 expect(old.exercise.version).toBe(1);expect(alternatives(old,profile,kit).some(e=>e.id==='EX19'&&e.version===2)).toBe(true);expect(old.exercise.version).toBe(1);
});
it('propose une combinaison par exercice sans reprendre le choix global historique',()=>{
 const block=createBlock(base('EX26'),profile,{...kit,resistanceKitTubes:[3,4,5,6,7]});
 expect(block.resistance).toContain('3 kg');expect(block.resistance).not.toContain('3 + 4');
 expect(block.resistanceRecommendation).toContain('départ');
});
it('adapte la proposition aux retours de séances terminées pour ce mouvement',async()=>{
 const {recommendTubes}=await import('../src/composer');
 const e=exerciseForEquipment(base('EX26'),kit),p={...compose({profile,equipment:kit,zones:['arms'],objective:'muscles',budget:600,intensity:'moderate',seed:2}).program!,blocks:[createBlock(e,profile,kit)]};
 const make=()=>{let a=startSession(p,kit,0);a=transition(a,{type:'Next'},1);a=transition(a,{type:'CompleteSet',attemptId:a.phases[a.index].attemptId,declared:12},2);return {...a.session,status:'completed' as const,feedback:{difficulty:'easy',quality:'good'} as import('../src/types').Feedback};};
 const a=make(),b=make();expect(recommendTubes(e,[a,b]).tubes).toEqual([3]);
 b.feedback={difficulty:'hard',quality:'good'};expect(recommendTubes(e,[a,b]).tubes).toEqual([3]);
 expect(recommendTubes(e,[{...b,attempts:[]}]).tubes).toEqual([3]);
 const old=structuredClone(a);old.snapshot.blocks[0].exercise.version=1;expect(recommendTubes(e,[old]).tubes).toEqual([3]);
});

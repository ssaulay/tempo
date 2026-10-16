import {describe,it,expect} from 'vitest';
import {compatible,defaultProfile,defaultEquipment,exercises,selectable} from '../src/catalog';
describe('Difficulté informative',()=>{
 it('autorise les exercices intermédiaires et avancés sans niveau de profil',()=>{
  const equipment={...defaultEquipment,dumbbells:true,support:true};
  const available=exercises.filter(e=>e.minimumLevel!=='beginner'&&compatible(e,{...defaultProfile,level:'advanced'},equipment));
  expect(available.length).toBeGreaterThan(0);
  for(const exercise of available){
   expect(compatible(exercise,defaultProfile,equipment),exercise.name).toBe(true);
   expect(selectable(exercise,{...defaultProfile,prototype:true},equipment)).toBe(selectable(exercise,{...defaultProfile,level:'advanced',prototype:true},equipment));
  }
 });
});

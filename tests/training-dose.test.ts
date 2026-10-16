import {describe,it,expect} from 'vitest';
import {createBlock,blankProgram,rebalance,recommendTubes,compose,validateBlock,estimate} from '../src/composer';
import {defaultProfile,defaultEquipment,exercises} from '../src/catalog';
import type {Session} from '../src/types';
const ex=(id:string)=>exercises.find(e=>e.id===id)!;
describe('doses cohérentes avant durée',()=>{
 it('ne dose pas selon un niveau historique et utilise deux séries de huit',()=>{
  const a=createBlock(ex('EX29'),{...defaultProfile,level:'beginner'},defaultEquipment);
  const b=createBlock(ex('EX29'),{...defaultProfile,level:'advanced'},defaultEquipment);
  expect(a.value).toBe(8);expect(b.value).toBe(8);expect(a.sets).toBe(2);expect(a.rest).toBe(120);
 });
 it('prévoit 90 secondes pour un accessoire sans raccourcir en intense',()=>{
  const a=createBlock(ex('EX26'),defaultProfile,defaultEquipment,'intense');expect(a.rest).toBe(90);expect(a.value).toBe(8);
 });
 it('ne remplit pas une heure en ajoutant répétitions séries ou repos',()=>{
  const p=blankProgram();p.budget=3600;p.blocks=[createBlock(ex('EX29'),defaultProfile,defaultEquipment)];
  expect(rebalance(p).blocks).toEqual(p.blocks);
 });
 it('préserve le repos et retire du volume si la durée est dépassée',()=>{
  const p=blankProgram();p.budget=600;p.blocks=Array.from({length:8},()=>createBlock(ex('EX29'),defaultProfile,defaultEquipment));
  const result=rebalance(p);expect(result.blocks.every(b=>b.rest===120&&b.value===8)).toBe(true);expect(result.blocks.reduce((n,b)=>n+b.sets,0)).toBeLessThan(p.blocks.reduce((n,b)=>n+b.sets,0));
 });
 it('ne monte pas les tubes après un retour global facile',()=>{
  const e={...ex('EX26'),version:2,equipmentVariant:'tube' as const};const p=blankProgram();p.blocks=[{...createBlock(e,defaultProfile,defaultEquipment,undefined,undefined,undefined,[],false),resistance:'Tube 3 kg (valeurs nominales fabricant)'}];
  const s={status:'completed',startedAt:'2026-10-12',snapshot:p,attempts:[{exerciseId:e.id,exerciseVersion:2,status:'validated'}],feedback:{difficulty:'easy',quality:'good'}} as unknown as Session;
  expect(recommendTubes(e,[s,{...s,startedAt:'2026-10-13'}]).tubes).toEqual([3]);
 });
 it.each([600,1200,1800,2700,3600])('génère des doses dans les bornes pour %i secondes sans charger les séries',budget=>{
  const equipment={...defaultEquipment,resistanceKit:true,bandUnderFoot:true,dumbbells:true,support:true};
  const p=compose({profile:{...defaultProfile,prototype:true},equipment,zones:['pectorals','abs'],objective:'muscles',budget,intensity:'intense',seed:71}).program!;
  expect(p.blocks.length).toBeGreaterThan(0);
  for(const b of p.blocks){expect(validateBlock(b),b.exercise.name).toEqual([]);if(b.exercise.category==='strength'&&b.exercise.mode==='reps'&&b.exercise.id!=='EX52')expect(b.sets).toBeLessThanOrEqual(2);}
  if(estimate(p).total<budget*.9)expect(p.constraints.some(x=>x.includes('Durée accessible'))).toBe(true);
 });
 it('prévoit cinq minutes de mise en route et de décélération pour le cardio',()=>{
  const p=compose({profile:{...defaultProfile,prototype:true},equipment:defaultEquipment,zones:[],objective:'cardio',budget:600,intensity:'moderate',seed:7}).program!;
  expect(p.blocks.filter(b=>b.section==='warmup').reduce((n,b)=>n+b.value,0)).toBe(300);
  expect(p.blocks.filter(b=>b.section==='cooldown').reduce((n,b)=>n+b.value,0)).toBe(300);
  expect(p.constraints.some(x=>x.includes('Durée accessible'))).toBe(true);
 });
 it('préfère un mouvement contrôlé au pliométrique sans interdire ce dernier',()=>{
  for(let seed=0;seed<20;seed++){
   const p=compose({profile:{...defaultProfile,prototype:true},equipment:defaultEquipment,zones:['pectorals'],objective:'muscles',budget:1800,intensity:'moderate',seed}).program!;
   expect(p.blocks.some(b=>b.exercise.id==='EX52')).toBe(false);
  }
  expect(compose({profile:{...defaultProfile,prototype:true},equipment:defaultEquipment,zones:['pectorals'],objective:'muscles',budget:1800,intensity:'moderate',seed:1,catalogue:[ex('EX52')]}).program!.blocks[0].exercise.id).toBe('EX52');
 });
});

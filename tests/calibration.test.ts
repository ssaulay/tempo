import 'fake-indexeddb/auto';
import {describe,it,expect} from 'vitest';
import {defaultProfile,defaultEquipment,exercises,compatible} from '../src/catalog';
import {createBlock,compose} from '../src/composer';
import {applyCalibration,validateCalibration,calibrationCapacity} from '../src/calibration';
import {emptyData,exportData,parseImport,saveProfile,loadData} from '../src/storage';
import type {Calibration} from '../src/types';
const result=(variant:string,value:number,reason='fatigue')=>({variant,value,reason,source:'manual',date:'2026-10-13T10:00:00.000Z',protocol:1});
const calibration=(variant='knees',value=10)=>({pushups:result(variant,value),chair:null,plank:null}) as Calibration;
const ex=(id:string)=>exercises.find(e=>e.id===id)!;
describe('calibrage par mouvement',()=>{
 it('dose uniquement la variante de pompes testée sans transférer aux charges',()=>{
  const p=applyCalibration(defaultProfile,calibration());
  expect(createBlock(ex('EX12'),p,defaultEquipment).value).toBe(5);
  expect(createBlock(ex('EX13'),p,defaultEquipment).value).toBe(8);
  expect(createBlock(ex('EX16'),p,defaultEquipment).value).toBe(8);
  expect(p.capacityPushups).toBeNull();
 });
 it('privilégie la variante mesurée dans la génération',()=>{
  const profile=applyCalibration({...defaultProfile,prototype:true},calibration('knees',12));
  for(let seed=0;seed<10;seed++){const p=compose({profile,equipment:defaultEquipment,zones:['pectorals'],objective:'muscles',budget:1200,intensity:'moderate',seed}).program!;expect(p.blocks.some(b=>b.exercise.id==='EX12')).toBe(true);}
 });
 it('distingue zéro de capacité inconnue et évite une dose supérieure à la capacité',()=>{
  const p=applyCalibration(defaultProfile,calibration('classic',0));
  expect(calibrationCapacity(p,'EX13')).toBe(0);
  expect(compatible(ex('EX13'),p,defaultEquipment)).toBe(false);
  expect(calibrationCapacity(p,'EX12')).toBeNull();
 });
 it('ne propose pas une pompe plus exigeante que la variante choisie au bilan',()=>{
  const p=applyCalibration(defaultProfile,calibration('knees',12));
  expect(compatible(ex('EX13'),p,defaultEquipment)).toBe(false);
  expect(compatible(ex('EX12'),p,defaultEquipment)).toBe(true);
 });
 it('ignore douleur et interruption plutôt que de les convertir en performance',()=>{
  const c=calibration('classic',5);c.pushups!.reason='pain';
  expect(calibrationCapacity(applyCalibration(defaultProfile,c),'EX13')).toBeNull();
 });
 it('calibre la planche classique sans transférer une variante genoux ni les levers de chaise',()=>{
  const c=calibration();c.plank=result('classic',40) as Calibration['plank'];c.chair=result('unassisted',18) as Calibration['chair'];
  const p=applyCalibration(defaultProfile,c);
  expect(createBlock(ex('EX27'),p,defaultEquipment).value).toBe(20);
  expect(createBlock(ex('EX06'),p,defaultEquipment).value).toBe(8);
  c.plank!.variant='knees';expect(createBlock(ex('EX27'),applyCalibration(defaultProfile,c),defaultEquipment).value).toBe(30);
 });
 it('valide les valeurs, variantes, dates et raisons sans refuser les anciens exports',()=>{
  expect(validateCalibration(calibration())).toBe(true);
  for(const bad of [calibration('unknown'),calibration('classic',-1),calibration('classic',1.5)])expect(validateCalibration(bad)).toBe(false);
  const d=emptyData();d.profile=applyCalibration(d.profile,calibration());
  expect(parseImport(exportData(d)).data.profile.calibration).toEqual(d.profile.calibration);
  const raw=JSON.parse(exportData(d));delete raw.profile.calibration;expect(parseImport(JSON.stringify(raw)).data.profile.calibration).toBeUndefined();
  raw.profile.calibration=calibration('unknown');expect(()=>parseImport(JSON.stringify(raw))).toThrow();
 });
 it('conserve le bilan au rechargement et remplace une ancienne capacité classique',async()=>{
  const p=applyCalibration({...defaultProfile,capacityPushups:15},calibration('knees',12));
  await saveProfile(p);expect((await loadData()).profile.calibration).toEqual(p.calibration);expect(p.capacityPushups).toBeNull();
 });
});

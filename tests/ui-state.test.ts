import {describe,it,expect} from 'vitest';
import {blankProgram,createBlock} from '../src/composer';
import {defaultEquipment,defaultProfile,exercises,compatible} from '../src/catalog';
import {programZones,sameProgramContent,searchText} from '../src/ui/state';
import {emptyData,exportData,parseImport} from '../src/storage';
describe('cohérence des états d’édition',()=>{
 it('un changement de dose redevient un brouillon, les métadonnées de sauvegarde seules non',()=>{
  const original=blankProgram();original.blocks=[createBlock(exercises[0],defaultProfile,defaultEquipment)];
  const saved={...structuredClone(original),version:2,updatedAt:'2026-10-14T18:00:00Z',favorite:true};
  expect(sameProgramContent(original,saved)).toBe(true);
  const edited=structuredClone(saved);edited.blocks[0].sets++;expect(sameProgramContent(edited,saved)).toBe(false);
  expect(sameProgramContent({...original,id:'autre'},saved)).toBe(false);
 });
 it('retire les zones du dernier mouvement supprimé sans modifier le programme source',()=>{
  const p=blankProgram();p.blocks=[createBlock(exercises[0],defaultProfile,defaultEquipment)];const before=JSON.stringify(p);
  expect(programZones(p)).toEqual([...new Set(p.blocks[0].exercise.zones)]);
  expect(programZones({...p,blocks:[]})).toEqual([]);expect(JSON.stringify(p)).toBe(before);
 });
 it('cherche sans accents, casse ou espaces superflus',()=>{expect(searchText('  ÉPAULES   et   bras ')).toBe('epaules et bras');});
 it('une bande textile courte ne donne pas accès aux mouvements à bande longue',()=>{
  const eq={...defaultEquipment,shortBand:true},profile={...defaultProfile,prototype:true};
  for(const e of exercises.filter(e=>e.equipmentRequirements.some(r=>r.kind==='band')))expect(compatible(e,profile,eq)).toBe(false);
  const data=emptyData();data.profile.equipment=eq;expect(parseImport(exportData(data)).data.profile.equipment.shortBand).toBe(true);
  expect(()=>parseImport(exportData({...data,profile:{...data.profile,equipment:{...eq,shortBand:'oui' as unknown as boolean}}}))).toThrow('Matériel invalide.');
 });
});

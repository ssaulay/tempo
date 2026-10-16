import {it,expect} from 'vitest';
import {compatible,selectable,defaultProfile,defaultEquipment,exercises,equipmentSummary} from '../src/catalog';
import {emptyData,exportData,parseImport} from '../src/storage';
const profile={...defaultProfile,level:'intermediate' as const,prototype:true};
const exercise=(id:string)=>exercises.find(e=>e.id===id)!;
it('reconnaît le kit de tubes sans le confondre avec une bande plate',()=>{
 const kit={...defaultEquipment,resistanceKit:true,bandUnderFoot:true};
 expect(equipmentSummary(kit)).toContain('Kit de résistance');
 expect(compatible(exercise('EX26'),profile,kit)).toBe(true);
 expect(compatible(exercise('EX19'),profile,kit)).toBe(false);
 expect(selectable(exercise('EX26'),profile,kit)).toBe(false);
 expect(compatible(exercise('EX26'),profile,{...kit,bandUnderFoot:false})).toBe(false);
});
it('conserve une bande plate déclarée en plus du kit',()=>{
 const equipment={...defaultEquipment,resistanceKit:true,band:true,bandUnderFoot:true};
 expect(selectable(exercise('EX26'),profile,equipment)).toBe(true);
 expect(selectable(exercise('EX19'),profile,equipment)).toBe(true);
});
it('conserve le kit dans un export et accepte les anciens profils',()=>{
 const data=emptyData();const equipment={...data.profile.equipment,resistanceKit:true};data.profile.equipment=equipment;
 expect((parseImport(exportData(data)).data.profile.equipment as typeof equipment).resistanceKit).toBe(true);
 delete (data.profile.equipment as Partial<typeof equipment>).resistanceKit;
 expect(()=>parseImport(exportData(data))).not.toThrow();
});
it('refuse une déclaration de kit invalide à l’import',()=>{
 const raw=JSON.parse(exportData(emptyData()));raw.profile.equipment.resistanceKit='oui';
 expect(()=>parseImport(JSON.stringify(raw))).toThrow('Matériel invalide');
});

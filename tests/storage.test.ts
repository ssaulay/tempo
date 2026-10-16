import 'fake-indexeddb/auto';
import {beforeEach,describe,it,expect} from 'vitest';
import {defaultEquipment,defaultProfile,exercises} from '../src/catalog';
import {blankProgram,createBlock} from '../src/composer';
import {startSession,transition,currentPhase} from '../src/session-engine';
import {clearData,emptyData,exportData,finalize,importData,loadData,parseImport,saveDraft,saveProfile,saveProgram,checkpoint,deleteProgram,deleteActive} from '../src/storage';
const program=()=>{const p=blankProgram();p.blocks=[{...createBlock(exercises.find(e=>e.id==='EX29')!,defaultProfile,defaultEquipment),sets:1}];return p;};
beforeEach(async()=>{await clearData();});
describe('IndexedDB, snapshots et import',()=>{
 it('conserve profil, programme, brouillon et checkpoint au rechargement',async()=>{const p=program(),a=startSession(p,defaultEquipment,0);await saveProfile({...defaultProfile,initialized:true});await saveProgram(p);await saveDraft(p);await checkpoint(a);const d=await loadData();expect(d.profile.initialized).toBe(true);expect(d.programs[0]).toEqual(p);expect(d.draft).toEqual(p);expect(d.active?.session.id).toBe(a.session.id);});
 it('finalisation transactionnelle idempotente et suppression sans effet historique',async()=>{const p=program();await saveProgram(p);let a=startSession(p,defaultEquipment,0,'unique');a=transition(a,{type:'Next'},0);a=transition(a,{type:'CompleteSet',attemptId:currentPhase(a).attemptId,declared:8},20000);await Promise.all([finalize(a),finalize(a)]);await deleteProgram(p.id);const d=await loadData();expect(d.sessions).toHaveLength(1);expect(d.programs).toHaveLength(0);expect(d.active).toBeNull();expect(d.sessions[0].snapshot.name).toBe(p.name);});
 it('supprime le checkpoint après les écritures en attente sans toucher au programme ni à l’historique',async()=>{const p=program();await saveProgram(p);await saveDraft(p);const a=startSession(p,defaultEquipment,0);await Promise.all([checkpoint(a),deleteActive()]);const d=await loadData();expect(d.active).toBeNull();expect(d.sessions).toHaveLength(0);expect(d.programs).toEqual([p]);expect(d.draft).toEqual(p);});
 it('export/import conserve les données et fusionne sans doublon',async()=>{const d=emptyData();d.programs=[program()];const parsed=parseImport(exportData(d));await importData(parsed.data,'merge');await importData(parsed.data,'merge');expect((await loadData()).programs).toHaveLength(1);});
 it('refuse schéma, charge, prescriptions, résultats et IDs dupliqués invalides',()=>{const d=emptyData();d.programs=[program()];const raw=JSON.parse(exportData(d));for(const mutate of [(x:any)=>x.schema=99,(x:any)=>x.profile.equipment.dumbbellKg=-1,(x:any)=>x.programs[0].blocks[0].sets=999,(x:any)=>x.programs.push(x.programs[0])]){const x=structuredClone(raw);mutate(x);expect(()=>parseImport(JSON.stringify(x))).toThrow();}});
 it('signale les exercices inconnus pour empêcher leur démarrage',()=>{const d=emptyData();d.programs=[program()];d.programs[0].blocks[0].exercise.id='EX99';expect(parseImport(exportData(d)).unknownIds).toEqual(['EX99']);});
 it('remplacement retire les anciens objets',async()=>{const old=program();await saveProgram(old);const d=emptyData();d.programs=[program()];await importData(d,'replace');const loaded=await loadData();expect(loaded.programs).toHaveLength(1);expect(loaded.programs[0].id).not.toBe(old.id);});
});

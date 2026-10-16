import {afterEach,beforeEach,expect,it,vi} from 'vitest';
import {announce,say,stopAudio,unlockAudio,recordedVoices} from '../src/audio';
import {announcement} from '../src/audio/phrases';
import {defaultProfile,defaultEquipment,exercises} from '../src/catalog';
import {blankProgram,createBlock} from '../src/composer';
import {startSession,transition} from '../src/session-engine';
function session(){const p=blankProgram();p.blocks=['EX29','EX32'].map(id=>({...createBlock(exercises.find(e=>e.id===id)!,defaultProfile,defaultEquipment),sets:3,value:12,rest:30}));return startSession(p,defaultEquipment,0);}
const speak=vi.fn(),start=vi.fn(),stop=vi.fn();
// Keep the incomplete-pack scenario stable as new production clips are added.
vi.mock('../src/audio/recordings.json',async importOriginal=>{
 const original=await importOriginal<{default:typeof import('../src/audio/recordings.json')}>();
 return {default:{...original.default,entries:original.default.entries.filter(e=>e.id!=='reps.12')}};
});
beforeEach(()=>{
 vi.stubGlobal('window',{speechSynthesis:{cancel:vi.fn(),getVoices:()=>[{lang:'fr-FR',voiceURI:'system'}],speak}});
 vi.stubGlobal('SpeechSynthesisUtterance',class{constructor(public text:string){}});
 vi.stubGlobal('AudioContext',class{state='running';currentTime=0;sampleRate=44100;destination={};resume(){return Promise.resolve();}createBuffer(){return {silent:true};}decodeAudioData(){return Promise.resolve({duration:1});}createGain(){return {gain:{value:0},connect:vi.fn()};}createBufferSource(){return {buffer:null as null|{silent?:boolean},connect:vi.fn(),start(){if(!this.buffer?.silent)start();},stop,onended:null};}});
 vi.stubGlobal('fetch',vi.fn(async()=>new Response(new Uint8Array([1,2]))));
});
afterEach(()=>{stopAudio();vi.clearAllMocks();vi.unstubAllGlobals();});
it('expose les deux voix retenues même avec un lot incomplet',()=>{expect(recordedVoices.map(v=>v.id)).toEqual(['tempo:F1','tempo:M2-deep-v2']);});
it('lit une préparation enregistrée sans voix système',async()=>{unlockAudio();const a=session();expect(announce(a,{...defaultProfile,voice:'tempo:F1'})).toBe(true);await vi.waitFor(()=>expect(start).toHaveBeenCalled());expect(speak).not.toHaveBeenCalled();});
it('utilise une annonce système complète si un seul segment manque',()=>{unlockAudio();const a=transition(session(),{type:'Next'},1);announce(a,{...defaultProfile,voice:'tempo:M2-deep-v2'});expect(speak).toHaveBeenCalledWith(expect.objectContaining({text:expect.stringContaining('12 répétitions')}));expect(start).not.toHaveBeenCalled();});
it('garde répétitions par côté dans un seul clip',()=>{const a=transition(session(),{type:'Next'},1);a.session.snapshot.blocks[0].exercise={...a.session.snapshot.blocks[0].exercise,counting:'per_side'};expect(announcement(a).ids).toContain('reps.12.per_side');expect(announcement(a).ids).not.toContain('common.per_side');});
it('annonce la prochaine série du même exercice pendant le repos',()=>{const a=transition(transition(session(),{type:'Next'},1),{type:'CompleteSet',attemptId:session().phases[1].attemptId,declared:12},2);a.index=2;a.state='resting';const msg=announcement(a);expect(msg.ids).toContain('set.2.3');expect(msg.text).not.toContain('Crunch court');});
it('annuler empêche une lecture tardive après téléchargement',async()=>{let resolve!:(r:Response)=>void;vi.stubGlobal('fetch',vi.fn(()=>new Promise<Response>(r=>{resolve=r;})));unlockAudio();say('Jumping jacks. Prépare-toi.',{...defaultProfile,voice:'tempo:F1'});stopAudio();resolve(new Response(new Uint8Array([1])));await new Promise(r=>setTimeout(r,20));expect(start).not.toHaveBeenCalled();expect(speak).not.toHaveBeenCalled();});
it('gère une erreur de fichier avec une annonce système entière',async()=>{vi.stubGlobal('fetch',async()=>new Response('',{status:404}));unlockAudio();say('Jumping jacks. Prépare-toi.',{...defaultProfile,voice:'tempo:M2-deep-v2'});await vi.waitFor(()=>expect(speak).toHaveBeenCalledWith(expect.objectContaining({text:'Jumping jacks. Prépare-toi.'})));});
it('respecte mute même avec un enregistrement disponible',()=>{unlockAudio();expect(say('Jumping jacks. Prépare-toi.',{...defaultProfile,audio:false})).toBe(false);expect(start).not.toHaveBeenCalled();expect(speak).not.toHaveBeenCalled();});
it('lit les nouvelles consignes tubes via la voix système sans réutiliser un clip historique',async()=>{
 const {exerciseForEquipment}=await import('../src/catalog');const kit={...defaultEquipment,resistanceKit:true,bandUnderFoot:true};
 const e=exerciseForEquipment(exercises.find(e=>e.id==='EX26')!,kit);const p=blankProgram();p.blocks=[createBlock(e,defaultProfile,kit)];
 unlockAudio();announce(startSession(p,kit,0),{...defaultProfile,voice:'tempo:F1'});
 expect(speak).toHaveBeenCalledWith(expect.objectContaining({text:expect.stringContaining('coudes près du buste')}));expect(fetch).not.toHaveBeenCalled();
});

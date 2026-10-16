import {afterEach,expect,it,vi} from 'vitest';

afterEach(()=>vi.unstubAllGlobals());
it.each([false,true])('active la lecture iPhone avant le contexte, même si le réglage est refusé (%s)',async refused=>{
 vi.resetModules();let mode='auto',started=false;
 vi.stubGlobal('navigator',{audioSession:{get type(){return mode;},set type(value:string){if(refused)throw Error('Refus');mode=value;}}});
 vi.stubGlobal('AudioContext',class{
  constructor(){expect(mode).toBe(refused?'auto':'playback');}
  destination={};sampleRate=44100;
  resume(){return Promise.resolve();}
  createBuffer(){return {};}
  createBufferSource(){return {buffer:null,connect(){},start(){started=true;}};}
 });
 const {unlockAudio}=await import('../src/audio');unlockAudio();
 expect(started).toBe(true);
});
it('amorce la sortie audio pendant le geste, avant la résolution de resume',async()=>{
 vi.resetModules();
 let gesture=true,activated=false;
 vi.stubGlobal('AudioContext',class{
  destination={};
  resume(){return new Promise<void>(()=>{});}
  createBuffer(){return {};}
  createBufferSource(){return {buffer:null,connect(){},start(){activated=gesture;}};}
 });
 const {unlockAudio}=await import('../src/audio');
 unlockAudio();gesture=false;
 expect(activated).toBe(true);
});

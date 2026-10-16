import type {ActiveSession,Profile} from '../types';
import recordings from './recordings.json';
import tubeRecordings from './tube-recordings.json';
const clipEntries=[...recordings.entries,...tubeRecordings.entries];
import {announcement,type Announcement} from './phrases';
let ctx:AudioContext|null=null,playing:AudioBufferSourceNode|null=null,revision=0;
export const recordedVoices=recordings.voices;
const buffers=new Map<string,AudioBuffer>();
export function unlockAudio(){
 // Request media playback rather than iOS's default ambient audio routing.
 // Unsupported or denied AudioSession settings must not prevent activation.
 try{const session=(navigator as Navigator&{audioSession?:{type:string}}).audioSession;if(session)session.type='playback';}catch{}
 try{
 ctx ||= new AudioContext();void ctx.resume().catch(()=>{});
 // Safari needs the output started in the touch handler, before any await.
 const source=ctx.createBufferSource();source.buffer=ctx.createBuffer(1,1,ctx.sampleRate);source.connect(ctx.destination);source.start();
}catch{} }
export function stopAudio(){revision++;if(playing){playing.onended=null;try{playing.stop();}catch{}playing=null;}if('speechSynthesis' in window)window.speechSynthesis.cancel();}
export function beep(volume=.4){if(!ctx)return;try{const osc=ctx.createOscillator(),gain=ctx.createGain();osc.type='sine';osc.frequency.value=660;gain.gain.setValueAtTime(volume*.12,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.16);osc.connect(gain);gain.connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+.18);}catch{}}
export function frenchVoices(){return 'speechSynthesis'in window?window.speechSynthesis.getVoices().filter(v=>v.lang.startsWith('fr')):[];}
function systemSay(text:string,p:Profile){const voices=frenchVoices(),voice=voices.find(v=>v.voiceURI===p.voice)||voices[0];if(!voice)return false;try{const u=new SpeechSynthesisUtterance(text);u.lang='fr-FR';u.voice=voice;u.volume=p.volume;u.rate=.95;window.speechSynthesis.speak(u);return true;}catch{return false;}}
async function playFiles(urls:string[],message:Announcement,p:Profile,token:number){
 const context=ctx!;
 try{
  // Load the entire announcement before playing, so failures never omit an instruction.
  const list=await Promise.all(urls.map(async url=>{
   const cached=buffers.get(url);if(cached)return cached;
   const response=await fetch(url);if(!response.ok)throw Error('Audio indisponible');
   const buffer=await context.decodeAudioData(await response.arrayBuffer());buffers.set(url,buffer);return buffer;
  }));
  if(token!==revision)return;
  if(context.state!=='running')await context.resume();
  if(token!==revision)return;
  if(context.state!=='running')throw Error('Audio suspendu');
  const next=(index:number)=>{
   if(token!==revision||index>=list.length)return;
   const source=context.createBufferSource(),gain=context.createGain();source.buffer=list[index];gain.gain.value=p.volume;source.connect(gain);gain.connect(context.destination);playing=source;
   source.onended=()=>{if(playing===source)playing=null;next(index+1);};source.start();
  };next(0);
 }catch{if(token===revision&&!systemSay(message.text,p)&&p.sounds)beep(p.volume);}
}
function speak(message:Announcement,p:Profile){
 stopAudio();if(!p.audio)return false;if(!message.text)return true;
 const pack=p.voice===''?'F1':recordedVoices.find(v=>v.id===p.voice)?.pack;
 const clips=message.ids.map(id=>clipEntries.find(e=>e.voice===pack&&e.id===id));
 if(ctx&&pack&&clips.length>0&&clips.every(Boolean)){void playFiles(clips.map(c=>c!.url),message,p,revision);return true;}
 return systemSay(message.text,p);
}
export function say(text:string,p:Profile){
 const pack=p.voice===''?'F1':recordedVoices.find(v=>v.id===p.voice)?.pack;
 const clip=clipEntries.find(e=>e.voice===pack&&e.text===text);
 return speak({text,ids:clip?[clip.id]:[]},p);
}
export function testVoice(p:Profile){return say('Jumping jacks. Prépare-toi.',{...p,audio:true});}
export function announce(a:ActiveSession,p:Profile){const msg=announcement(a);const ok=speak(msg,p);if(!ok&&p.sounds)beep(p.volume);return ok;}

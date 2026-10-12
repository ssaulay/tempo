import type {ActiveSession,Profile} from '../types';
import {currentPhase} from '../session-engine';
let ctx:AudioContext|null=null;
export function unlockAudio(){try{ctx ||= new AudioContext();void ctx.resume();}catch{} }
export function stopAudio(){if('speechSynthesis' in window)window.speechSynthesis.cancel();}
export function beep(volume=.4){if(!ctx)return;try{const osc=ctx.createOscillator(),gain=ctx.createGain();osc.type='sine';osc.frequency.value=660;gain.gain.setValueAtTime(volume*.12,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.16);osc.connect(gain);gain.connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+.18);}catch{}}
export function frenchVoices(){return 'speechSynthesis'in window?window.speechSynthesis.getVoices().filter(v=>v.lang.startsWith('fr')):[];}
export function say(text:string,p:Profile){stopAudio();if(!p.audio)return false;const voices=frenchVoices(),voice=voices.find(v=>v.voiceURI===p.voice)||voices[0];if(!voice)return false;try{const u=new SpeechSynthesisUtterance(text);u.lang='fr-FR';u.voice=voice;u.volume=p.volume;u.rate=.95;window.speechSynthesis.speak(u);return true;}catch{return false;}}
export function announce(a:ActiveSession,p:Profile){
 if(['paused','suspended'].includes(a.state)){stopAudio();return true;}
 if(a.state==='completed')return say('Séance terminée.',p);
 const phase=currentPhase(a);if(!phase)return true;const b=a.session.snapshot.blocks[phase.blockIndex];const next=a.session.snapshot.blocks[phase.blockIndex+1];
 const msg=phase.kind==='preparing'?`${b.exercise.name}. Prépare-toi.`:phase.kind==='working_reps'?`${b.exercise.name}. Série ${phase.set} sur ${b.sets}. ${b.value} répétitions${b.exercise.counting==='per_side'?' par côté':''}.`:phase.kind==='working_timed'?`${b.exercise.name}. Série ${phase.set} sur ${b.sets}. ${b.value} secondes.`:phase.kind==='resting'?`${Math.ceil(a.remaining)} secondes de récupération. Ensuite, ${next?.exercise.name||b.exercise.name}.`:'Change de côté.';
 const ok=say(msg,p);if(!ok&&p.sounds)beep(p.volume);return ok;
}

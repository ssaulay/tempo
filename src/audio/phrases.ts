import type {ActiveSession,Phase} from '../types';
import {currentPhase,nextPhaseLabel} from '../session-engine';
export interface Announcement {text:string;ids:string[]}
const key=(e:import('../types').Exercise)=>e.audioKey||e.id;
const prepare=(e:import('../types').Exercise)=>`${e.name}. Prépare-toi.${e.preparationCue?' '+e.preparationCue:''}`;
function nextIds(a:ActiveSession,p:Phase):string[]{
 const b=a.session.snapshot.blocks[p.blockIndex];
 if(p.kind==='preparing')return [`${key(b.exercise)}.prepare`];
 if(p.kind==='resting')return [`rest.${p.seconds}`];
 if(p.kind==='switching_side')return ['common.switch'];
 return [`${key(b.exercise)}.name`,`set.${p.set}.${b.sets}`,...(b.exercise.sides>1?[`common.side.${p.side}`]:[]),...(p.attempt>1?[`attempt.${p.attempt}`]:[])];
}
export function announcement(a:ActiveSession):Announcement{
 if(a.state==='completed')return {text:'Séance terminée.',ids:['common.complete']};
 if(['paused','suspended','aborted'].includes(a.state))return {text:'',ids:[]};
 const p=currentPhase(a);if(!p)return {text:'',ids:[]};const b=a.session.snapshot.blocks[p.blockIndex];
 if(p.kind==='preparing')return {text:prepare(b.exercise),ids:[`${key(b.exercise)}.prepare`]};
 if(p.kind==='working_reps')return {text:`${b.exercise.name}. Série ${p.set} sur ${b.sets}. ${b.value} répétitions${b.exercise.counting==='per_side'?' par côté':''}.`,ids:[`${key(b.exercise)}.name`,`set.${p.set}.${b.sets}`,`reps.${b.value}${b.exercise.counting==='per_side'?'.per_side':''}`]};
 if(p.kind==='working_timed')return {text:`${b.exercise.name}. Série ${p.set} sur ${b.sets}. ${b.value} secondes.`,ids:[`${key(b.exercise)}.name`,`set.${p.set}.${b.sets}`,`duration.${b.value}`]};
 if(p.kind==='resting'){const next=a.phases[a.index+1];return {text:`${Math.ceil(a.remaining)} secondes de récupération. Ensuite, ${nextPhaseLabel(a)}.`,ids:[`rest.${Math.ceil(a.remaining)}`,'common.next',...(next?nextIds(a,next):['common.next_summary'])]};}
 return {text:'Change de côté.',ids:['common.switch']};
}

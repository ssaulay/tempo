import {phasePlan,uid} from '../composer';
import {rules} from '../catalog';
import type {ActiveSession,Equipment,Phase,Program,SetAttempt,State} from '../types';
export type Event={type:'Tick'|'PhaseElapsed'|'Pause'|'Resume'|'VisibilityLost'|'ExtendRest'|'SkipSet'|'SkipExercise'|'RepeatSet'|'Abort'|'FinishEarly'|'Next';attemptId?:string;declared?:number|null;id?:string}|{type:'CompleteSet';attemptId:string;declared?:number|null;id?:string};
const activeStates:State[]=['preparing','working_reps','working_timed','resting','switching_side'];
export const isRunning=(a:ActiveSession)=>activeStates.includes(a.state);
export const currentPhase=(a:ActiveSession)=>a.phases[a.index];
export const canSkipExercise=(a:ActiveSession)=>isRunning(a)||['paused','suspended'].includes(a.state);
export const canSkipSet=(a:ActiveSession)=>canSkipExercise(a)&&a.phases.slice(a.index).some(p=>p.blockIndex===currentPhase(a).blockIndex&&p.kind.startsWith('working'));
export function startSession(program:Program,equipment:Equipment,now:number,id:string=uid(),at=new Date().toISOString()):ActiveSession{
 if(!program.blocks.length)throw Error('Un programme vide ne peut pas être démarré.');
 const phases=phasePlan(program);
 return {session:{id,startedAt:at,endedAt:null,status:'active',snapshot:structuredClone(program),ruleSnapshot:structuredClone(rules),equipment:structuredClone(equipment),attempts:[],activeSeconds:0,pauseSeconds:0,feedback:{difficulty:'',quality:''},plannedSets:phases.filter(p=>p.kind.startsWith('working')&&program.blocks[p.blockIndex].exercise.category!=='mobility').length},state:phases[0].kind,source:phases[0].kind,phases,index:0,remaining:phases[0].seconds,phaseElapsed:0,anchor:now,journal:[{id:uid(),event:'Start',at}],revision:0,lastCheckpoint:at};
}
export function clock(state:ActiveSession,now:number):ActiveSession{
 const a=structuredClone(state);const dt=Math.max(0,(now-a.anchor)/1000);a.anchor=now;
 if(isRunning(a)){
  const phase=currentPhase(a);const elapsed=phase.kind==='working_reps'?dt:Math.min(dt,a.remaining);
  a.session.activeSeconds+=elapsed;a.phaseElapsed+=elapsed;
  if(phase.kind!=='working_reps')a.remaining=Math.max(0,a.remaining-elapsed);
 }else if(a.state==='paused')a.session.pauseSeconds+=dt;
 return a;
}
function record(a:ActiveSession,phase:Phase,status:SetAttempt['status'],declared:number|null=null,duration=a.phaseElapsed){
 if(!phase.kind.startsWith('working')||a.session.attempts.some(x=>x.id===phase.attemptId))return;
 const b=a.session.snapshot.blocks[phase.blockIndex];
 a.session.attempts.push({id:phase.attemptId,blockId:b.id,exerciseId:b.exercise.id,exerciseVersion:b.exercise.version,exerciseName:b.exercise.name,category:b.exercise.category,set:phase.set,attempt:phase.attempt,side:phase.side,planned:{mode:b.exercise.mode,value:b.value,resistance:b.resistance},declared:declared===null?null:Math.max(0,Math.round(declared)),duration,status,resistance:b.resistance});
}
function advance(a:ActiveSession,now:number,at:string){
 a.index++;a.phaseElapsed=0;a.anchor=now;
 if(a.index>=a.phases.length){a.state='completed';a.session.status='completed';a.session.endedAt=at;a.remaining=0;return;}
 const next=currentPhase(a);a.state=next.kind;a.source=next.kind;a.remaining=next.seconds;
}
export function transition(state:ActiveSession,event:Event,now:number,at=new Date().toISOString()):ActiveSession{
 if(['completed','aborted'].includes(state.state))return state;
 if(event.id&&state.journal.some(x=>x.id===event.id))return state;
 // State and attempt guards run before consuming any time or accepting duplicate taps.
 if(event.type==='CompleteSet'&&(state.state!=='working_reps'||currentPhase(state).attemptId!==event.attemptId))return state;
 if(event.type==='PhaseElapsed'&&(!isRunning(state)||state.state==='working_reps'))return state;
 if(event.type==='ExtendRest'&&state.state!=='resting')return state;
 if(event.type==='Resume'&&!['paused','suspended'].includes(state.state))return state;
 if(event.type==='RepeatSet'&&state.state!=='resting'&&state.state!=='paused')return state;
 const a=clock(state,now);const phase=currentPhase(a);let changed=true;
 switch(event.type){
  case 'Tick': return a;
  case 'Pause':case 'VisibilityLost':
   if(!isRunning(a)&&a.state!=='paused')return state;
   if(isRunning(a))a.source=a.state as ActiveSession['source'];
   a.state=event.type==='Pause'?'paused':'suspended';break;
  case 'Resume':a.state=a.source;a.anchor=now;break;
  case 'ExtendRest':a.remaining+=15;phase.seconds+=15;break;
  case 'CompleteSet':record(a,phase,'validated',event.declared??null);advance(a,now,at);break;
  case 'FinishEarly':
   if(a.state!=='working_timed')return state;record(a,phase,'validated');advance(a,now,at);break;
  case 'PhaseElapsed':
   if(a.remaining>0)return a;
   if(a.state==='working_timed')record(a,phase,'validated');advance(a,now,at);break;
  case 'Next':
   if(!['preparing','resting','switching_side'].includes(a.state))return state;advance(a,now,at);break;
  case 'SkipSet':
   if(!canSkipSet(a))return state;
   if(!phase.kind.startsWith('working')){
    while(!currentPhase(a).kind.startsWith('working'))a.index++;
    a.phaseElapsed=0;
   }
   record(a,currentPhase(a),'skipped');advance(a,now,at);break;
  case 'SkipExercise':{
   if(!canSkipExercise(a))return state;
   const blockIndex=phase.blockIndex;record(a,phase,'skipped');
   while(a.index+1<a.phases.length&&a.phases[a.index+1].blockIndex===blockIndex){a.index++;record(a,currentPhase(a),'skipped',null,0);}
   advance(a,now,at);break;
  }
  case 'RepeatSet':{
   const last=a.session.attempts.at(-1);if(!last)return state;
   const original=a.phases.find(x=>x.attemptId===last.id&&x.kind.startsWith('working'));if(!original)return state;
   const attempt=1+Math.max(...a.phases.filter(p=>p.blockIndex===original.blockIndex&&p.set===original.set&&p.side===original.side).map(p=>p.attempt));
   const id=`${last.blockId}:${last.set}:${last.side}:${attempt}`;
   const repeat={...original,id:id+':repeat',attemptId:id,attempt};
   const rest:Phase={...repeat,id:id+':rest',kind:'resting',seconds:a.session.snapshot.blocks[original.blockIndex].rest};
   a.phases.splice(a.index+1,0,repeat,rest);if(a.session.snapshot.blocks[original.blockIndex].exercise.category!=='mobility')a.session.plannedSets++;break;
  }
  case 'Abort':record(a,phase,'interrupted');a.state='aborted';a.session.status='aborted';a.session.endedAt=at;break;
  default:changed=false;
 }
 if(['SkipSet','SkipExercise'].includes(event.type)&&['paused','suspended'].includes(state.state)&&isRunning(a))a.state=state.state;
 if(changed){a.revision++;a.lastCheckpoint=at;a.journal.push({id:event.id||uid(),event:event.type,at});}
 return a;
}
export function restore(a:ActiveSession,now:number):ActiveSession{
 const next=structuredClone(a);if(isRunning(next)){next.source=next.state as ActiveSession['source'];next.state='suspended';}else if(next.state==='paused')next.state='suspended';next.anchor=now;return next;
}
export function remainingEstimate(a:ActiveSession):number{
 const phase=currentPhase(a);if(!phase||['completed','aborted'].includes(a.state))return 0;
 let current=a.remaining;
 if(phase.kind==='working_reps'){
  const b=a.session.snapshot.blocks[phase.blockIndex];
  const known=a.session.attempts.filter(s=>s.exerciseId===b.exercise.id&&s.declared!==null&&s.declared>0&&s.duration>0&&s.status==='validated');
  const cadence=known.length?known.reduce((v,s)=>v+s.duration/(s.declared||1),0)/known.length:a.session.ruleSnapshot.byExercise[b.exercise.id].secondsPerRep;
  // An overrun never finishes a repetition set automatically. Keep a rolling estimate.
  current=Math.max(cadence*b.value-a.phaseElapsed,cadence*2);
 }
 return current+a.phases.slice(a.index+1).reduce((s,p)=>s+p.seconds,0);
}
export function plannedSets(a:ActiveSession){return a.phases.filter(p=>p.kind.startsWith('working')&&a.session.snapshot.blocks[p.blockIndex].exercise.category!=='mobility').length;}
// Use the scheduled phases, including repeated sets, rather than the next block.
export function nextPhaseLabel(a:ActiveSession):string{
 const next=a.phases[a.index+1];if(!next)return 'Votre bilan';
 const block=a.session.snapshot.blocks[next.blockIndex];
 if(next.kind==='resting')return `Récupération · ${next.seconds} s`;
 if(next.kind==='preparing')return `Préparation · ${block.exercise.name}`;
 if(next.kind==='switching_side')return `Changement de côté · ${block.exercise.name} · côté ${next.side} sur ${block.exercise.sides}`;
 return `${block.exercise.name} · série ${next.set} sur ${block.sets}${block.exercise.sides>1?` · côté ${next.side} sur ${block.exercise.sides}`:''}${next.attempt>1?` · tentative ${next.attempt}`:''}`;
}

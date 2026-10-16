import {describe,it,expect} from 'vitest';
import {blankProgram,createBlock} from '../src/composer';
import {defaultProfile,defaultEquipment,exercises} from '../src/catalog';
import {startSession,transition,currentPhase,clock} from '../src/session-engine';
function session(){const p=blankProgram();p.blocks=['EX29','EX32'].map(id=>({...createBlock(exercises.find(e=>e.id===id)!,defaultProfile,defaultEquipment),sets:2,rest:30}));return startSession(p,defaultEquipment,0);}
describe('passage de série ou exercice en pause',()=>{
 it.each(['Pause','VisibilityLost'] as const)('passe un exercice sans reprendre après %s',pause=>{
  let a=transition(session(),{type:pause},0);a=transition(a,{type:'SkipExercise'},5000);
  expect(currentPhase(a).blockIndex).toBe(1);expect(a.state).toBe(pause==='Pause'?'paused':'suspended');
  expect(a.session.attempts).toHaveLength(2);expect(a.session.attempts.every(x=>x.status==='skipped'&&x.duration===0)).toBe(true);
  expect(clock(a,10000).session.activeSeconds).toBe(0);
 });
 it('passe la prochaine série depuis la préparation en pause',()=>{
  let a=transition(session(),{type:'Pause'},0);a=transition(a,{type:'SkipSet'},5000);
  expect(a.session.attempts).toHaveLength(1);expect(a.session.attempts[0].status).toBe('skipped');expect(a.state).toBe('paused');
  expect(a.source).toBe(currentPhase(a).kind);expect(a.phaseElapsed).toBe(0);
 });
 it('conserve le temps réel de la série passée pendant la pause',()=>{
  let a=transition(session(),{type:'Next'},0);a=transition(a,{type:'Pause'},3000);a=transition(a,{type:'SkipSet'},10000);
  expect(a.session.attempts[0].duration).toBe(3);expect(a.session.pauseSeconds).toBe(7);expect(a.state).toBe('paused');
  expect(transition(a,{type:'Resume'},11000).state).toBe(currentPhase(a).kind);
 });
 it('passe la série suivante depuis le repos sans altérer la série validée',()=>{
  let a=transition(session(),{type:'Next'},0);a=transition(a,{type:'CompleteSet',attemptId:currentPhase(a).attemptId,declared:8},3000);
  a=transition(a,{type:'Pause'},3000);a=transition(a,{type:'SkipSet'},6000);
  expect(a.session.attempts.map(x=>x.status)).toEqual(['validated','skipped']);expect(a.session.attempts[0].declared).toBe(8);expect(a.session.attempts[1].duration).toBe(0);expect(a.state).toBe('paused');
 });
 it('termine la séance si le dernier exercice est passé en pause',()=>{
  let a=transition(session(),{type:'Pause'},0);a=transition(a,{type:'SkipExercise'},0);a=transition(a,{type:'SkipExercise'},0);
  expect(a.state).toBe('completed');expect(a.session.status).toBe('completed');expect(a.session.attempts).toHaveLength(4);
  expect(transition(a,{type:'SkipSet'},1000)).toBe(a);
 });
});

import {rules} from '../catalog';
import type {Block,Program,Session} from '../types';
const sameBlock=(a:Block,b:Block)=>a.id===b.id&&a.section===b.section&&a.exercise.id===b.exercise.id&&a.exercise.version===b.exercise.version&&a.exercise.mode===b.exercise.mode&&a.exercise.sides===b.exercise.sides&&a.resistance===b.resistance&&a.sets===b.sets&&a.value===b.value&&a.rest===b.rest;
const comparable=(s:Session,p:Program)=>s.status==='completed'&&s.snapshot.blocks.length===p.blocks.length&&s.snapshot.blocks.every((b,i)=>sameBlock(b,p.blocks[i]));
/** Chronological copy: imported history need not be ordered. */
export function sortedSessions(sessions:Session[]):Session[]{return [...sessions].sort((a,b)=>Date.parse(a.startedAt)-Date.parse(b.startedAt)||a.id.localeCompare(b.id));}
/** Only the original planned attempts establish completion; retries never erase skips. */
export function completedPrescription(session:Session,program:Program):boolean{
 if(!comparable(session,program))return false;
 const blocks=program.blocks.filter(b=>b.section==='training');
 if(!blocks.length)return false;
 return blocks.every(b=>{
  if(b.exercise.mode!=='reps')return false;
  for(let set=1;set<=b.sets;set++)for(let side=1;side<=b.exercise.sides;side++){
   const attempts=session.attempts.filter(a=>a.blockId===b.id&&a.set===set&&a.side===side&&a.attempt===1);
   if(attempts.length!==1)return false;
   const a=attempts[0];
   if(a.exerciseId!==b.exercise.id||a.exerciseVersion!==b.exercise.version||a.status!=='validated'||a.planned.mode!==b.exercise.mode||a.planned.value!==b.value||a.planned.resistance!==b.resistance||a.resistance!==b.resistance||a.declared===null||!Number.isFinite(a.declared)||a.declared<b.value)return false;
  }
  return true;
 });
}
export function getProgressSuggestion(sessions:Session[],program:Program):string|null{
 const recent=sortedSessions(sessions).filter(s=>comparable(s,program)).slice(-2);
 const last=recent.at(-1);
 if(last?.feedback.difficulty==='hard'||last?.feedback.quality==='improve')return 'La dernière séance comparable a été déclarée difficile ou à améliorer : vous pouvez réduire une seule cible ou choisir une variante plus facile.';
 const training=program.blocks.filter(b=>b.section==='training');
 if(!training.length||training.some(b=>b.exercise.mode!=='reps'||b.exercise.equipmentVariant==='tube'||/^Tubes? /.test(b.resistance)))return null;
 if(!training.some(b=>b.value+(rules.byExercise[b.exercise.id].reps.step||1)<=Math.min(rules.byExercise[b.exercise.id].reps.max,12,b.valueCeiling??Infinity)))return null;
 if(recent.length===2&&recent.every(s=>completedPrescription(s,program)&&s.feedback.difficulty==='easy'&&s.feedback.quality==='good'))return 'Deux séances comparables entièrement réalisées, faciles et bien maîtrisées : vous pouvez proposer un petit palier de répétitions sur un seul exercice, dans sa plage autorisée. Rien n’est appliqué automatiquement.';
 return null;
}
/** Observed direct volume only: absent history is never treated as known rest. */
export function weeklyPrimaryVolume(sessions:Session[],now:Date):{muscle:string;sets:number}[]{
 const end=now.getTime(),start=end-7*24*60*60*1000,counts=new Map<string,number>();
 for(const session of sessions){
  const date=Date.parse(session.startedAt);
  if(!Number.isFinite(date)||date<start||date>end)continue;
  for(const block of session.snapshot.blocks){
   if(block.section!=='training'||block.exercise.category!=='strength')continue;
   for(let set=1;set<=block.sets;set++){
    let complete=true;
    for(let side=1;side<=block.exercise.sides;side++){
     const attempts=session.attempts.filter(a=>a.blockId===block.id&&a.set===set&&a.side===side&&a.attempt===1);
     if(attempts.length!==1||attempts[0].status!=='validated'||attempts[0].exerciseId!==block.exercise.id||attempts[0].exerciseVersion!==block.exercise.version){complete=false;break;}
    }
    if(complete)for(const muscle of new Set(block.exercise.muscles.primary))counts.set(muscle,(counts.get(muscle)||0)+1);
   }
  }
 }
 return [...counts].map(([muscle,sets])=>({muscle,sets})).sort((a,b)=>a.muscle.localeCompare(b.muscle));
}

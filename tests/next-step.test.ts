import {afterEach,it,expect,vi} from 'vitest';
import {announce} from '../src/audio';
import {defaultProfile,defaultEquipment,exercises} from '../src/catalog';
import {blankProgram,createBlock} from '../src/composer';
import {startSession,transition,currentPhase} from '../src/session-engine';
afterEach(()=>vi.unstubAllGlobals());
it.each([1,2])('annonce Dead bug après le repos suivant la série %i, pas Crunch court',set=>{
 const p=blankProgram();p.blocks=['EX29','EX32'].map((id,i)=>({...createBlock(exercises.find(e=>e.id===id)!,defaultProfile,defaultEquipment),sets:i?1:3}));
 let active=transition(startSession(p,defaultEquipment,0),{type:'Next'},0);
 for(let n=1;n<=set;n++){active=transition(active,{type:'CompleteSet',attemptId:currentPhase(active).attemptId},n*1000);if(n<set)active=transition(active,{type:'Next'},n*1000);}
 let spoken='';vi.stubGlobal('window',{speechSynthesis:{cancel(){},getVoices:()=>[{lang:'fr-FR',voiceURI:'fr'}],speak:(u:{text:string})=>spoken=u.text}});
 vi.stubGlobal('SpeechSynthesisUtterance',class{constructor(public text:string){}});
 announce(active,{...defaultProfile,audio:true});
 expect(spoken).toContain('Dead bug');expect(spoken).toContain(`série ${set+1}`);expect(spoken).not.toContain('Crunch court');
});

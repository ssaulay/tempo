import type {Program} from '../types';

export const searchText=(value:string)=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('fr').trim().replace(/\s+/g,' ');
export const programZones=(program:Program)=>[...new Set(program.blocks.flatMap(block=>block.exercise.zones))];
export function sameProgramContent(a:Program,b:Program){
 const content=(p:Program)=>({name:p.name,origin:p.origin,objective:p.objective,budget:p.budget,blocks:p.blocks,rulesVersion:p.rulesVersion,catalogVersion:p.catalogVersion,reasons:p.reasons,constraints:p.constraints});
 return a.id===b.id&&JSON.stringify(content(a))===JSON.stringify(content(b));
}
export function checkFields(root:ParentNode=document){
 const invalid=[...root.querySelectorAll<HTMLInputElement>('input,select,textarea')].find(el=>!el.checkValidity());
 if(!invalid)return true;
 for(let parent=invalid.parentElement;parent;parent=parent.parentElement)if(parent instanceof HTMLDetailsElement)parent.open=true;
 invalid.focus();invalid.reportValidity();return false;
}

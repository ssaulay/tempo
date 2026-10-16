import {it,expect} from 'vitest';
import {defaultProfile,defaultEquipment,getExerciseVersion,selectable,compatible,hasAssets} from '../src/catalog';
import {createBlock,validateBlock,blankProgram,phasePlan} from '../src/composer';
import {emptyData,exportData,parseImport} from '../src/storage';
const profile={...defaultProfile,level:'intermediate' as const,prototype:true};
const equipment={...defaultEquipment,resistanceKit:true,bandUnderFoot:false};
it('raccorde trois variantes pectorales distinctes avec illustrations et combinaison proposée',()=>{for(const id of ['EX75','EX76','EX77']){const e=getExerciseVersion(id,1)!;expect(e.zones).toContain('pectorals');expect(hasAssets(e)).toBe(true);expect(selectable(e,profile,equipment)).toBe(true);const b=createBlock(e,profile,equipment);expect(validateBlock(b)).toEqual([]);expect(b.resistance).toMatch(/^Tube 3 kg/);expect(e.review.technical).toBeNull();expect(compatible(e,profile,{...equipment,resistanceKitDoorAnchor:false})).toBe(false);}});
it('prévoit réellement les deux côtés de l’écarté unilatéral et conserve son export',()=>{const p=blankProgram();p.blocks=[createBlock(getExerciseVersion('EX77',1)!,profile,equipment)];expect(p.blocks[0].exercise).toMatchObject({counting:'per_side',sides:2,alternating:false});expect(phasePlan(p).filter(p=>p.kind==='working_reps')).toHaveLength(p.blocks[0].sets*2);expect(phasePlan(p).filter(p=>p.kind==='switching_side')).toHaveLength(p.blocks[0].sets);const data=emptyData();data.programs=[p];expect(parseImport(exportData(data)).unknownIds).toEqual([]);});

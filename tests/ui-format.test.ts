import {describe,it,expect} from 'vitest';
import {duration} from '../src/ui/components';
describe('affichage des chronomètres',()=>{
 it('reporte la seconde arrondie sur la minute suivante',()=>{expect(duration(119.8)).toBe('2:00');expect(duration(59.2)).toBe('1:00');expect(duration(60)).toBe('1:00');expect(duration(-1)).toBe('0:00');});
});

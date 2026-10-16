import translations from './instructions.fr.json';
// Presentation copy only. Exercise contracts, historical snapshots and audio IDs stay intact.
export const instruction=(text:string)=>(translations as Record<string,string>)[text]??text;

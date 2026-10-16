"""Export only existing, verified voice recordings. No Gemini requests."""
import json,hashlib,wave,shutil
from pathlib import Path
root=Path(__file__).resolve().parents[1];selection=json.loads((root/'reports/audio/voices/selection.json').read_text());entries={}
for source in ['reports/audio/pilot','reports/audio/pilot-v2','artifacts/audio/production-v1']:
 for p in (root/source).glob('*/*.json'):
  m=json.loads(p.read_text());c=m.get('clip');wav=p.with_suffix('.wav')
  if not c or c['id'].startswith('comparison.') or not wav.exists():continue
  v=next((v for v in selection['voices'] if v['voice_id']==m['voice_id']),None)
  if not v:continue
  with wave.open(str(wav)) as w:assert w.getnframes()>0 and w.getnchannels()==1 and w.getsampwidth()==2
  checksum=hashlib.sha256(wav.read_bytes()).hexdigest();name=c['id']+'-'+checksum[:12]+'.wav';dest=root/'public/assets/audio/v1'/v['id'];dest.mkdir(parents=True,exist_ok=True);shutil.copy2(wav,dest/name)
  entries[v['id']+':'+c['id']]={'voice':v['id'],'id':c['id'],'text':c['text'],'url':'/assets/audio/v1/'+v['id']+'/'+name,'checksum':checksum}
index={'voices':[{'id':'tempo:'+v['id'],'pack':v['id'],'name':'F1 - Dynamique et chaleureuse' if v['id']=='F1' else 'M2 - Grave et chaleureux'} for v in selection['voices']],'entries':list(entries.values())}
(root/'src/audio/recordings.json').write_text(json.dumps(index,ensure_ascii=False,indent=2)+'\n');(root/'public/assets/audio/v1/manifest.json').write_text(json.dumps(index,ensure_ascii=False,indent=2)+'\n')
print(len(entries),'enregistrements exportés, sans appel API.')

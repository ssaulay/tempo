"""Generate isolated versioned tube clips; preserve existing voice production."""
from pathlib import Path
import json,os,urllib.request,urllib.error,base64,wave,io,time,hashlib
ROOT=Path(__file__).resolve().parents[1]
variants=json.loads((ROOT/'catalog/equipment-variants.json').read_text())['variants']
voices=json.loads((ROOT/'reports/audio/voices/selection.json').read_text())['voices']
folder=ROOT/'reports/audio/tubes-v2';folder.mkdir(parents=True,exist_ok=True)
clips=[{'id':e['audioKey']+'.'+kind,'text':e['name'] if kind=='name' else e['name']+'. Prépare-toi. '+e['preparationCue']} for e in variants for kind in ['name','prepare']]
(folder/'clips.json').write_text(json.dumps({'clips':clips,'humanReview':'not_performed_user_requested_skip'},ensure_ascii=False,indent=2)+'\n')
key=os.environ.get('GEMINI_API_KEY')
if not key:
 env=Path('/Users/simon.saulay/Documents/ChatGPT/histoplaymo/.env')
 if env.stat().st_mode & 0o077:raise SystemExit('Permissions env attendues 600.')
 for line in env.read_text().splitlines():
  if line.strip().startswith('GEMINI_API_KEY='):key=line.split('=',1)[1].strip().strip('"\'')
if not key:raise SystemExit('Clé non trouvée.')
entries=[]
for voice in voices:
 out=ROOT/'public/assets/audio/tubes-v2'/voice['id'];out.mkdir(parents=True,exist_ok=True)
 for clip in clips:
  target=out/(clip['id']+'.wav');meta=folder/(voice['id']+'-'+clip['id']+'.json')
  if not target.exists():
   payload={'model':voice['model'],'input':[{'type':'user_input','content':[{'type':'text','text':clip['text'],'annotations':[{'type':'speech_metadata','style':voice['style']}]}]}],'response_format':{'type':'audio'},'generation_config':{'speech_config':[{'voice':voice['voice_id']}]}}
   req=urllib.request.Request('https://generativelanguage.googleapis.com/v1beta/interactions',data=json.dumps(payload).encode(),headers={'Content-Type':'application/json','x-goog-api-key':key},method='POST')
   try:
    with urllib.request.urlopen(req,timeout=120) as res:result=json.load(res)
   except urllib.error.HTTPError as err:
    # No retry loop for daily quota; preserve progress and enable speech fallback.
    status={'status':'blocked_api','httpStatus':err.code,'completed':len(entries),'expected':len(voices)*len(clips),'fallback':'browser_speech_synthesis'}
    (folder/'status.json').write_text(json.dumps(status,indent=2)+'\n');raise SystemExit('Audio API HTTP '+str(err.code)+' ; aucun secret affiché, clips conservés.')
   except urllib.error.URLError:
    (folder/'status.json').write_text(json.dumps({'status':'blocked_network','completed':len(entries),'expected':len(voices)*len(clips),'fallback':'browser_speech_synthesis'},indent=2)+'\n');raise SystemExit('Réseau audio indisponible ; aucun secret affiché.')
   obj=result.get('interaction',result);audio=obj.get('output_audio') or obj.get('outputAudio')
   if not audio:
    blocks=[b for step in obj.get('steps',[]) for b in step.get('content',[]) if b.get('type')=='audio' and b.get('data')];audio=blocks[-1] if blocks else None
   if not audio:raise SystemExit('Réponse sans audio.')
   raw=base64.b64decode(audio['data'],validate=True)
   if raw[:4]!=b'RIFF':
    buf=io.BytesIO()
    with wave.open(buf,'wb') as wav:wav.setnchannels(1);wav.setsampwidth(2);wav.setframerate(24000);wav.writeframes(raw)
    raw=buf.getvalue()
   target.write_bytes(raw);meta.write_text(json.dumps({'clip':clip,'voice':voice['id'],'usage':obj.get('usage'),'status':'generated_not_listened','sha256':hashlib.sha256(raw).hexdigest()},ensure_ascii=False,indent=2)+'\n')
   time.sleep(7)
  with wave.open(str(target)) as wav:duration=wav.getnframes()/wav.getframerate();assert duration>0
  entries.append({'voice':voice['id'],'id':clip['id'],'text':clip['text'],'url':'/'+str(target.relative_to(ROOT/'public')),'duration':duration,'checksum':hashlib.sha256(target.read_bytes()).hexdigest(),'status':'generated_listening_pending'})
manifest={'version':2,'status':'generated_listening_pending','entries':entries}
(ROOT/'public/assets/audio/tubes-v2/manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
(ROOT/'src/audio/tube-recordings.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
(folder/'status.json').write_text(json.dumps({'status':'generated_not_listened','completed':len(entries),'expected':len(entries)},indent=2)+'\n')
print(str(len(entries))+' clips versionnés générés, aucune écoute humaine déclarée.')

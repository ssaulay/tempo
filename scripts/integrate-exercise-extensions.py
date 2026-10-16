"""Adapt documentary candidates to the local prototype without rewriting historical data."""
import json, copy
from pathlib import Path
root=Path(__file__).resolve().parent.parent
read=lambda p:json.loads((root/p).read_text())
base=read('catalog/exercises.json')['exercises']
rules=read('catalog/prescription-rules.json')['byExercise']
parents=[13,13,13,13,13,16,16,16,28,27,27,29,27,35,30,32,28,32,30,34,30]
patterns=['horizontal_push']*8+['lateral_stability','anti_extension','anti_extension','anti_rotation','anti_extension','anti_extension','trunk_rotation','hip_flexion','lateral_stability','trunk_flexion','trunk_rotation','anti_extension','trunk_flexion']
es=[]; rs={}
def text(v):
 if isinstance(v,dict):return ' '.join(text(x) for x in v.values())
 if isinstance(v,list):return ' '.join(text(x) for x in v)
 return str(v or '')
for lot in ['extension-pectorals','extension-abs-stability','extension-abs-dynamic']:
 for d in read('docs/exercise-reference/'+lot+'.json')['exercises']:
  n=int(d['id'][2:]); parent=parents[n-49]; e=copy.deepcopy(base[parent-1]); e.update(id=d['id'],name=d['name'],version=1,minimumLevel='advanced' if 'avanc' in d.get('minimumLevelProposed',d.get('proposedLevel','')) or d.get('minimumLevelProposed')=='advanced' else 'intermediate',movementPattern=patterns[n-49],equipmentRequirements=[],equipmentKey='none',position='floor',impact=n==52,counting='per_side' if n in [54,57,65] else 'total',sides=2 if n in [54,57,65] else 1,alternating=n in [51,59,60,61,63,67],mode='timed' if n in [57,58,62] else 'reps',contentStatus='draft',assetStatus='pending',prototypeReady=True,textOnlyPrototype=True,topViewRecommended=False,extraAngles=[],review={'technical':None,'visual':None},variants=[],rolesNotApplicable=[],mapKind='strength',zones=['pectorals'] if n<=56 else ['abs'])
  if n==49:e['equipmentRequirements']=[{'kind':'support'}];e['equipmentKey']='support'
  if n in [54,55,56,69]:e['equipmentRequirements']=[{'kind':'dumbbells','count':1 if n in [54,69] else 2}];e['equipmentKey']='dumbbells'
  if n==53:e['equipmentRequirements']=[{'kind':'band','types':['flat']}];e['equipmentKey']='band';e['documentaryOnly']=True
  if n==68:e['equipmentRequirements']=[{'kind':'wheel'}];e['equipmentKey']='wheel'
  start=text(d.get('positions',d.get('startingPosition'))); mov=d.get('movement',d.get('action')); action=text(mov.get('action') if isinstance(mov,dict) else mov); terminal=text(mov.get('terminal') if isinstance(mov,dict) else d.get('endPosition',d.get('terminalPosition'))); ret=text(mov.get('return') if isinstance(mov,dict) else d.get('returnMovement',d.get('returnPhase'))); exit=text(mov.get('exit') if isinstance(mov,dict) else d.get('exit')); breath=text(d['breathing']); audio=d.get('audioDraft',d.get('audio',{})); cues=audio if isinstance(audio,list) else audio.get('cues',[audio.get('setup',''),audio.get('effort',''),audio.get('returnCue','')]); cues=[c for c in cues if c]
  e['installation']=' '.join(d['equipment'])+'. '+start;e['steps']=[]
  for i,(title,desc) in enumerate([('Installation',start),('Mouvement et contrôle',action+' '+terminal),('Retour et sortie',ret+' '+exit)],1):e['steps'].append(dict(id=i,title=title,description=desc,postureCues=[desc],breathing=breath,asset=f'step-0{i}.webp',alt=d['name']+' : '+title))
  e['tip']=cues[1] if len(cues)>1 else action;e['preparationCue']=cues[0] if cues else start;e['breathing']=breath;e['errors']=d['errorsAndCorrections']; prereq=d.get('prerequisites',d.get('observablePrerequisites',[]));prereq=prereq.get('observable',[]) if isinstance(prereq,dict) else prereq;e['constraints']=prereq+d.get('unresolved',d.get('remainingUnresolved',[]));e['sourceReference']='docs/exercise-reference/'+lot+'.json';e['muscleEvidence']=d['muscles'];e['adaptations']={'regressions':d.get('regressions',[]),'progressions':d.get('progressions',[])}
  if n<=56:e['muscles']={'primary':['pectorals'],'secondary':['triceps','anterior_deltoids'] if n!=55 else ['anterior_deltoids'],'stabilizers':['core']}
  elif n in [57,65]:e['muscles']={'primary':['obliques'],'secondary':[],'stabilizers':['shoulders','glutes']}
  else:e['muscles']={'primary':['rectus_abdominis']+(['obliques'] if n in [60,63,67] else []),'secondary':['hip_flexors'] if n in [62,63,64,66] else [],'stabilizers':['shoulders'] if n in [58,59,60,61,68] else []}
  e['documentaryExtension']=True
  if (root/f'assets/sources/extensions-v1/{e["id"]}.png').exists():
   e['assetStatus']='generated';e['textOnlyPrototype']=False;e['staticHold']=e['mode']=='timed'
   media=d['media'];frames=media.get('keyframes',[media.get('keyframe1',''),media.get('keyframe2','')])
   for i,desc in enumerate(frames[:2]):
    e['steps'][i].update(title='Installation' if i==0 and e['staticHold'] else 'Maintien' if e['staticHold'] else f'Position {i+1}',description=desc,postureCues=[desc],alt=e['name']+' : '+desc)
  es.append(e);r=copy.deepcopy(rules[f'EX{parent:02}']);r['sets']={'min':1,'max':4,'default':2};r['reps']={'min':2 if n==52 else 4,'max':6 if n==52 else 20,'default':4 if n==52 else 8,'step':2 if e['alternating'] else 1};r['duration']={'min':5,'max':60,'default':15,'step':5};r['rest']={'min':30,'max':180,'default':90 if n==52 else 45,'step':5};r['secondsPerRep']=4;r['levelFactors']={'beginner':1,'intermediate':1,'advanced':1};r['intensityFactors']={'gentle':.75,'moderate':1,'intense':1};rs[e['id']]=r
(root/'catalog/extensions.json').write_text(json.dumps({'version':1,'status':'local_text_prototype_not_human_validated','exercises':es},ensure_ascii=False,indent=2)+'\n')
(root/'catalog/extension-rules.json').write_text(json.dumps({'status':'editorial_draft_not_validated','description':'Hypothèses de dosage locales ajustables, distinctes des preuves documentaires. EX52 puissance : cible courte sans montée automatique d’intensité.','byExercise':rs},ensure_ascii=False,indent=2)+'\n')

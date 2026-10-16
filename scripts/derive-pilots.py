"""Clean extraction and shared registration requested by Simon; no pose edits."""
from pathlib import Path
import json
from PIL import Image
from asset_framing import register
root=Path(__file__).resolve().parents[1]
sources=root/'assets/sources'
shared=root/'public/assets/shared/v1';shared.mkdir(parents=True,exist_ok=True)
Image.open(sources/'reference-character.png').save(shared/'reference-character.webp','WEBP',quality=84)
records=[]
for source in sorted(sources.glob('EX[0-9][0-9].png')):
 ex=source.stem;out=root/'public/assets/exercises/v1'/ex;out.mkdir(parents=True,exist_ok=True)
 for top in [False,True]:
  path=sources/(ex+('-top' if top else '')+'.png')
  if not path.exists():continue
  frames,report=register(Image.open(path).convert('RGB'),ex,top)
  report.update(exercise=ex,angle='top' if top else 'base',source=str(path.relative_to(root)))
  for i,frame in enumerate(frames):frame.save(out/f'{"top-" if top else ""}step-0{i+1}.webp','WEBP',quality=88)
  if not top:
   small=[f.resize((600,450),Image.Resampling.LANCZOS) for f in frames[:2]]
   small[0].save(out/'demo.gif',save_all=True,append_images=small[1:],duration=1000,loop=0,optimize=True)
   frames[1].resize((400,300),Image.Resampling.LANCZOS).save(out/'thumb.webp','WEBP',quality=85)
  records.append(report)
(root/'reports/framing').mkdir(parents=True,exist_ok=True)
(root/'reports/framing/audit.json').write_text(json.dumps({'sheets':len(records),'poses':len(records)*3,'humanTechnicalReview':'pending','records':records},indent=2))
print(f'{len(records)} planches, {len(records)*3} poses isolées et recalées. Revue technique humaine en attente.')

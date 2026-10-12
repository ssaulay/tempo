"""Extraction/composition déterministe demandée par le PRD, sans retoucher les poses."""
from pathlib import Path
from PIL import Image, ImageOps
root=Path(__file__).resolve().parents[1]
sources=root/'assets/sources'
shared=root/'public/assets/shared/v1'
shared.mkdir(parents=True,exist_ok=True)
Image.open(sources/'reference-character.png').save(shared/'reference-character.webp','WEBP',quality=84)
for source in sorted(sources.glob('EX[0-9][0-9].png')):
 ex=source.stem
 out=root/'public/assets/exercises/v1'/ex;out.mkdir(parents=True,exist_ok=True)
 sheet=Image.open(sources/(ex+'.png')).convert('RGB');w,h=sheet.size
 frames=[]
 for i in range(3):
  crop=sheet.crop((0,h*i//3,w,h*(i+1)//3))
  pose=ImageOps.pad(crop,(1200,900),color='#F6F4EF',method=Image.Resampling.LANCZOS)
  pose.save(out/f'step-0{i+1}.webp','WEBP',quality=83)
  frames.append(pose.resize((600,450),Image.Resampling.LANCZOS))
 frames[0].save(out/'demo.gif',save_all=True,append_images=frames[1:],duration=1000,loop=0,optimize=True)
 Image.open(out/'step-02.webp').resize((400,300),Image.Resampling.LANCZOS).save(out/'thumb.webp','WEBP',quality=80)
 top=sources/(ex+'-top.png')
 if top.exists():
  sheet=Image.open(top).convert('RGB');w,h=sheet.size
  for i in range(3):
   ImageOps.pad(sheet.crop((0,h*i//3,w,h*(i+1)//3)),(1200,900),color='#F6F4EF',method=Image.Resampling.LANCZOS).save(out/f'top-step-0{i+1}.webp','WEBP',quality=83)
print('Tous les lots sources disponibles dérivés ; aucune revue technique attribuée.')

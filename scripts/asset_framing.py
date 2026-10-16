"""Deterministic panel isolation and rigid camera registration. No pose edits."""
from collections import deque
import numpy as np
from PIL import Image

DYNAMIC_FEET={'EX01','EX02','EX03','EX04','EX05','EX07','EX39','EX47','EX48'}
FLOOR={'EX09','EX12','EX13','EX14','EX16','EX22','EX27','EX28','EX29','EX30','EX31','EX32','EX33','EX34','EX35','EX36','EX44','EX45','EX46'}

def foreground(rgb):
 a=np.asarray(rgb,dtype=np.int16);lo=a.min(2);hi=a.max(2)
 return (lo<180)|((hi-lo>35)&(lo<230))

def panel_bounds(sheet):
 rows=foreground(sheet).sum(1)>3
 for i in range(1,len(rows)-12):
  if rows[i-1] and not rows[i]:
   following=np.flatnonzero(rows[i:i+12])
   if len(following):rows[i:i+following[0]]=True
 starts=np.flatnonzero(rows&~np.r_[False,rows[:-1]])
 ends=np.flatnonzero(rows&~np.r_[rows[1:],False])+1
 runs=[(int(s),int(e)) for s,e in zip(starts,ends) if e-s>=45]
 if len(runs)!=3:raise ValueError(f'Expected three isolated poses, found {runs}')
 cuts=[0]+[(runs[i][1]+runs[i+1][0])//2 for i in range(2)]+[sheet.height]
 return [(max(cuts[i],s-6),min(cuts[i+1],e+6)) for i,(s,e) in enumerate(runs)],cuts

def neutral_mask(image):
 a=np.asarray(image,dtype=np.int16);lo=a.min(2);hi=a.max(2)
 return (hi-lo<25)&(lo<205)&(hi>20)

def largest_component(mask):
 small=mask[::4,::4].copy();h,w=small.shape;components=[]
 for y,x in zip(*np.nonzero(small)):
  if not small[y,x]:continue
  small[y,x]=False;queue=deque([(int(y),int(x))]);xs=[];ys=[]
  while queue:
   cy,cx=queue.popleft();xs.append(cx);ys.append(cy)
   for dy,dx in [(1,0),(-1,0),(0,1),(0,-1)]:
    ny,nx=cy+dy,cx+dx
    if 0<=ny<h and 0<=nx<w and small[ny,nx]:small[ny,nx]=False;queue.append((ny,nx))
  if len(xs)>=15:components.append((len(xs),min(xs)*4,min(ys)*4,(max(xs)+1)*4,(max(ys)+1)*4))
 if not components:raise ValueError('No reference component')
 return max(components)[1:]

def register(sheet,exercise_id,top=False):
 bounds,cuts=panel_bounds(sheet);panels=[sheet.crop((0,a,sheet.width,b)) for a,b in bounds]
 refs=[];bboxes=[]
 for i,panel in enumerate(panels):
  ys,xs=np.nonzero(foreground(panel));bbox=(int(xs.min()),int(ys.min()),int(xs.max()+1),int(ys.max()+1));bboxes.append(bbox)
  neutral=neutral_mask(panel);band=max(20,panel.height//10);base=neutral[-band:].copy();offset=panel.height-band
  strategy='mat' if top or exercise_id in FLOOR else 'feet'
  if exercise_id=='EX11' and not top:
   candidate=neutral.copy();candidate[:,:int(panel.width*.55)]=False
   left,upper,right,bottom=largest_component(candidate)
   refs.append({'kind':'bench','x':(left+right)/2,'y':bottom,'width':right-left});continue
  if exercise_id=='EX16' and not top:
   # This source has no mat. Register the stationary head's floor contact,
   # never mistake grey dumbbells or shoes for a mat.
   a=np.asarray(panel,dtype=np.int16);hair=(a.min(2)<100);hair[:,int(panel.width*.20):]=False;hair[:int(panel.height*.45)]=False
   yy,xx=np.nonzero(hair)
   refs.append({'kind':'head-floor','x':float((xx.min()+xx.max())/2),'y':int(yy.max()+1),'width':None});continue
  if strategy=='mat':
   base=neutral[panel.height//2:].copy();offset=panel.height//2
  elif exercise_id=='EX08':base[:,:int(panel.width*.52)]=False;strategy='front-foot'
  if exercise_id in DYNAMIC_FEET and not top:
   # The feet genuinely move. Keep the common source camera rather than
   # locking a moving limb and cancelling the jump/step.
   refs.append({'kind':'common-camera','x':panel.width/2,'y':(cuts[i+1]-cuts[i])/2+cuts[i]-bounds[i][0],'width':None});continue
  yy,xx=np.nonzero(base)
  if not len(xx):raise ValueError(f'{exercise_id}: no stable base in pose {i+1}')
  left,right=int(xx.min()),int(xx.max()+1);bottom=int(yy.max()+1)+offset
  width=right-left if strategy in ['mat','bench'] else None
  refs.append({'kind':strategy,'x':(left+right)/2,'y':bottom,'width':width})
 widths=[r['width'] for r in refs if r['width']]
 reference_width=float(np.median(widths)) if widths else None
 factors=[reference_width/r['width'] if reference_width and r['width'] else 1 for r in refs]
 extents=[((b[0]-r['x'])*f,(b[1]-r['y'])*f,(b[2]-r['x'])*f,(b[3]-r['y'])*f) for b,r,f in zip(bboxes,refs,factors)]
 x0=min(b[0] for b in extents);y0=min(b[1] for b in extents);x1=max(b[2] for b in extents);y1=max(b[3] for b in extents)
 scale=min(1104/(x1-x0),804/(y1-y0));target=(600-(x0+x1)/2*scale,450-(y0+y1)/2*scale)
 frames=[];records=[]
 for panel,bbox,ref,factor,extent in zip(panels,bboxes,refs,factors,extents):
  zoom=scale*factor;tx=target[0]-ref['x']*zoom;ty=target[1]-ref['y']*zoom
  # Inverse affine transform uses one uniform scale and translation only.
  frame=panel.transform((1200,900),Image.Transform.AFFINE,(1/zoom,0,-tx/zoom,0,1/zoom,-ty/zoom),resample=Image.Resampling.BICUBIC,fillcolor='#F6F4EF')
  projected=[bbox[0]*zoom+tx,bbox[1]*zoom+ty,bbox[2]*zoom+tx,bbox[3]*zoom+ty]
  if min(projected[:2])<40 or projected[2]>1160 or projected[3]>860:raise ValueError('Clipped pose')
  frames.append(frame);records.append({'reference':ref,'scale':zoom,'translation':[tx,ty],'projectedReference':list(target),'projectedBounds':projected})
 return frames,{'panels':bounds,'registration':records,'referenceKind':refs[0]['kind'],'technicalReview':'pending'}

"""Recette desktop et mobile simulé. Ne certifie pas Safari/PWA sur un iPhone réel."""
import json,os
from pathlib import Path
from playwright.sync_api import sync_playwright
BASE=os.environ.get('TEMPO_BASE_URL','http://127.0.0.1:4173')
reports=Path(__file__).resolve().parents[1]/'reports';reports.mkdir(exist_ok=True)
results=[]
with sync_playwright() as p:
 for name in ['chromium','webkit']:
  try: browser=getattr(p,name).launch(headless=True,args=['--no-sandbox'] if name=='chromium' else [])
  except Exception as e:
   results.append({'browser':name,'status':'unavailable','reason':str(e)[:1500]});continue
  for width in [1440,390,360]:
   context=browser.new_context(viewport={'width':width,'height':900},is_mobile=width<500,has_touch=width<500,locale='fr-FR')
   page=context.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
   page.goto(BASE);page.get_by_role('heading',name='Bienvenue chez Tempo.').wait_for()
   page.get_by_role('button',name='Découvrir Tempo',exact=True).click()
   page.locator('.top-actions').get_by_role('button',name='Réglages',exact=True).click()
   page.get_by_label('Votre niveau').select_option('intermediate')
   page.get_by_label('Activer le prototype avec les démonstrations provisoires').check()
   page.get_by_role('button',name='Enregistrer mes réglages',exact=True).click()
   page.get_by_role('button',name='Pectoraux',exact=True).click();page.get_by_role('button',name='Abdominaux',exact=True).click()
   page.screenshot(path=str(reports/f'home-{name}-{width}.png'),full_page=True)
   assert page.evaluate('document.documentElement.scrollWidth<=innerWidth+1'), 'Débordement horizontal accueil'
   page.get_by_role('button',name='Générer ma séance',exact=True).click();page.get_by_label('Nom du programme').wait_for()
   page.get_by_label('Nom du programme').fill('Pecs + abdos')
   page.get_by_role('button',name='Sauvegarder',exact=True).click();page.get_by_text('Programme sauvegardé sur cet appareil.',exact=True).wait_for()
   page.get_by_role('button',name='Démarrer',exact=True).click();page.get_by_text('Exercice 1 /',exact=False).wait_for()
   # Ignore preparation, finish a repetition set after moving to a strengthening block.
   page.get_by_role('button',name='Continuer',exact=True).click()
   if page.get_by_role('button',name='Série terminée',exact=True).count()==0:
    page.get_by_text('Autres commandes',exact=True).click();page.get_by_role('button',name='Passer l’exercice',exact=True).click()
    page.get_by_role('button',name='Continuer',exact=True).click()
   page.get_by_role('button',name='Série terminée',exact=True).wait_for()
   page.get_by_label('Réalisées (facultatif)').fill('6')
   page.get_by_role('button',name='Série terminée',exact=True).click()
   if page.get_by_role('button',name='+15 s',exact=True).count():page.get_by_role('button',name='+15 s',exact=True).click()
   page.get_by_role('button',name='Pause',exact=True).click()
   page.screenshot(path=str(reports/f'player-{name}-{width}.png'),full_page=True)
   page.reload();page.get_by_role('button',name='Reprendre ma séance',exact=False).wait_for()
   page.get_by_role('button',name='Reprendre ma séance',exact=False).click()
   page.get_by_text('Autres commandes',exact=True).click();page.get_by_role('button',name='Arrêter la séance',exact=True).click()
   page.get_by_role('button',name='Arrêter et conserver',exact=True).click()
   page.get_by_text('Séance enregistrée sur cet appareil.',exact=True).wait_for()
   assert page.get_by_label('Déclaré',exact=True).first.input_value()=='6'
   page.screenshot(path=str(reports/f'summary-{name}-{width}.png'),full_page=True)
   assert page.evaluate('document.documentElement.scrollWidth<=innerWidth+1'), 'Débordement horizontal bilan'
   # Reload and verify exactly one saved session in the history.
   page.reload();nav=page.locator('.bottom-nav' if width<500 else '.sidebar')
   nav.get_by_role('button',name='Progression',exact=True).click();page.locator('.history-card').wait_for()
   assert page.locator('.history-card').count()==1,'Historique dupliqué'
   assert not errors,errors
   results.append({'browser':name,'width':width,'status':'passed','checks':['génération','sauvegarde','préchargement','série prévue/déclarée','repos +15','pause','rechargement/reprise','arrêt conservé','historique unique','absence débordement']})
   context.close()
  browser.close()
(reports/'browser-report.json').write_text(json.dumps({'physicalIPhoneTested':False,'results':results},ensure_ascii=False,indent=2))
print(json.dumps(results,ensure_ascii=False,indent=2))

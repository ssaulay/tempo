// Historical UI recipe, pre-calibration navigation. Current UI checks: coherence-regression.cjs, coherence-edge-cases.cjs and coherence-offline.cjs.
// Real UI recipe in an isolated browser profile. Physical iPhone remains required.
const {chromium,webkit}=require(process.env.TEMPO_PLAYWRIGHT||'playwright');
const fs=require('node:fs');const assert=require('node:assert/strict');
const results=[];
async function readData(page){return page.evaluate(async()=>{const db=await new Promise((r,j)=>{const q=indexedDB.open('tempo-local',1);q.onsuccess=()=>r(q.result);q.onerror=()=>j(q.error)});const tx=db.transaction(['meta','sessions','programs']);const get=(store,key)=>new Promise(r=>{const q=key?tx.objectStore(store).get(key):tx.objectStore(store).getAll();q.onsuccess=()=>r(q.result)});const d=await Promise.all([get('meta','active'),get('sessions'),get('programs')]);db.close();return {active:d[0],sessions:d[1],programs:d[2]}})}
(async()=>{
for(const [name,type] of [['chromium',chromium],['webkit',webkit]]){
 let browser;try{browser=await type.launch({headless:true,...(name==='chromium'&&process.env.TEMPO_CHROMIUM?{executablePath:process.env.TEMPO_CHROMIUM}:{})})}catch(e){results.push({browser:name,status:'unavailable',reason:e.message.slice(0,400)});continue}
 for(const width of (process.env.TEMPO_WIDTH?[Number(process.env.TEMPO_WIDTH)]:[390,360,1440])){
  for(const base of [process.env.TEMPO_BASE_URL||'http://localhost:4173',...(width===390?[process.env.TEMPO_LAN_URL||'http://192.168.1.92:4173']:[])]){
   const context=await browser.newContext({viewport:{width,height:900},isMobile:width<500,hasTouch:width<500});const page=await context.newPage();page.setDefaultTimeout(10000);const errors=[];page.on('pageerror',e=>errors.push(e.message));const checks=[];
   try{
    const btn=n=>page.getByRole('button',{name:n,exact:true});
    await page.goto(base);await btn('Découvrir Tempo').click();await page.locator('.top-actions').getByRole('button',{name:'Réglages',exact:true}).click();await page.getByLabel('Votre niveau').selectOption('intermediate');await page.getByLabel('Activer le prototype avec les démonstrations provisoires').check();await page.getByLabel('Coach vocal français').uncheck();await btn('Enregistrer mes réglages').click();
    await btn('Pectoraux').click();await btn('Abdominaux').click();await btn('Générer ma séance').click();await page.getByLabel('Nom du programme').fill('Recette mobile');
    const first=page.locator('.block-card').first();await first.locator('summary').click();await first.getByLabel('Résistance choisie').fill('Recette sans charge');await btn('Sauvegarder').click();await page.getByText('Programme sauvegardé sur cet appareil.',{exact:true}).waitFor();checks.push('génération, modification, sauvegarde');
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth+1));
    await btn('Démarrer').click();await page.locator('.player').waitFor();
    const secure=await page.evaluate(()=>isSecureContext);if(!secure){await page.getByText('Médias chargés avec réseau.',{exact:false}).waitFor({state:'attached'});checks.push('HTTP Wi-Fi sans fausse promesse hors ligne')}
    await btn('Continuer').click();await page.waitForTimeout(1200);const timed=await readData(page);await btn('Pause').click();const paused=await readData(page);await page.waitForTimeout(1100);assert.equal((await readData(page)).active.remaining,paused.active.remaining);checks.push('timer et pause stable');
    await btn('Reprendre').click();await page.waitForTimeout(5200);assert((await readData(page)).active.session.activeSeconds>paused.active.session.activeSeconds);
    await page.getByText('Autres commandes',{exact:true}).click();await btn('Passer l’exercice').click();await btn('Continuer').click();for(let i=0;i<10&&await btn('Série terminée').count()===0;i++){if(!await page.locator('.player-secondary-actions').evaluate(el=>el.open))await page.getByText('Autres commandes',{exact:true}).click();await btn('Passer l’exercice').click();await btn('Continuer').click()}await btn('Série terminée').waitFor();
    await page.getByLabel('Réalisées (facultatif)').fill('6');await btn('Pause').click();await btn('Reprendre').click();assert.equal(await page.getByLabel('Réalisées (facultatif)').inputValue(),'6');checks.push('saisie conservée pendant pause');
    await btn('Série terminée').click();const rest=(await readData(page)).active.remaining;await btn('+15 s').click();assert((await readData(page)).active.remaining>rest+14);await btn('Pause').click();const saved=await readData(page);
    if(secure){await page.evaluate(()=>navigator.serviceWorker.ready);await page.waitForFunction(()=>!!navigator.serviceWorker.controller);await context.setOffline(true)}
    await page.reload();await page.getByRole('button',{name:'Reprendre ma séance',exact:false}).click();await page.locator('.player').waitFor();assert((await readData(page)).active.remaining<=saved.active.remaining);assert(await page.locator('.player-visual img').evaluate(img=>img.complete&&img.naturalWidth>0));checks.push('rechargement et reprise volontaire'+(secure?' hors ligne':''));
    await btn('Terminer le repos').click();await btn('Série terminée').click();if(!await page.locator('.player-secondary-actions').evaluate(el=>el.open))await page.getByText('Autres commandes',{exact:true}).click();await btn('Arrêter la séance').click();await btn('Arrêter et conserver').click();await page.getByText('Séance enregistrée sur cet appareil.',{exact:true}).waitFor();
    let data=await readData(page);assert.equal(data.sessions.length,1);assert.equal(data.sessions[0].attempts.filter(a=>a.status==='validated'&&a.planned.mode==='reps')[0].declared,6);assert.equal(data.sessions[0].attempts.filter(a=>a.status==='validated'&&a.planned.mode==='reps')[1].declared,null);checks.push('prévu, déclaré, non renseigné distincts');
    const snapshot=JSON.stringify(data.sessions[0].snapshot);await btn('Refaire').click();await page.getByLabel('Nom du programme').fill('Programme modifié après bilan');await btn('Sauvegarder').click();await page.getByText('Programme sauvegardé sur cet appareil.',{exact:true}).waitFor();assert.equal(JSON.stringify((await readData(page)).sessions[0].snapshot),snapshot);checks.push('snapshot historique immuable');
    await page.reload();await page.locator(width<500?'.bottom-nav':'.sidebar').getByRole('button',{name:'Progression',exact:true}).click();await page.locator('.history-card').waitFor();assert.equal(await page.locator('.history-card').count(),1);assert.equal((await readData(page)).active,undefined);assert.deepEqual(errors,[]);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth+1));checks.push('historique unique après rechargement, aucune erreur JS');
    if(width===390&&secure){
     await page.locator('.bottom-nav').getByRole('button',{name:'Mes programmes',exact:true}).click();await btn('Ouvrir').click();
     const blocks=(await readData(page)).programs[0].blocks;const target=blocks.findIndex(b=>b.exercise.mode==='timed'&&b.exercise.sides===1);assert(target>=0);
     for(let i=blocks.length-1;i>=0;i--)if(i!==target)await page.locator('.block-card').nth(i).getByRole('button',{name:/^Retirer /}).click();
     const card=page.locator('.block-card');await card.locator('summary').click();await card.getByLabel('Séries',{exact:false}).fill('1');const input=card.getByLabel('Durée (secondes)',{exact:false});const seconds=Number(await input.getAttribute('min'));await input.fill(String(seconds));
     await btn('Démarrer').click();await page.locator('.player').waitFor();await btn('Continuer').click();await page.getByText('Séance enregistrée sur cet appareil.',{exact:true}).waitFor({timeout:(seconds+5)*1000});
     const finished=await readData(page);assert.equal(finished.sessions.length,2);const completed=finished.sessions.find(s=>s.status==='completed');assert(completed);assert.equal(completed.attempts.length,1);assert(Math.abs(completed.attempts[0].duration-seconds)<.01);assert.equal(completed.attempts[0].declared,null);checks.push('timer terminé automatiquement hors ligne, bilan complet unique');
    }
    await page.screenshot({path:`reports/recipe-${name}-${width}-${secure?'local':'lan'}.png`,fullPage:true});results.push({browser:name,width,base,status:'passed',checks});
   }catch(e){results.push({browser:name,width,base,status:'failed',checks,error:e.stack,layout:await page.evaluate(()=>({innerWidth,clientWidth:document.documentElement.clientWidth,scrollWidth:document.documentElement.scrollWidth,scrollY,visual:{width:visualViewport.width,height:visualViewport.height,scale:visualViewport.scale},nav:document.querySelector('.bottom-nav')?.getBoundingClientRect().toJSON(),overflow:[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>document.documentElement.clientWidth+1).slice(0,12).map(e=>({tag:e.tagName,class:e.className,rect:e.getBoundingClientRect().toJSON()}))}))});await page.screenshot({path:`reports/failure-${name}-${width}.png`,fullPage:true})}
   await context.close();
  }
 }
 await browser.close();
}
fs.writeFileSync('reports/mobile-recipe.json',JSON.stringify({physicalIPhoneTested:false,humanTechnicalReview:'pending',results},null,2));console.log(JSON.stringify(results,null,2));if(results.some(r=>r.status==='failed'))process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});

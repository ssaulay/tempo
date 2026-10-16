const {chromium}=require(process.env.TEMPO_PLAYWRIGHT||'playwright');
const fs=require('node:fs'),assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'chrome'}),results=[];
 for(const width of [390,1440]){
  const context=await browser.newContext({viewport:{width,height:950}}),page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));page.setDefaultTimeout(10000);
  await page.goto('http://127.0.0.1:5174');await page.getByRole('button',{name:'Découvrir Tempo',exact:true}).click();
  await page.locator('.top-actions').getByRole('button',{name:'Réglages',exact:true}).click();await page.getByLabel('Votre niveau').selectOption('intermediate');
  await page.getByLabel('Kit de résistance avec 5 élastiques (Decathlon)',{exact:true}).check();assert.equal(await page.getByText('Tubes utilisés ensemble',{exact:true}).count(),0);
  await page.getByLabel('Compatible avec un maintien sous les pieds',{exact:true}).check();await page.getByLabel('Activer le prototype avec les démonstrations provisoires').check();await page.getByLabel('Coach vocal français').uncheck();await page.getByRole('button',{name:'Enregistrer mes réglages',exact:true}).click();
  await page.getByRole('button',{name:'Explorer les exercices',exact:false}).click();
  for(const name of ['Rowing avec tubes et poignées','Curl avec tubes et poignées']){
   const card=page.locator('.catalog-card').filter({has:page.getByRole('heading',{name,exact:true})});await card.waitFor();const src=await card.locator('img').getAttribute('src');assert(src.includes('/v2/'));
   await card.getByRole('button',{name:'Détail',exact:false}).click();await page.locator('.detail-image img').waitFor();assert((await page.locator('.detail-image img').getAttribute('src')).includes('/v2/'));
   await page.getByRole('dialog',{name,exact:true}).getByRole('button',{name:'Fermer',exact:true}).click();
  }
  await page.screenshot({path:`reports/tube-variants-${width}.png`,fullPage:true});await page.locator('dialog').getByRole('button',{name:'Fermer',exact:true}).click();
  await page.getByRole('button',{name:'Dos',exact:true}).click();await page.getByRole('button',{name:'Bras',exact:true}).click();await page.getByRole('button',{name:'Générer ma séance',exact:true}).click();
  await page.locator('.block-card').filter({hasText:'Rowing avec tubes et poignées'}).waitFor();assert.match(await page.locator('.block-card').filter({hasText:'Rowing avec tubes et poignées'}).innerText(),/Tube 3 kg/);assert((await page.locator('.block-card').filter({hasText:'Rowing avec tubes et poignées'}).locator('img').getAttribute('src')).includes('/v2/'));
  const row=page.locator('.block-card').filter({hasText:'Rowing avec tubes et poignées'});await row.locator('summary').click();const select=row.getByRole('combobox',{name:/^Combinaison proposée/});await select.waitFor();assert.equal(await select.locator('option').count(),31);await select.selectOption('Tubes 3 + 4 + 5 + 6 + 7 kg (valeurs nominales fabricant)');assert.match(await row.innerText(),/3 \+ 4 \+ 5 \+ 6 \+ 7/);await page.screenshot({path:`reports/tube-recommendation-${width}.png`,fullPage:true});
  await page.getByRole('button',{name:'Démarrer',exact:true}).click();await page.locator('.player').waitFor();assert.equal(errors.length,0);
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth+1));
  results.push({width,status:'passed',checks:['kit sans combinaison globale, proposition par exercice','cartes et fiches v2','génération dos/bras','démarrage et préchargement','aucun débordement ou erreur JS']});await context.close();
 }
 await browser.close();fs.writeFileSync('reports/tube-variants-ui.json',JSON.stringify({results,physicalIPhoneTested:false,humanTechnicalReviewPerformed:false},null,2));console.log(JSON.stringify(results));
})().catch(e=>{console.error(e);process.exit(1)});

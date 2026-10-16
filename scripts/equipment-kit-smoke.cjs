const {chromium}=require(process.env.TEMPO_PLAYWRIGHT||'playwright');
const assert=require('node:assert/strict');const fs=require('node:fs');
(async()=>{const browser=await chromium.launch({headless:true,...(process.env.TEMPO_CHROMIUM?{executablePath:process.env.TEMPO_CHROMIUM}:{})});const results=[];
for(const width of [360,390]){
 const context=await browser.newContext({viewport:{width,height:900},isMobile:true,hasTouch:true});const page=await context.newPage();page.setDefaultTimeout(10000);const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(process.env.TEMPO_LAN_URL||'http://192.168.1.92:4173');
 await page.getByRole('button',{name:'Découvrir Tempo',exact:true}).click();await page.locator('.top-actions').getByRole('button',{name:'Réglages',exact:true}).click();
 const kit='Kit de résistance avec 5 élastiques (Decathlon)';
 await page.getByLabel(kit,{exact:true}).check();await page.getByText('Kit compact avec tubes et poignées',{exact:true}).waitFor();
 await page.getByLabel('Élastique',{exact:true}).check();await page.getByLabel('Résistance fabricant',{exact:true}).fill('Légère personnelle');await page.getByLabel('Compatible avec un maintien sous les pieds',{exact:true}).check();
 await page.getByLabel(kit,{exact:true}).uncheck();assert(await page.getByLabel('Élastique',{exact:true}).isChecked());assert.equal(await page.getByLabel(/^Type/).inputValue(),'flat');assert.equal(await page.getByLabel('Résistance fabricant',{exact:true}).inputValue(),'Légère personnelle');
 await page.getByLabel(kit,{exact:true}).check();await page.getByRole('button',{name:'Enregistrer mes réglages',exact:true}).click();await page.locator('.modal').waitFor({state:'detached'});assert.match(await page.locator('.material-line').innerText(),/Kit de résistance/);
 await page.reload();await page.locator('.material-line').filter({hasText:'Kit de résistance'}).waitFor();await page.locator('.top-actions').getByRole('button',{name:'Réglages',exact:true}).click();await page.getByLabel(kit,{exact:true}).waitFor();assert(await page.getByLabel(kit,{exact:true}).isChecked());assert(await page.getByLabel('Élastique',{exact:true}).isChecked());assert.equal(await page.getByLabel(/^Type/).inputValue(),'flat');
 await page.getByText('Rowing et curl disposent de démonstrations avec tubes et poignées',{exact:false}).waitFor();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth+1));assert.deepEqual(errors,[]);
 await page.screenshot({path:`reports/equipment-kit-${width}.png`,fullPage:true});results.push({width,status:'passed',checks:['option du kit et accessoires','bande plate conservée après sélection/désélection','profil conservé après rechargement','limite des démonstrations explicite','absence de débordement et erreur JS']});await context.close();
}
await browser.close();fs.writeFileSync('reports/equipment-kit.json',JSON.stringify({physicalIPhoneTested:false,results},null,2));console.log(JSON.stringify(results,null,2));})().catch(e=>{console.error(e);process.exit(1)});

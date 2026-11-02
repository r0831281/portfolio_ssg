// Usage: PUPPETEER_CORE=/path/to/puppeteer-core.js CHROME_BIN=/path/to/chrome node tests/check_service_fragments.mjs /path/to/build
// Serves the build locally, blocks external requests, and never submits forms or invokes APIs.
import fs from 'node:fs';
import path from 'node:path';
import {spawn} from 'node:child_process';
const root=path.resolve(process.argv[2] || 'jo-qu.com/public');
const {default:puppeteer}=await import(process.env.PUPPETEER_CORE || 'puppeteer-core');
const port=8435, origin=`http://127.0.0.1:${port}`;
const server=spawn('python3',['-m','http.server',String(port),'--directory',root],{stdio:'ignore'});
const checks=[],issues=[];let browser;
try {
 const until=Date.now()+5000; while(true){try{await fetch(origin);break}catch(e){if(Date.now()>until)throw e;await new Promise(r=>setTimeout(r,50))}}
 browser=await puppeteer.launch({executablePath:process.env.CHROME_BIN,headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
 const page=await browser.newPage();await page.setCacheEnabled(false);await page.setRequestInterception(true);
 page.on('request',req=>{const u=new URL(req.url());if(u.origin===origin && u.pathname!='/api/analyze' && req.method()==='GET')req.continue();else req.abort()});
 const expected={en:{web:'Custom software',security:'Web application security',integrations:'Integrations and automation',maintenance:'Maintenance and architecture'},nl:{web:'Software op maat',security:'Beveiliging van websoftware',integrations:'Koppelingen en automatisering',maintenance:'Onderhoud en architectuur'}};
 for(const width of [390,1440]){
  await page.setViewport({width,height:width===390?844:1000,deviceScaleFactor:1});
  for(const lang of ['en','nl']) for(const id of Object.keys(expected[lang])){
   const route=(lang==='nl'?'/nl/services/':'/services/')+'#'+id;
   await page.goto('about:blank');
   const response=await page.goto(origin+route,{waitUntil:'load'});
   try {await page.waitForFunction(id=>{const e=document.getElementById(id),h=e?.querySelector('h2');if(!h)return false;const r=h.getBoundingClientRect();return Math.abs(e.getBoundingClientRect().top)<2 && r.top>=0 && r.top<innerHeight && scrollY>0}, {timeout:5000}, id)} catch(e) {}
   const actual=await page.evaluate(id=>{const e=document.getElementById(id),h=e?.querySelector('h2');const r=h?.getBoundingClientRect();return {hash:location.hash,count:document.querySelectorAll(`[id="${id}"]`).length,target:document.querySelector(':target')===e,tag:e?.tagName,section:e?.className,heading:h?.textContent.trim(),targetTop:e?.getBoundingClientRect().top,headingTop:r?.top,headingBottom:r?.bottom,scrollY,viewportHeight:innerHeight,allDuplicateIds:[...document.querySelectorAll('[id]')].map(x=>x.id).filter((x,i,a)=>a.indexOf(x)!==i)}},id);
   const check={width,lang,route,status:response.status(),expectedHeading:expected[lang][id],...actual};checks.push(check);
   if(check.status!==200 || check.hash!=='#'+id || check.count!==1 || !check.target || check.heading!==check.expectedHeading || !(Math.abs(check.targetTop)<2 && check.headingTop>=0 && check.headingTop<check.viewportHeight && check.scrollY>0) || check.allDuplicateIds.length || (id==='maintenance' && (check.tag!=='ASIDE' || !check.section.split(' ').includes('additional-support'))))issues.push(check);
  }
 }
 console.log(JSON.stringify({browserVersion:await browser.version(),root,checks,issues},null,2));
 if(issues.length)process.exitCode=1;
} finally {if(browser) await browser.close();server.kill()}

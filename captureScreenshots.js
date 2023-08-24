'use strict';
const puppeteer = require('puppeteer');
(async () => {
const browser = await puppeteer.launch({
  headless: 'new',
});	
  const page = await browser.newPage();
  await page.emulateTimezone('Europe/Ljubljana')
  await page.setViewport({ width: 640, height: 185 });
  await page.goto("http://vreme.arso.gov.si/widget/?width=610px&loc=Ljubljana", {waitUntil: "networkidle0",});
  await page.screenshot({ path: "arsolj.png", clip: { x: 0, y: 0, width: 610, height: 185 } });
  await browser.close();
})();

'use strict';

const path = require('path');

const puppeteer = require('puppeteer');

(async () => {
	
const browser = await puppeteer.launch({
  headless: 'new',
  // `headless: true` (default) enables old Headless; 
  // `headless: false` enables “headful” mode.
});	

console.log('1 Launch page');
	
  //const browser = await puppeteer.launch();
  const page = await browser.newPage();

	console.log('2 Launch page');

  // Set the viewport size to the desired dimensions
  await page.setViewport({ width: 610, height: 185 });

	console.log('3 Launch page');

  await page.goto("http://vreme.arso.gov.si/widget/?width=610px&loc=Ljubljana");

	console.log('4 Launch page');

  await page.screenshot({ path: "arsolj.png" });


//const screenshotPath = path.join(process.env.GITHUB_WORKSPACE, 'arsolj.png');
console.log(" 6screenshotPath: ");

//console.log(screenshotPath);
//await page.screenshot({ path: screenshotPath });

	
  await browser.close();
})();


'use strict';

const path = require('path');

const fs = require('fs');


const puppeteer = require('puppeteer');

(async () => {
	
const browser = await puppeteer.launch({
  headless: 'new',
  // `headless: true` (default) enables old Headless; 
  // `headless: false` enables “headful” mode.
});	

console.log('1 Launch page fs');
	
  //const browser = await puppeteer.launch();
  const page = await browser.newPage();

	console.log('2 Launch page');

  // Set the viewport size to the desired dimensions
  await page.setViewport({ width: 640, height: 185 });

	console.log('3 Launch page');

  await page.goto("http://vreme.arso.gov.si/widget/?width=610px&loc=Ljubljana", {waitUntil: "networkidle0",});
	console.log('After waitUntil');


await page.screenshot({ path: "arsolj.png", clip: { x: 0, y: 0, width: 610, height: 185 } });

console.log(" 6screenshotPath: ");

//console.log(screenshotPath);

fs.readdir(__dirname, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});

	console.log('7 Launch page');
	
  await browser.close();
})();


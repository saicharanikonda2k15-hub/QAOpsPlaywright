const playwright = require('@playwright/test');
const {POManager} = require('../../PageObjects/POManager');
const { Before , After , AfterStep , Status } = require('@cucumber/cucumber');
const path = require('node:path');

Before(async function () {
 
    const browser = await playwright.chromium.launch({
      headless: false
    });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.dropdown = this.page.locator("select.input");   
    this.poManager = new POManager(this.page);
});

AfterStep( async function ({result}) {
  
  if (result.status === Status.FAILED)
     {
    await this.page.screenshot({ path : 'screenshot1.png'});
  }
});

After(function () {
  console.log('iam the last one to execute');
});

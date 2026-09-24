// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
//retries:1,
  //workers:1,
  timeout: 30 * 1000,
   expect: {
    timeout: 5000
  },

  reporter: 'html',
  projects: 
  [
{
  name: 'Chromium',
  
  use: {
    
    browserName: 'chromium',
    headless: true,
    screenshot: 'on',
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
   //ignoreHTTPSErrors:true,
   //permissions:['geolocation']
    //viewport: {width: 720,height: 720}
  }
  
},

{
  name: 'safari',
use: {
    
    browserName: 'webkit',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    //...devices['iphone 11']
  }
}
  ]

  
});
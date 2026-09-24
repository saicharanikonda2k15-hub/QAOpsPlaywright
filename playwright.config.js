// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  
  timeout: 30 * 1000,
   

  expect: {
    timeout: 5000
  },

  reporter: 'html',

  use: {
    actionTimeout: 10*1000,
navigationTimeout: 30*1000,
    browserName: 'chromium',
    headless: false,
    screenshot: 'off',
    trace: 'retain-on-failure'
  }
});
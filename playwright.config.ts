import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();
/**
 * See https://playwright.dev/docs/test-configuration.
 * 
 * 
 */

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 20 : undefined, // By default it will start 8 TCs in a parallel way
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
   timeout : 60000,
  // expect:{
  //   timeout:10000
  // },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    screenshot : 'on',
    video : 'on',
    headless : true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});



// Scenario - 1 :
// FullyParallel - true
// Workers - 5  - In this case 5 different TEST CASES will start execution at the same time

// Scenario - 2 :
// FullyParallel - true
// Workers - 1  - In this case 1 TEST CASES will start execution at the same time


// Scenario - 3 :
// FullyParallel - false
// Workers - 5  - In this case 5 TEST FILES will start execution at the same time

// Scenario - 4 :
// FullyParallel - false
// Workers - 1  - In this case 1 TEST FILES will start execution at the same time


// Test file Identification - by checking the extension as filename.spec.ts OR
// filename.test.ts 


// Configurations are of 3 types
// 1. Global config - playwright.config.ts
// 2. Test file config - test file itself
// 3. Test Step configuration
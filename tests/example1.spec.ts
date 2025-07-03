import {test, expect} from '@playwright/test';


// fixture - A special type of object that is available in Playwright which helps us in settingup and tear down the process


// client -server will make a connection over WEBSOCKET

// client -server will make a connection over HTTP 




// Test - annotations
// browser and page fixture


// jar --> Packages (Modules) --> classes --> methods --> Logic

test('get started link1',  async function({ page }){
  await page.goto('https://playwright.dev/');
  await console.log("Launching is successfull");
  await page.getByRole('link', { name: 'Get started' }).click();
  await console.log("Clicked on");
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible
  ();

  await expect(page.getByRole('heading', { name: 'Sign up' , exact: true })).toBeVisible();

// CSS and XPATH
  await page.locator("#input").last().locator("")

  // await page.getByAltText()
// sign up, sign ups


page.getByLabel("Password", {exact: true}).getByText("aghgjk")

});

test('Validate login with valid credentials', async function ({browser}){

// Create a browser context - 
// create a new page on the browser context by self - 
  const context  = await browser.newContext() //creating a browser context
  const page1 = await context.newPage()
  await page1.goto('https://playwright.dev/');
  await console.log("Launching is successfull");
  await page1.getByRole('link', { name: 'Get started' }).click();
  await console.log("Clicked on");
  await expect(page1.getByRole('heading', { name: 'Installation' })).toBeVisible();


})


// Locators - Helps us in identifying the element on the page


// css selectors 
// xpath 
// getBy specific locators - playwright 






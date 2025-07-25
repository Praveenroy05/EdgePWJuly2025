// NewPage or New window opens - popup event appeared on the page

// Step by step procedure to handling multiple windows

// 1. Launch the url   - page.goto()
// 2. Identify the element and click on the element  -  click() - 
// 3. popup event we have to handle it - const newPage = page.waitForEvent('popup')
// 4. newPage.locator("download").click()
// 5. newPage.locator("").toBeVisible()
// 6. page.locator("").click()
// 7. page.locator("").toBeVisible()


import {test, expect} from '@playwright/test'

test("Multiple windows handling", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")
    await page.getByRole('button', {name: 'click'}).click()
    // popup events appears on the page - EVent we have to handle to get the control of the newly opened page/tab
    const newPage = await page.waitForEvent('popup')
    await newPage.getByText("Downloads").click()
    await newPage.getByText("About Selenium").last().click()
    await expect(newPage.getByText("History of Selenium")).toBeVisible()

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

    
    
})


test("Count Of Multiple pages", async ({browser})=>{

    const context  = await browser.newContext()
    const page  = await context.newPage()

    await page.goto("https://demo.automationtesting.in/Windows.html")
    await page.getByRole('button', {name: 'click'}).click()
    // popup events appears on the page - EVent we have to handle to get the control of the newly opened page/tab
    const newPage = await page.waitForEvent('popup')
    await newPage.getByText("Downloads").click()
    await newPage.getByText("About Selenium").last().click()
    await expect(newPage.getByText("History of Selenium")).toBeVisible()

  //  await page.getByText("Home").click()
   // await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
    await page.getByRole('button', {name: 'click'}).click()

    const newPage1 = await page.waitForEvent('popup')
    await newPage1.getByText("Downloads").click()
    await newPage1.getByText("About Selenium").last().click()
    await expect(newPage1.getByText("History of Selenium")).toBeVisible()


    const pageCount = await context.pages().length
    console.log(pageCount);

    //newPage1.close()

})



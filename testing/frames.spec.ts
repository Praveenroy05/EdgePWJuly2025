// Frames - 


// Step by step to handle frames
// 1. Launch the url - page.goto("")
// 2. Perform some action on the main page
// 3. Identify the frame available on the page - Locator to identify the frame
// const framePage  = page.frameLocator("iframe")
// 4. Perform the action on the frames by using "framePage" as a fixture
// 5. Come back to the main page by using the "page" fixture


import {test, expect} from '@playwright/test'

test("Frames Handling", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("#checkBoxOption2").check()
    await expect(page.locator("#checkBoxOption2")).toBeChecked()

    const framePage = await page.frameLocator("#courses-iframe")
    await framePage.getByText("All Access plan").first().click()
    await expect(framePage.locator("div.inner-box h1")).toContainText("All Access Subscription")

    await page.getByRole('button', {name:'Home'}).click()

    await page.waitForTimeout(3000)

})

test("Nested frame handling", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")
    await page.getByText("Iframe with in an Iframe").click()

    const outerFrame = await page.frameLocator("#Multiple iframe")

    const innerFrame  = await outerFrame.frameLocator("div.iframe-container iframe")

    await innerFrame.locator("div.container input").fill("Testing")
    await expect(innerFrame.locator("div.container input")).toHaveValue("Testing")

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

    await innerFrame.locator("div.container input").fill("Testing")
    await expect(innerFrame.locator("div.container input")).toHaveValue("Testing")
})
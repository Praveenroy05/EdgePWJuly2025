import {test, expect} from '@playwright/test'

test("Visual Testing", async ({page})=>{
    await page.goto("https://www.flightaware.com/")
    expect(await page.screenshot({path:"screenshot/fullPage.png"})).toMatchSnapshot("screenshot/fullPage.png")
})
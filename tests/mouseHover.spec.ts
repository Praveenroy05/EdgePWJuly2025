import {test, expect} from '@playwright/test'

test("Mouse Hover handling", async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    // hover() - Hover over on an element
    await page.getByText("SpiceClub", {exact: true}).first().hover()
    await page.getByTestId("test-id-Instant Vouchers").highlight()
    await page.getByText("SpiceClub", {exact: true}).first().hover()

    await page.waitForTimeout(3000)
    await page.getByTestId("test-id-Instant Vouchers").click()

})



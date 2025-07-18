import {test, expect} from '@playwright/test'

// 1. Launch the url
// 2. Click on the calendar
// 3. Initialisation for looping variables (day, month and year)
// 4. While(if month===May and year===2026){ click on next}
// 5. validate date and then click on that date

test("Calendar date selection handling", async ({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    const month = "May"
    const year = "2024"
    const day = "5"

    await page.locator("img.ui-datepicker-trigger").click()
    const monthPicker = await page.locator(".ui-datepicker-month")
    const yearPicker = await page.locator(".ui-datepicker-year")

    // const months = await monthPicker.textContent() // July
    // const years = await yearPicker.textContent() // 2025

    while((await monthPicker.textContent()!==month) || (await yearPicker.textContent()!==year)){ // "May" !=="May" -- true && "2026" !== "2026" - true
        
        await page.getByText("Next").click()
    }

    await page.getByText(day, {exact: true}).last().click()

    await page.waitForTimeout(5000)






})


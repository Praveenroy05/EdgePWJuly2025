// Drop Down

// 2 types of DD

// 1. static drop down  - The value might never get changes
    // a. Single Select drop down
    // b. Multi select 
// 2. Dynamic DD - The value of the DD keeps changing
    // a. Single Select drop down
    // b. Multi select 


// Development of a drop down 
// <select> </select>
// non <select> tag - div, span, li, ul


// 1. DD developed using <select> tag:
// Step by step by procedure

// Launch the url
// Locate the drop down element by writing locator
// Get the value from the drop by using  - selectOption("DZ", {label, value, index})

// Example  - page.selectOption(["DZ", "TS"])

// page.selectOption([{label: 'Afghanistan'}, {label: 'India'}])
// page.selectOption({value: 'AR'})
// Page.selectOption({index : 2})


// 2. DD developed using non-select tag
// Step by step by procedure

// Launch the url
// Locate the drop down element by writing locator
// Click on the drop down element
// Identify and Click on the element that you are trying to select from the drop down


import {test, expect} from '@playwright/test'

test("Drop down developed using select tag handling", async ({page})=>{

    await page.goto("https://practice.expandtesting.com/dropdown")

    await page.locator("#country").selectOption("AR") // default value attribute
    await page.waitForTimeout(2000)
    await page.locator("#country").selectOption({value: 'BY'})
    await page.waitForTimeout(2000)
    await page.locator("#country").selectOption({label: 'Central African Republic'})
    await page.waitForTimeout(2000)
    await page.locator("#country").selectOption({index: 7})
    await page.waitForTimeout(2000)


    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption(["saab", "Audi"])
    await page.locator("#cars").selectOption([{label : 'Volvo'}, {label: 'Opel'}])
})

test("Drop down developed using non select tag", async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#withOptGroup").click()
    await page.getByText('Another root option', {exact: true}).click()
    await page.waitForTimeout(2000)

    await page.locator("div.css-1hwfws3").last().click()
    await page.locator("#react-select-4-option-1").click()
    await page.locator("#react-select-4-option-3").click()
    await page.waitForTimeout(2000)

})
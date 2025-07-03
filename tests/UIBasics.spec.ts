/*

1. Launch the browser or URL
2. Fill username student into Username field
3. Fill password Password123 into Password field
4. Click on Submit button
5. Verify new page URL contains practicetestautomation.com/logged-in-successfully/

*/

// How to fill in the text box and validate if the value have been filled or not

import {test, expect} from '@playwright/test'

// test() - Will help us in writing the test cases in PW
// expect() - Will help us in asserting the expected result

test("Input field validation", async ({page})=>{
    // Launch the url - goto("url")
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // Fill the username field 
    // css or xpath  - locator() - Which helps us in identifiying the element on the webpage.
    // fill() - Set a value to the input field.
    await page.locator('input#username').fill("student")
    // Assertion to verify if the student has been filled inside the username field or not
    // expect()
    await expect(page.locator("input#username")).toHaveValue("student")
})


// Input field - type
// assertition for input field
// click on element
// Handling radio button and checkbox
// How to get the text value from an element
// assertion for radio, checkbox, element is displayed on the page

test("Radio button and checkbox validation", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // pressSequentially() - Which will type inside the input field character by character
    await page.getByPlaceholder("Enter Name").pressSequentially("Playwright Test")
    await expect(page.getByPlaceholder("Enter Name")).toHaveValue("Playwright Test")

    // click() - Clicks on an element
    // check() - check the radio button or checkbox
    await page.getByRole('radio', {name : 'Male', exact: true}).check()
    await expect(page.getByRole('radio', {name : 'Male', exact: true})).toBeChecked()

   // await maleRadioBtn.check()

   const sundayCheckBox = page.getByText('Sunday',{exact: true})
    await sundayCheckBox.check({force:true})
   // await page.waitForTimeout(3000)
    if(await sundayCheckBox.isChecked()){
        console.log("Sunday is checked")
    }
    await expect(sundayCheckBox).toBeChecked()

})

test.only("Get text from an element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //first()
    //last()
    //nth(index)

    // textContent() - Return the txt value from an element
    const textFirst = await page.locator("h2.title").first().textContent()
    console.log(textFirst)

    const textLast = await page.locator("h2.title").last().textContent()
    console.log(textLast)

    //await page.locator("h2.title").first().waitFor({timeout: 40000})
    const textAny = await page.locator("h2.title").nth(5).textContent()
    console.log(textAny)
   

    // allTextContents()

    const allTexts = await page.locator("h2.title").allTextContents() // - []
    console.log(allTexts)

    // const count = await page.locator("h2.title").count()
    // for(let i=0; i<count; i++){
    //     console.log(await page.locator("h2.title").nth(i).textContent())
    // }

    console.log(await page.locator("#draggable").textContent({timeout : 50000}))
    

})
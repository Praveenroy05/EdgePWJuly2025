// Alerts or popup  - dialog event
// New tab/ new windows - popup event 

// Step by step execution
// 1. Launch the browser or URL
// 2. Handle the dialog events - page.on()
// 3. Click on the button to open the alert

import {test, expect} from '@playwright/test'


test("Alert Handling", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")
    // handle the dialog events
    // page.on()
    // page.waitForEvent()
    page.on('dialog', async (dialog)=>{
        console.log(dialog.message())
        dialog.accept() 
    })

    await page.locator("#alertButton").click()
})


test("Confirm alerts Handling", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")
    page.on('dialog', async (dialog)=>{
        console.log(dialog.message())
        dialog.dismiss() 
    })

    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toHaveText("You selected Cancel")
    
})


test("Prompt alerts Handling", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")

    page.on('dialog', async (dialog)=>{
        console.log(dialog.message())
       // expect(dialog.message()).toBe("Please enter your name")
        dialog.accept("test") 
    })
    await page.locator("#promtButton").click()
    await expect(page.locator("#promptResult")).toHaveText("You entered test")
})




// popup event handling



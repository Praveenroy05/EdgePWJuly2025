// click  - click()
// double click
// right click
// Mouse Hover
// drag and drop
// scroll
// Alert and Popup - dialog event

import {test, expect} from '@playwright/test'

test("Double click and right click validation", async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

    //Double CLick - dblClick()
    await page.getByText("Double-Click Me To See Alert").dblclick()



    // Right click - 
    await page.getByText("right click me", {exact: true}).click({button: 'right'})
    await page.getByText("Edit").click()


    await page.waitForTimeout(3000)

})


test("Drag and drop handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // Drag and Drop
    // Identify the draggable element
    // Identify the drop place
    // Move to the draggable element and perform mouse down and hold it
    // Move to the drop place and perform mouse up

    const source = page.locator("div#draggable")
    const target = page.locator("div#droppable")

    // dragTo(Locator)
    //await source.dragTo(target)

    await source.hover() // Hover on an element
    await page.mouse.down() // Do a mouse down
    await target.hover() // perform a hover on target element
    await page.mouse.up() // Release the mouse down

    await expect(target).toContainText("Dropped!")

})


test("Scroll down", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // scrollIntoViewIfneeded()
    await page.getByText("Download Files").scrollIntoViewIfNeeded()
    await page.getByText("Download Files").click()
    await expect(page.getByText("Download a Text or PDF File")).toBeVisible()
})






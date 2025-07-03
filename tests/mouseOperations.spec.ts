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



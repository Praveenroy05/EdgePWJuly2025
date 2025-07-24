import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

let url = "https://rahulshettyacademy.com/client"
let username = ""

// hooks
test("Valid login scenario", async ({page})=>{

    let loginpage = new LoginPage(page)
    await loginpage.launchURL(url)
    await loginpage.enterUsername(username)
})
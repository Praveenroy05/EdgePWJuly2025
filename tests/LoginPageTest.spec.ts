// Test Stpes and assertions

import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

let url = "https://rahulshettyacademy.com/client"
let username = "test7lYM@gmail.com"
let password = "Test@123"
let incorrectPassword = "abcd"

let loginPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    console.log("Executed Before Each");
})


test("Valid login scenario", async ({})=>{
    await loginPage.loginIntoApplication(username, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("invalid login scenario", async ({})=>{
    await loginPage.invalidLogin(username, incorrectPassword)
    await expect(loginPage.errorMessage).toContainText("Incorrect email or password.")
})
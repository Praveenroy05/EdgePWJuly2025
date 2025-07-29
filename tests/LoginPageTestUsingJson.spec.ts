// Test Stpes and assertions

import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import loginData from '../TestData/login.json'


let loginPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(loginData.url)
})


test("Valid login scenario", async ({})=>{
    await loginPage.loginIntoApplication(loginData.username, loginData.password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("invalid login scenario", async ({})=>{
    await loginPage.invalidLogin(loginData.username, loginData.incorrectPassword)
    await expect(loginPage.errorMessage).toContainText("Incorrect email or password.")
})

// const login = {
//   url: 'https://rahulshettyacademy.com/client',
//   username: 'test7lYM@gmail.com',
//   password: 'Test@123',
//   incorrectPassword: 'abcd'
// }

// console.log(login.url)
// console.log(login.username);
// console.log(login.password);
// console.log(login.incorrectPassword);


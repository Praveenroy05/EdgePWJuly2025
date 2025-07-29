import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

let url = "https://rahulshettyacademy.com/client"
let username = "test7lYM@gmail.com"
let password = "Test@123"
const productName  = "ZARA COAT 3"

// pre-condition
// Launch the url - LoginPage
// Login into the application - LoginPage
// DashboardPage

let loginPage
let dashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginIntoApplication(username, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("Search and Add the product to the cart", async ()=>{
    await dashboardPage.searchProductAndAddToCart(productName)
    await expect(dashboardPage.addToCartSuccessMsg).toHaveText("Product Added To Cart")
})

test("Search and View the product details", async ()=>{
    await dashboardPage.searchProductAndViewDetails(productName)
    await expect(dashboardPage.viewProductName).toHaveText(productName)
})


// assingment
// Cart , Payment


{
    key: "value"
    age : 20
}

let i = [10,20]
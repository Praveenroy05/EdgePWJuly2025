import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

let url = "https://rahulshettyacademy.com/client"
let username = "test7lYM@gmail.com"
let password = "Test@123"
const productName  = "IPHONE 13 PRO"

let loginPage
let dashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
})

test("Search and Add the product to the cart", async ()=>{
    await dashboardPage.searchProductAndAddToCart(productName)

})

test("Search and View the product details", async ()=>{

})
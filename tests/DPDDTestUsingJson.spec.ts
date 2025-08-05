import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

import productDatas from '../TestData/product.json'
//console.log(productDatas);

let loginPage
let dashboardPage

for(let product of productDatas){
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
})

test(`Search and Add the product to the cart for ${product.productName}`, async ()=>{
    await loginPage.launchURL(product.url)
    await loginPage.loginIntoApplication(product.username, product.password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
    await dashboardPage.searchProductAndAddToCart(product.productName)
    await expect(dashboardPage.addToCartSuccessMsg).toHaveText("Product Added To Cart")
})

test(`Search and View the product details for ${product.productName}`, async ()=>{
    await loginPage.launchURL(product.url)
    await loginPage.loginIntoApplication(product.username, product.password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
    await dashboardPage.searchProductAndViewDetails(product.productName)
    await expect(dashboardPage.viewProductName).toHaveText(product.productName)
})
}

// const datas = 
// [
//   {
//     url: 'https://rahulshettyacademy.com/client',
//     username: 'test7lYM@gmail.com',
//     password: 'Test@123',
//     productName: 'ZARA COAT 3'
//   },
//   {
//     url: 'https://rahulshettyacademy.com/client',
//     username: 'testnHNk@gmail.com',
//     password: 'Testing@1234',
//     productName: 'ADIDAS ORIGINAL'
//   },
//   {
//     url: 'https://rahulshettyacademy.com/client',
//     username: 'test7lYM@gmail.com',
//     password: 'Test@123',
//     productName: 'IPHONE 13 PRO'
//   }
// ]

// for(let data of datas){
//    console.log(data.productName)
// }


// xlsx - library - npm install xlsx



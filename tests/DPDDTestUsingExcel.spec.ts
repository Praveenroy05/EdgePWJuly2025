// Steps to work with excel file
// 1. We have to install xlsx library - npm install xlsx
// 2. Create and store the excel file in the project directory
// 3. import the xlsx package in the file where you want to read the data from the excel
// 4. Create a function to read the data from the excel file using xlsx package
// 5. Read the file and convert it into a JSON format using xlsx.utils.sheet_to_json()
// 6. Return the JSON data from the function
// 7. Call or import the function in the test file and store the data in a varaible



import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import path from 'path'

import { ExcelUtils } from '../utils/ExcelUtils'

const filePath = path.join(__dirname, "../TestData/excel.xlsx")

const sheetName = "Login"


let datas
try{
    datas =  ExcelUtils.getExcelData(filePath, sheetName)
}
catch(error){
    console.log("File not found", error)
}

console.log(datas);


let loginPage
let dashboardPage

for(let data of datas){
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
})

test.describe("Dashboard Page Test", ()=>{

    test(`Search and Add the product to the cart for ${data.productName}`,{tag: '@smoke'}, async ()=>{
        await loginPage.launchURL(data.url)
        await loginPage.loginIntoApplication(data.username, data.password)
        await expect(loginPage.homePageIdentifier).toBeVisible()
        await dashboardPage.searchProductAndAddToCart(data.productName)
        await expect(dashboardPage.addToCartSuccessMsg).toHaveText(data.successMsg)
    })

    test(`Search and View the product details for ${data.productName}`,
        {tag: ['@smoke', '@regression']}, async ()=>{
        await loginPage.launchURL(data.url)
        await loginPage.loginIntoApplication(data.username, data.password)
        await expect(loginPage.homePageIdentifier).toBeVisible()
        await dashboardPage.searchProductAndViewDetails(data.productName)
        await expect(dashboardPage.viewProductName).toHaveText(data.productName)
    })
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



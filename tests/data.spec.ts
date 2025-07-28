import {test, expect} from '@playwright/test'
import xlsx from 'xlsx'
import path from 'path'

const filePath = path.join(__dirname, "../TestData/excel.xlsx")

const sheetName = "Login"

let datas
try{
    datas = getDataFromExcel(filePath, sheetName)
}
catch(e){
    console.log(e)
}

test("Data Driven Testing", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    for(let data of datas){
        await page.getByPlaceholder("email@example.com").fill(data.username)
        await page.getByPlaceholder("enter your passsword").fill(data.password)
        await page.locator("#login").click()
        await page.locator(".fa-sign-out").click()
        await page.reload()
    }
    
})

function getDataFromExcel(filePath : string, sheetName: string){
        try{
            const workbook = xlsx.readFile(filePath)
            const sheet = workbook.Sheets[sheetName]
            const data = xlsx.utils.sheet_to_json(sheet)
            return data
        }
        catch(e){
            console.log(e)
        }
    }
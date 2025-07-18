// Download
// Step by step
// 1. Launch the url
// 2. We have to wait for download event to appear on the page
// 3. Identify the element for the download
// 4. Click on the element
// 5. Use path library to create a path for the downloads folder
// 6. Take the help of 'fs' library to create the directory if it is not available
// 7. save the downloaded file inside the created directory in step 6
// 8. Validate the PDF download is succefully


import {test, expect} from '@playwright/test'
import path from 'path'
import fs from 'fs'

test("Download file handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("#generatePdf").click()
    const downloadResult = await page.waitForEvent('download') // Pending, successful, 
    // Rejected
    await page.locator("#pdfDownloadLink").click()

    const download = await downloadResult

    const downloadsdir = path.join(__dirname, "../Downloads")
    console.log(__dirname);

    if(!fs.existsSync(downloadsdir)){
        fs.mkdirSync(downloadsdir)
    }

    const fileName = await download.suggestedFilename()
    console.log(fileName);
    console.log(downloadsdir);

    const filePath = await path.join(downloadsdir, fileName) // C:\Users\prave\Music\QEdgePWTSJune\Downloads\info.pdf
    console.log(filePath);

    await download.saveAs(filePath)

    await expect(fs.existsSync(filePath)).toBeTruthy()
    await expect(filePath).toContain(fileName)

})
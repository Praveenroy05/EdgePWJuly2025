// File upload - setInputFiles()

import { test, expect } from '@playwright/test';
import path from 'path';

test('File Uploads', async ({ page }) =>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    // setInputFiles(pathOfTheFile)

    await page.locator("#filesToUpload").setInputFiles("C:/Users/prave/OneDrive - EduNexGen QA/Desktop/Notepad/Courses.txt")

    await page.waitForTimeout(3000)
    await expect(page.locator("#fileList li")).toContainText("Courses.txt")


})


test('Single and Multiple file Uploads', async ({ page }) =>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    const filePath1 = path.join(__dirname, "../TestData/Courses.txt");
    const filePath2 = path.join(__dirname, "../TestData/Cypress.txt");


    await page.locator("#filesToUpload").setInputFiles([filePath1, filePath2])

    await expect(page.locator("#fileList li").first()).toContainText("Courses.txt")
    await expect(page.locator("#fileList li").last()).toContainText("Cypress.txt")

})
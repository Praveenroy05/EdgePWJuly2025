// table - tag
// tbody - table body
// th - table header
// tr - table rows
// td - table data

import { test, expect } from '@playwright/test';

test('Extract all data from BookTable', async ({ page }) => {
  // Navigate to the test automation practice website
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Locate the table with name="BookTable"
  const table = page.locator('table[name="BookTable"]');

  // Verify the table exists
  await expect(table).toBeVisible();

  // Get all rows including the header
  const rows = table.locator('tbody tr');

  // Get the count of rows
  const rowCount = await rows.count();
  console.log(`Total rows in table: ${rowCount}`);

  // Array to store table data
  const tableData: { BookName: string; Author: string; Subject: string; Price: string }[] = [];

  // Iterate through each row, starting from index 1 to skip the header
  for (let i = 1; i < rowCount; i++) {
    const row = rows.nth(i);
    const cells = row.locator('td');

    // Extract cell data
    const bookName = await cells.nth(0).textContent() || '';
    const author = await cells.nth(1).textContent() || '';
    const subject = await cells.nth(2).textContent() || '';
    const price = await cells.nth(3).textContent() || '';

    // Store the row data
    tableData.push({ BookName: bookName, Author: author, Subject: subject, Price: price });

    // Log each row's data
    console.log(`Row ${i}: BookName: ${bookName}, Author: ${author}, Subject: ${subject}, Price: ${price}`);
  }
});


// 3 C's - 
// Context
// Contraints - 
// Clarity - 
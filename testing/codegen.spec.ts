// To open a codegen - "npx playwright codegen urlToNavigate"

import { test, expect } from '@playwright/test';

test('test', async ({ page }) =>{
  await page.goto('https://demo.automationtesting.in/Windows.html');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'click' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Downloads' }).click();
  await expect(page1.getByRole('heading', { name: 'Selenium Clients and' })).toBeVisible();
  await page.getByRole('link', { name: 'Home' }).click();
  await expect(page.getByRole('textbox', { name: 'Email id for Sign Up' })).toBeVisible();
});


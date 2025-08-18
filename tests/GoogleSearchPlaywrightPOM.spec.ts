import { test } from '@playwright/test';
import { GooglePage } from '../pages/GooglePage';

test('Google search for Playwright displays results (POM)', async ({ page }) => {
  const google = new GooglePage(page);
  await google.goto();
  await google.acceptCookiesIfPresent();
  await google.searchFor('Playwright');
  await google.validatePlaywrightInResults();
});

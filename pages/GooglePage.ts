import { Page, Locator, expect } from '@playwright/test';

export class GooglePage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByRole('combobox', { name: /search/i });
    this.searchButton = page.getByRole('button', { name: /search/i });
  }

  async goto() {
    await this.page.goto('https://google.com');
  }

  async acceptCookiesIfPresent() {
    const acceptButton = this.page.locator('button', { hasText: /accept|agree|consent/i });
    if (await acceptButton.isVisible().catch(() => false)) {
      await acceptButton.click();
    }
  }

  async searchFor(term: string) {
    await this.searchBox.fill(term);
    await this.searchBox.press('Enter');
  }

  async isResultVisible(text: string) {
    await this.page.waitForSelector(`text=${text}`, { timeout: 10000 });
    return await this.page.locator(`text=${text}`).first().isVisible();
  }

  async validatePlaywrightInResults() {
    const visible = await this.isResultVisible('Playwright');
    expect(visible).toBeTruthy();
  }
}

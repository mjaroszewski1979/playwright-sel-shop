import { Page, expect } from '@playwright/test';

export class KoszykPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async isTitleMatches(): Promise<boolean> {
    try {
      await expect(this.page).toHaveTitle('Koszyk – Selenium Shop Automatyzacja Testów');
      return true;
    } catch {
      return false;
    }
  }
    
    async isFirstProductLinkDisplayed(): Promise<boolean> {
    try {
      await expect(
      this.page.getByRole('link', { name: 'Piłka nożna KIPSTA F100', exact: true })
      ).toBeVisible();
      return true;
    } catch {
      return false;
    }
  }
}
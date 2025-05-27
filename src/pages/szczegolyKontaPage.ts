import { Page, expect, Locator } from '@playwright/test';

export class SzczegolyKontaPage {
    readonly page: Page;

    // Locators
    readonly singleOrderRow: Locator;

    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.singleOrderRow = page.locator('tr.woocommerce-orders-table__row.woocommerce-orders-table__row--status-on-hold.order');
    }

    async isUrlMatches(): Promise<boolean> {
    try {
      const currentUrl = this.page.url();
      expect(currentUrl).toBe('http://www.selenium-shop.pl/moje-konto/edit-account/');
      return true;
    } catch {
      return false;
    }
  }
}
import { Page, expect, Locator } from '@playwright/test';

export class ZamowieniaPage {
    readonly page: Page;

    // Locators
    readonly singleOrderRow: Locator;
    readonly ordersTableHeaderSpan: Locator;



    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.singleOrderRow = page.locator('tr.woocommerce-orders-table__row.woocommerce-orders-table__row--status-on-hold.order');
        this.ordersTableHeaderSpan = page.locator('span.nobr');



    }

    async isUrlMatches(): Promise<boolean> {
    try {
      const currentUrl = this.page.url();
      expect(currentUrl).toBe('http://www.selenium-shop.pl/moje-konto/orders/');
      return true;
    } catch {
      return false;
    }
  }

    async isNumberOfOrdersMatches(): Promise<boolean> {
    try {
      await expect(this.singleOrderRow).toHaveCount(10);
      return true;
    } catch {
      return false;
    }
  }

  async isTextOfTableHeadersCorrect(): Promise<boolean> {

    const expectedTexts = [
      'Zamówienie',
      'Data',
      'Status',
      'Suma',
      'Działania'
    ];

    try {
      for (let i = 0; i < expectedTexts.length; i++) {
        await expect(this.ordersTableHeaderSpan.nth(i)).toHaveText(expectedTexts[i]);
      }
      return true;
    } catch {
      return false;
    }
  }

}
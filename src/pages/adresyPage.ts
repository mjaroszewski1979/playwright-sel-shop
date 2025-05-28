import { Page, expect, Locator } from '@playwright/test';

export class AdresyPage {
    readonly page: Page;

    // Locators
    readonly productDescriptionH2: Locator;

    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.productDescriptionH2 = page.locator('h2.woocommerce-loop-product__title');
    }

    

    async isUrlMatches(): Promise<boolean> {
    try {
      const currentUrl = this.page.url();
      expect(currentUrl).toBe('http://www.selenium-shop.pl/moje-konto/edit-address/');
      return true;
    } catch {
      return false;
    }
    }
}
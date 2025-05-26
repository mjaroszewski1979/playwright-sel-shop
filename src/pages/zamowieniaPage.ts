import { Page, expect, Locator } from '@playwright/test';

export class ZamowieniaPage {
    readonly page: Page;

    // Locators
    readonly productDescriptionH2: Locator;
    readonly productsSelectList: Locator;
    readonly productsDescriptionList: Locator;


    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.productDescriptionH2 = page.locator('h2.woocommerce-loop-product__title');
        this.productsSelectList = page.locator('select[name="orderby"]');
        this.productsDescriptionList = page.locator('li.product.type-product');


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

}
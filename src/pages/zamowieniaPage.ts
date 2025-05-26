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

    

    async isTitleMatches(): Promise<boolean> {
    try {
      await expect(this.page).toHaveTitle('Piłki – Selenium Shop Automatyzacja Testów');
      return true;
    } catch {
      return false;
    }
  }

}
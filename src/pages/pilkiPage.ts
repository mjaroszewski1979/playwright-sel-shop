import { Page, expect, Locator } from '@playwright/test';

export class PilkiPage {
    readonly page: Page;

    // Locators
    readonly productDescriptionH2: Locator;


    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.productDescriptionH2 = page.locator('h2.woocommerce-loop-product__title');

    }

    

    async isTitleMatches(): Promise<boolean> {
    try {
      await expect(this.page).toHaveTitle('Piłki – Selenium Shop Automatyzacja Testów');
      return true;
    } catch {
      return false;
    }
  }
    
   async isProductDescriptionMatchesCorrectCategory(): Promise<boolean> {
  try {
    const count = await this.productDescriptionH2.count();

    for (let i = 0; i < count; i++) {
      const element = this.productDescriptionH2.nth(i);
      await expect(element).toContainText('Piłka');
    }

    return true;
  } catch (error) {
    console.error('Błąd weryfikacji tekstów H2:', error);
    return false;
  }
}

  
}
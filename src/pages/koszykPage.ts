import { Page, expect, Locator } from '@playwright/test';

export class KoszykPage {
    readonly page: Page;

    // Locators
    readonly productLink: Locator;
    readonly quantityInput: Locator;
    readonly removeLink: Locator;
    readonly emptyCartMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.productLink = page.getByRole('link', { name: 'Piłka nożna KIPSTA F100', exact: true });
        this.quantityInput = page.locator('div.quantity input[type="number"]');
        this.removeLink = page.locator('a.remove[aria-label="Usuń produkt"]');
        this.emptyCartMessage = page.locator('p.cart-empty.woocommerce-info');
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
      await expect(this.productLink).toBeVisible();
      return true;
    } catch {
      return false;
    }
  }

    async isNumberOfProductsCorrect(): Promise<boolean> {
    try {
      const value = await this.quantityInput.getAttribute('value');
      expect(value).toBe('2');
      return true;
    } catch {
      return false;
    }
  }

  async clickRemoveProductLink(): Promise<void> {
    await this.removeLink.click();
  }

  async isRemovedProductMessageDisplayed(): Promise<boolean> {
    try {
      await expect(this.emptyCartMessage).toBeVisible();
      await expect(this.emptyCartMessage).toContainText('Twój koszyk jest pusty.');
      return true;
    } catch {
      return false;
    }
  }
}
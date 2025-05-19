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

    async isNumberOfProductsCorrect(): Promise<boolean> {
    try {
      const inputElement = this.page.locator('div.quantity input[type="number"]');
      const value = await inputElement.getAttribute('value'); 
      expect(value).toBe('2');
      return true;
    } catch {
      return false;
    }
  }

  async clickRemoveProductLink(): Promise<void> {
    const removeProductLink = this.page.locator('a.remove[aria-label="Usuń produkt"]');
    removeProductLink.click();
  }

  async isRemovedProductMessageDisplayed(): Promise<boolean> {
    try {
      const emptyCartMessage = this.page.locator('p.cart-empty.woocommerce-info');
      await expect(emptyCartMessage).toBeVisible();
      await expect(emptyCartMessage).toContainText('Twój koszyk jest pusty.');
      return true;
    } catch {
      return false;
    }
  }
}
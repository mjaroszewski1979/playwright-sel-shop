import { Page, expect, Locator } from '@playwright/test';

export class FirstProductPage {
    readonly page: Page;

    // Locators
    readonly goToBasketButton: Locator;
    readonly viewBasketLink: Locator;
    readonly quantityInput: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.goToBasketButton = page.locator('button[name="add-to-cart"]', { hasText: 'Dodaj do koszyka' });
        this.viewBasketLink = page.locator('a', { hasText: 'Zobacz koszyk' });
        this.quantityInput = page.locator('input[name="quantity"]');
        this.successMessage = page.locator('div.woocommerce-message', { hasText: 'Piłka nożna KIPSTA F100' })
    }

    async isTitleMatches(): Promise<boolean> {
    try {
      await expect(this.page).toHaveTitle('Piłka nożna KIPSTA F100 – Selenium Shop Automatyzacja Testów');
      return true;
    } catch {
      return false;
    }
  }

  async clickGoToBasketButton(): Promise<void> {
    await this.goToBasketButton.click();
  }

  async clickViewBasketLink(): Promise<void> {
    await this.viewBasketLink.click();
  }

  async fillNumberOfProducts(): Promise<void> {
    await expect(this.quantityInput).toBeVisible();
    await this.quantityInput.fill('');        
    await this.quantityInput.type('2');
  }

  async isAddedToBasketMessageDisplayed(): Promise<boolean> {
    try {
      await expect(this.successMessage).toBeVisible();
      return true;
    } catch {
      return false;
    }
  }

}
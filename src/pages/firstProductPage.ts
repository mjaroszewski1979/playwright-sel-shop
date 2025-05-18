import { Page, expect } from '@playwright/test';

export class FirstProductPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
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
    const goToBasketButton = this.page.locator('button[name="add-to-cart"]', { hasText: 'Dodaj do koszyka' });
    await goToBasketButton.click();
  }

  async isAddedToBasketMessageDisplayed(): Promise<boolean> {
    try {
      await expect(
      this.page.locator('div.woocommerce-message', { hasText: 'Piłka nożna KIPSTA F100' })
      ).toBeVisible();
      return true;
    } catch {
      return false;
    }
  }

}
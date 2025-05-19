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

  async clickViewBasketLink(): Promise<void> {
    const viewBasketLink = this.page.locator('a', { hasText: 'Zobacz koszyk' });
    await viewBasketLink.click();
  }

  async fillNumberOfProducts(): Promise<void> {
    const quantityInput = this.page.locator('input[name="quantity"]');
    await expect(quantityInput).toBeVisible();
    await quantityInput.fill('');        // wyczyść aktualną wartość
    await quantityInput.type('2');
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
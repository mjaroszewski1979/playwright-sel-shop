import { Page, expect, Locator } from '@playwright/test';

export class FirstProductPage {
    readonly page: Page;

    // Locators
    readonly goToBasketButton: Locator;
    readonly viewBasketLink: Locator;
    readonly quantityInput: Locator;
    readonly successMessage: Locator;
    readonly productTitleH1: Locator;
    readonly priceAmountPara: Locator;
    readonly productDetailsDiv: Locator;
    readonly stockAvailablePara: Locator;
    readonly productCategoryDiv: Locator;

    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.goToBasketButton = page.locator('button[name="add-to-cart"]', { hasText: 'Dodaj do koszyka' });
        this.viewBasketLink = page.locator('a', { hasText: 'Zobacz koszyk' });
        this.quantityInput = page.locator('input[name="quantity"]');
        this.successMessage = page.locator('div.woocommerce-message', { hasText: 'Piłka nożna KIPSTA F100' });
        this.productTitleH1 = page.locator('h1.product_title');
        this.priceAmountPara = page.locator('p.price');
        this.productDetailsDiv = page.locator('div.woocommerce-product-details__short-description');
        this.stockAvailablePara = page.locator('p.stock.available-on-backorder');
        this.productCategoryDiv = page.locator('div.product_meta');
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

  async isElementVisibleWithText(locatorName: Locator, expectedText: string): Promise<boolean> {
  try {
    await expect(locatorName).toBeVisible();
    await expect(locatorName).toHaveText(expectedText);
    return true;
  } catch {
    return false;
  }
}

async isProductSectionDisplayedCorrectly(): Promise<boolean> {
  try {
    const titleCorrect = await this.isElementVisibleWithText(this.productTitleH1, 'Piłka nożna KIPSTA F100');
    const priceCorrect = await this.isElementVisibleWithText(this.priceAmountPara, '2,00 zł');
    const detailsCorrect = await this.isElementVisibleWithText(this.productDetailsDiv, 'Piłka nożna Adidas Replika Liga Mistrzów rozmiar 5');
    const stockCorrect = await this.isElementVisibleWithText(this.stockAvailablePara, 'Produkt dostępny na zamówienie');
    const cartCorrect = await this.isElementVisibleWithText(this.goToBasketButton, 'Dodaj do koszyka');
    const categoryCorrect = await this.isElementVisibleWithText(this.productCategoryDiv, 'Kategoria: Piłki');

    return titleCorrect && priceCorrect && detailsCorrect && stockCorrect && cartCorrect && categoryCorrect;
  } catch {
    return false;
  }
}



}
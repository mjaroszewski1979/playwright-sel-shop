import { Page, expect, Locator } from '@playwright/test';
import { isElementVisibleWithText } from '../utils/assertions';

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
    readonly pilkiCategoryLink: Locator;
    readonly ratingCountSpan: Locator;
    readonly ratingLink: Locator;
    readonly ratingCommentDiv: Locator;

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
        this.pilkiCategoryLink = page.locator('a', { hasText: 'Piłki' }).nth(1);
        this.ratingCountSpan = page.locator('span.count');
        this.ratingLink = page.locator('a.woocommerce-review-link');
        this.ratingCommentDiv = page.locator('div.comment_container');
    }

    async isTitleMatches(): Promise<boolean> {
    try {
      await expect(this.page).toHaveTitle('Piłka nożna KIPSTA F100 – Selenium Shop Automatyzacja Testów');
      return true;
    } catch {
      return false;
    }
  }

  async clickViewBasketLink(): Promise<void> {
    await this.viewBasketLink.click();
  }

  async clickPilkiCategoryLink(): Promise<void> {
    await this.pilkiCategoryLink.click();
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


async isProductSectionDisplayedCorrectly(): Promise<boolean> {
  try {
    const titleCorrect = await isElementVisibleWithText(this.productTitleH1, 'Piłka nożna KIPSTA F100');
    const priceCorrect = await isElementVisibleWithText(this.priceAmountPara, '2,00 zł');
    const detailsCorrect = await isElementVisibleWithText(this.productDetailsDiv, 'Piłka nożna Adidas Replika Liga Mistrzów rozmiar 5');
    const stockCorrect = await isElementVisibleWithText(this.stockAvailablePara, 'Produkt dostępny na zamówienie');
    const cartCorrect = await isElementVisibleWithText(this.goToBasketButton, 'Dodaj do koszyka');
    const categoryCorrect = await isElementVisibleWithText(this.productCategoryDiv, 'Kategoria: Piłki');

    return titleCorrect && priceCorrect && detailsCorrect && stockCorrect && cartCorrect && categoryCorrect;
  } catch {
    return false;
  }
}

async isRatingCountMatches(): Promise<boolean> {
  try {
    const ratingCount = await this.ratingCountSpan.innerText();
    const ratingCommentCount = (await this.ratingCommentDiv.count()).toString();
    expect(ratingCount).toEqual(ratingCommentCount);
    
    return true;
  } catch {
    return false;
  }
}



}
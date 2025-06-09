import { Page, expect, Locator } from '@playwright/test';
import { isElementVisibleWithText } from '../utils/assertions';
import { clickElement } from '../utils/actions';

/**
 * Page Object Model for the "First Product" details page
 * (Piłka nożna KIPSTA F100).
 */
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

    /**
   * Constructor for FirstProductPage.
   * @param page - Playwright Page instance.
   */
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

  /**
 * Verifies that the title of the product page matches the expected title.
 */
  async isTitleMatches(): Promise<boolean> {
  try {
    await expect(this.page).toHaveTitle('Piłka nożna KIPSTA F100 – Selenium Shop Automatyzacja Testów');
    return true;
  } catch {
    return false;
  }
}

/**
 * Clicks the "Dodaj do koszyka" button.
 */
async clickGoToBasketButton(): Promise<void> {
  await clickElement(this.goToBasketButton);
}

/**
 * Clicks the "Zobacz koszyk" link.
 */
async clickViewBasketLink(): Promise<void> {
  await clickElement(this.viewBasketLink);
}

/**
 * Clicks the category link for "Piłki".
 */
async clickPilkiCategoryLink(): Promise<void> {
  await clickElement(this.pilkiCategoryLink);
}

/**
 * Clicks the link to open the product rating section.
 */
async clickRatingLink(): Promise<void> {
  await clickElement(this.ratingLink);
}

/**
 * Sets the product quantity input to "2".
 */
async fillNumberOfProducts(): Promise<void> {
  await expect(this.quantityInput).toBeVisible();
  await this.quantityInput.fill('');        
  await this.quantityInput.type('2');
}

/**
 * Checks if the success message confirming the item was added to the basket is visible.
 */
async isAddedToBasketMessageDisplayed(): Promise<boolean> {
  try {
    await expect(this.successMessage).toBeVisible();
    return true;
  } catch {
    return false;
  }
}

/**
* Validates that key product page sections and elements are displayed with the expected text.
*/
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

/**
* Compares the rating count label with the actual number of rating comments.
*/
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
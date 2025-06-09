import { Page, expect, Locator } from '@playwright/test';
import { isUrlMatches } from '../utils/urlUtils';
import { clickElement } from '../utils/actions';

/**
 * Page Object Model for the "Koszyk" (Cart) page.
 */
export class KoszykPage {
  readonly page: Page;

  // Locators
  readonly productFirstLink: Locator;
  readonly productSecondLink: Locator;
  readonly quantityInput: Locator;
  readonly removeLink: Locator;
  readonly emptyCartMessage: Locator;
  readonly inputQantityUpdate: Locator;
  readonly totalPriceAmount: Locator;
  readonly buttonUpdateBasket: Locator;

  /**
   * Constructor for KoszykPage.
   * @param page - Playwright Page instance.
   */
  constructor(page: Page) {
    this.page = page;

    // Locators initialization
    this.productFirstLink = page.getByRole('link', {
      name: 'Piłka nożna KIPSTA F100',
      exact: true,
    });
    this.productSecondLink = page.getByRole('link', {
      name: 'Piłka nożna Adidas Replika Liga Mistrzów',
      exact: true,
    });
    this.quantityInput = page.locator('div.quantity input[type="number"]');
    this.removeLink = page.locator('a.remove[aria-label="Usuń produkt"]');
    this.emptyCartMessage = page.locator('p.cart-empty.woocommerce-info');
    this.inputQantityUpdate = page.locator('input.qty');
    this.totalPriceAmount = page.locator('span.woocommerce-Price-amount').nth(1);
    this.buttonUpdateBasket = page.locator('button[name="update_cart"]', {
      hasText: 'Zaktualizuj koszyk',
    });
  }

  /**
   * Verifies that the cart page title matches the expected value.
   */
  async isTitleMatches(): Promise<boolean> {
    try {
      await expect(this.page).toHaveTitle('Koszyk – Selenium Shop Automatyzacja Testów');
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Verifies that the user is on the correct cart page URL.
   */
  async verifyUserIsOnKoszykPage(): Promise<boolean> {
    return await isUrlMatches(this.page, 'http://www.selenium-shop.pl/koszyk/');
  }

  /**
   * Checks if the first product link is visible in the cart.
   */
  async isFirstProductLinkDisplayed(): Promise<boolean> {
    try {
      await expect(this.productFirstLink).toBeVisible();
      return true;
    } catch {
      return false;
    }
  }
  /**
   * Checks if the second product link is visible in the cart.
   */
  async isSecondProductLinkDisplayed(): Promise<boolean> {
    try {
      await expect(this.productSecondLink).toBeVisible();
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Checks if the number of products in the cart is correct (expected: 2).
   */
  async isNumberOfProductsCorrect(): Promise<boolean> {
    try {
      const value = await this.quantityInput.getAttribute('value');
      expect(value).toBe('2');
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Removes a product from the cart by clicking the "remove" link.
   */
  async clickRemoveProductLink(): Promise<void> {
    await clickElement(this.removeLink);
  }

  /**
   * Verifies that the "empty cart" message is displayed after removal.
   */
  async isRemovedProductMessageDisplayed(): Promise<boolean> {
    try {
      await expect(this.emptyCartMessage).toBeVisible();
      await expect(this.emptyCartMessage).toContainText('Twój koszyk jest pusty.');
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Clicks the "Zaktualizuj koszyk" (Update Cart) button.
   */
  async clickUpdateBasketButton(): Promise<void> {
    await clickElement(this.buttonUpdateBasket);
  }

  /**
   * Updates the product quantity to "2" and updates the cart.
   */
  async updateBasketQuantity(): Promise<void> {
    await expect(this.inputQantityUpdate).toBeVisible();
    await this.inputQantityUpdate.fill('');
    await this.inputQantityUpdate.type('2');
    this.clickUpdateBasketButton();
  }

  /**
   * Validates that the total price after quantity update is correct.
   */
  async isUpdatedTotalAmountCorrect(): Promise<boolean> {
    try {
      await expect(this.totalPriceAmount).toBeVisible();
      await expect(this.totalPriceAmount).toContainText('4,00');
      return true;
    } catch {
      return false;
    }
  }
}

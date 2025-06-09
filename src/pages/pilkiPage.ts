import { Page, expect, Locator } from '@playwright/test';
import { isUrlMatches } from '../utils/urlUtils';

/**
 * Page Object Model for the "Piłki" (Balls) category page in the Selenium Shop.
 */
export class PilkiPage {
    readonly page: Page;

    // Locators
    readonly productDescriptionH2: Locator;
    readonly productsSelectList: Locator;
    readonly productsDescriptionList: Locator;


    /**
   * Constructor for PilkiPage.
   * @param page - Playwright Page instance.
   */
    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.productDescriptionH2 = page.locator('h2.woocommerce-loop-product__title');
        this.productsSelectList = page.locator('select[name="orderby"]');
        this.productsDescriptionList = page.locator('li.product.type-product');


    }

    /**
   * Verifies if the user is currently on the "Piłki" category page.
   * @returns true if the URL matches the expected Piłki page, false otherwise.
   */
     async verifyUserIsOnPilkiPage(): Promise<boolean> {
          
            return await isUrlMatches(this.page, 'http://www.selenium-shop.pl/kategoria-produktu/pilki/');
            }

    /**
   * Checks if the page title matches the expected title for the "Piłki" page.
   * @returns true if the title matches, false otherwise.
   */
    async isTitleMatches(): Promise<boolean> {
    try {
      await expect(this.page).toHaveTitle('Piłki – Selenium Shop Automatyzacja Testów');
      return true;
    } catch {
      return false;
    }
  }
    
  /**
   * Validates that all product titles on the page include the word "Piłka".
   * @returns true if all titles match the expected category, false otherwise.
   */
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

/**
   * Selects the "Sort by price: low to high" option from the sorting dropdown.
   */
async selectAscendingOrderOption(): Promise<void> {
    await this.productsSelectList.selectOption('price');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Retrieves the list of prices from visible product elements.
   * @returns An array of price values as numbers.
   */
async getListOfPriceValues(): Promise<number[]> {
    const productCount = await this.productsDescriptionList.count();

    const prices: number[] = [];

    for (let i = 0; i < productCount; i++) {
      const priceSpan = this.productsDescriptionList.nth(i).locator('span.woocommerce-Price-amount.amount');
      const priceText = await priceSpan.textContent();

      if (!priceText) {
        throw new Error(`Brak tekstu ceny dla produktu nr ${i + 1}`);
      }

      const priceValue = parseFloat(priceText);

      if (isNaN(priceValue)) {
        throw new Error(`Nieprawidłowa wartość ceny: "${priceText}"`);
      }

      prices.push(priceValue);

    }
    return prices;
  }

  /**
   * Verifies if the product prices are sorted correctly from lowest to highest.
   * @returns true if sorting is correct, false otherwise.
   */
  async isSortingProductsByPriceWorksCorrectly(): Promise<boolean> {
    const prices = await this.getListOfPriceValues();
    const sortedPrices = [...prices].sort((a, b) => a - b);
    const isSorted = prices.every((val, i) => val === sortedPrices[i]);
    try {
      expect(isSorted).toBe(true);
      return true;
    } catch {
      return false;
    }
  }
  
}
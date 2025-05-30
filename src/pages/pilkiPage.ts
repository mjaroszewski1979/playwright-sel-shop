import { Page, expect, Locator } from '@playwright/test';
import { isUrlMatches } from '../utils/urlUtils';

export class PilkiPage {
    readonly page: Page;

    // Locators
    readonly productDescriptionH2: Locator;
    readonly productsSelectList: Locator;
    readonly productsDescriptionList: Locator;


    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.productDescriptionH2 = page.locator('h2.woocommerce-loop-product__title');
        this.productsSelectList = page.locator('select[name="orderby"]');
        this.productsDescriptionList = page.locator('li.product.type-product');


    }

     async verifyUserIsOnPilkiPage(): Promise<boolean> {
          
            return await isUrlMatches(this.page, 'http://www.selenium-shop.pl/kategoria-produktu/pilki/');
            }

    

    async isTitleMatches(): Promise<boolean> {
    try {
      await expect(this.page).toHaveTitle('Piłki – Selenium Shop Automatyzacja Testów');
      return true;
    } catch {
      return false;
    }
  }
    
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

async selectAscendingOrderOption(): Promise<void> {
    await this.productsSelectList.selectOption('price');
    await this.page.waitForLoadState('networkidle');
  }

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
import { Page, expect, Locator } from '@playwright/test';
import { isUrlMatches } from '../utils/urlUtils';

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

    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.productFirstLink = page.getByRole('link', { name: 'Piłka nożna KIPSTA F100', exact: true });
        this.productSecondLink = page.getByRole('link', { name: 'Piłka nożna Adidas Replika Liga Mistrzów', exact: true });
        this.quantityInput = page.locator('div.quantity input[type="number"]');
        this.removeLink = page.locator('a.remove[aria-label="Usuń produkt"]');
        this.emptyCartMessage = page.locator('p.cart-empty.woocommerce-info');
        this.inputQantityUpdate = page.locator('input.qty');
        this.totalPriceAmount = page.locator('span.woocommerce-Price-amount').nth(1);
        this.buttonUpdateBasket = page.locator('button[name="update_cart"]', { hasText: 'Zaktualizuj koszyk' })
    }

    

    async isTitleMatches(): Promise<boolean> {
    try {
      await expect(this.page).toHaveTitle('Koszyk – Selenium Shop Automatyzacja Testów');
      return true;
    } catch {
      return false;
    }
  }

   async verifyUserIsOnKoszykPage(): Promise<boolean> {
        
          return await isUrlMatches(this.page, 'http://www.selenium-shop.pl/koszyk/');
          }
    
    async isFirstProductLinkDisplayed(): Promise<boolean> {
    try {
      await expect(this.productFirstLink).toBeVisible();
      return true;
    } catch {
      return false;
    }
  }
    async isSecondProductLinkDisplayed(): Promise<boolean> {
    try {
      await expect(this.productSecondLink).toBeVisible();
      return true;
    } catch {
      return false;
    }
  }

    async isNumberOfProductsCorrect(): Promise<boolean> {
    try {
      const value = await this.quantityInput.getAttribute('value');
      expect(value).toBe('2');
      return true;
    } catch {
      return false;
    }
  }

  async clickRemoveProductLink(): Promise<void> {
    await this.removeLink.click();
  }

  async isRemovedProductMessageDisplayed(): Promise<boolean> {
    try {
      await expect(this.emptyCartMessage).toBeVisible();
      await expect(this.emptyCartMessage).toContainText('Twój koszyk jest pusty.');
      return true;
    } catch {
      return false;
    }
  }

  async clickUpdateBasketButton(): Promise<void> {
    await this.buttonUpdateBasket.click();
  }

  async updateBasketQuantity(): Promise<void> {
    await expect(this.inputQantityUpdate).toBeVisible();
    await this.inputQantityUpdate.fill('');        
    await this.inputQantityUpdate.type('2');
    this.clickUpdateBasketButton();
  }

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
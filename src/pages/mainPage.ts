import { Page, expect, Locator } from '@playwright/test';
import { config } from '../utils/config';

export class MainPage {
  readonly page: Page;

  // Lokatory
  readonly menuItems: Locator;
  readonly menuLinks: Locator;
  readonly productItems: Locator;
  readonly firstProductLink: Locator;
  readonly ankietaMenu: Locator;
  readonly mojeKontoMenu: Locator;
  readonly koszykMenu: Locator;
  readonly divFirstProduct: Locator;
  readonly divSecondProduct: Locator;
  readonly addToCartFirstButton: Locator;
  readonly addToCartSecondButton: Locator;
  readonly viewBasketButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.menuItems = page.locator('ul#menu-menu-1 li.menu-item-type-post_type');
    this.menuLinks = page.locator('ul#menu-menu-1 li.menu-item > a');
    this.productItems = page.locator('div.shop-item');
    this.firstProductLink = page.getByRole('link', { name: 'Piłka nożna KIPSTA F100', exact: true });
    this.ankietaMenu = page.locator('li#menu-item-134 a', { hasText: 'Ankieta' });
    this.mojeKontoMenu = page.locator('li#menu-item-136 a', { hasText: 'Moje konto' });
    this.koszykMenu = page.locator('li#menu-item-135 a', { hasText: 'Koszyk' });
    this.divFirstProduct = page.locator('div.shop-item').nth(0);
    this.divSecondProduct = page.locator('div.shop-item').nth(1);
    this.addToCartFirstButton = page.locator('a[data-product_id="54"]');
    this.addToCartSecondButton = page.locator('a[data-product_id="51"]');
    this.viewBasketButton = page.locator('a[title="Zobacz koszyk"]');
  }

  async goto(): Promise<void> {
    await this.page.goto(config.baseUrl);
  }

  async isTitleMatches(): Promise<boolean> {

    try {
      await expect(this.page).toHaveTitle('Selenium Shop Automatyzacja Testów');
      return true;
    } catch {
      return false;
    }
  }

  async isNumberOfMenuItemsCorrect(): Promise<boolean> {

    try {
      await expect(this.menuItems).toHaveCount(6);
      return true;
    } catch {
      return false;
    }
  }

  async isTextOfMenuItemsCorrect(): Promise<boolean> {

    const expectedTexts = [
      'Strona główna',
      'Ankieta',
      'Koszyk',
      'Moje konto',
      'Sklep',
      'Zamówienie'
    ];

    try {
      for (let i = 0; i < expectedTexts.length; i++) {
        await expect(this.menuLinks.nth(i)).toHaveText(expectedTexts[i]);
      }
      return true;
    } catch {
      return false;
    }
  }

  async isNumberOfProductItemsCorrect(): Promise<boolean> {

    try {
      await expect(this.productItems).toHaveCount(8);
      return true;
    } catch {
      return false;
    }
  }

  async clickFirstProductAddToCartButton(): Promise<void> {
    await this.divFirstProduct.hover();
    await this.addToCartFirstButton.click();
  }

  async clickSecondProductAddToCartButton(): Promise<void> {
    await this.divSecondProduct.hover();
    await this.addToCartSecondButton.click();
  }

  async clickFirstProductViewCartButton(): Promise<void> {
    await this.divFirstProduct.hover();
    await this.viewBasketButton.click();
  }

  async clickFirstProductLink(): Promise<void> {
    await this.firstProductLink.click();
  }

  async gotoAnkietaPage(): Promise<void> {
    await this.ankietaMenu.click();
  }

  async gotoMojeKontoPage(): Promise<void> {
    await this.mojeKontoMenu.click();
  }

  async gotoKoszykPage(): Promise<void> {
    await this.koszykMenu.click();
  }

  async gotoKoszykPageScroll(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, 0));
    await this.koszykMenu.click();
  }



}

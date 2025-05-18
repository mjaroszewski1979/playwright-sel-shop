import { Page, expect } from '@playwright/test';
import { config } from '../utils/config';

export class MainPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
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
    const menuItems = this.page.locator('ul#menu-menu-1 li.menu-item-type-post_type');

    try {
      await expect(menuItems).toHaveCount(6);
      return true;
    } catch {
      return false;
    }
  }

  async isTextOfMenuItemsCorrect(): Promise<boolean> {
    const menuLinks = this.page.locator('ul#menu-menu-1 li.menu-item > a');

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
        await expect(menuLinks.nth(i)).toHaveText(expectedTexts[i]);
      }
      return true;
    } catch {
      return false;
    }
  }

  async isNumberOfProductItemsCorrect(): Promise<boolean> {
    const productItems = this.page.locator('div.shop-item');

    try {
      await expect(productItems).toHaveCount(8);
      return true;
    } catch {
      return false;
    }
  }

  async clickFirstProductLink(): Promise<void> {
    const firstProductLink = this.page.locator('a', { hasText: 'Piłka nożna KIPSTA F100' });
    await firstProductLink.click();
  }



  async gotoAnkietaPage(): Promise<void> {
    const ankietaMenu = this.page.locator('li#menu-item-134 a', { hasText: 'Ankieta' });
    await ankietaMenu.click();
  }

  async gotoMojeKontoPage(): Promise<void> {
    const mojeKontoMenu = this.page.locator('li#menu-item-136 a', { hasText: 'Moje konto' });
    await mojeKontoMenu.click();
  }

  async gotoKoszykPage(): Promise<void> {
    const mojeKontoMenu = this.page.locator('li#menu-item-135 a', { hasText: 'Koszyk' });
    await mojeKontoMenu.click();
  }
}

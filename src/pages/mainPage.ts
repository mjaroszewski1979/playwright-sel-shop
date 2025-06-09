import { Page, expect, Locator } from '@playwright/test';
import { config } from '../utils/config';
import { clickElement, hoverClickElement, scrollClickElement } from '../utils/actions';

/**
 * Page Object Model representing the main page of the Selenium Shop.
 */
export class MainPage {
  readonly page: Page;

  // Locators
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

  /**
   * Constructor for MainPage.
   * @param page - Playwright Page instance.
   */
  constructor(page: Page) {
    this.page = page;

    // Locators initialization
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

  /**
   * Navigates to the main page using the configured base URL.
   */
  async goto(): Promise<void> {
    await this.page.goto(config.baseUrl);
  }

  /**
   * Verifies if the page title matches the expected value.
   * @returns true if the title matches, false otherwise
   */
  async isTitleMatches(): Promise<boolean> {

    try {
      await expect(this.page).toHaveTitle('Selenium Shop Automatyzacja Testów');
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Checks whether the number of menu items is correct.
   * @returns true if the count is correct, false otherwise
   */
  async isNumberOfMenuItemsCorrect(): Promise<boolean> {

    try {
      await expect(this.menuItems).toHaveCount(6);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Verifies that each menu item contains the expected text.
   * @returns true if all texts match, false otherwise
   */
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

  /**
   * Checks whether the correct number of products is displayed on the homepage.
   * @returns true if product count is correct, false otherwise
   */
  async isNumberOfProductItemsCorrect(): Promise<boolean> {

    try {
      await expect(this.productItems).toHaveCount(8);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Clicks the "Add to Cart" button for the first product.
   */
  async clickFirstProductAddToCartButton(): Promise<void> {
    await hoverClickElement(this.divFirstProduct, this.addToCartFirstButton);
  }

  /**
   * Clicks the "Add to Cart" button for the second product.
   */
  async clickSecondProductAddToCartButton(): Promise<void> {
    await hoverClickElement(this.divSecondProduct, this.addToCartSecondButton);
  }

  /**
   * Clicks the "View Basket" button after hovering over the first product.
   */
  async clickFirstProductViewCartButton(): Promise<void> {
    await hoverClickElement(this.divFirstProduct, this.viewBasketButton);
  }

  /**
   * Clicks the link to navigate to the product detail page of the first product.
   */
  async clickFirstProductLink(): Promise<void> {
    await clickElement(this.firstProductLink);
  }

  /**
   * Navigates to the "Ankieta" (Survey) page via the menu.
   */
  async gotoAnkietaPage(): Promise<void> {
    await clickElement(this.ankietaMenu);
  }

  /**
   * Navigates to the "Moje Konto" (My Account) page via the menu.
   */
  async gotoMojeKontoPage(): Promise<void> {
    await clickElement(this.mojeKontoMenu);
  }

  /**
   * Navigates to the "Koszyk" (Cart) page via the menu.
   */
  async gotoKoszykPage(): Promise<void> {
    await clickElement(this.koszykMenu);
  }

  /**
   * Navigates to the "Koszyk" (Cart) page using scroll and click (in case the menu is not fully visible).
   */
  async gotoKoszykPageScroll(): Promise<void> {
    await scrollClickElement(this.koszykMenu, this.page);
  }
  
}

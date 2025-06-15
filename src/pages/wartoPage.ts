import { Page, expect, Locator } from '@playwright/test';
import { isUrlMatches } from '../utils/urlUtils';

/**
 * Page Object Model for the "Koszyk" (Cart) page.
 */
export class WartoPage {
  readonly page: Page;

  // Locators

  /**
   * Constructor for WartoPage.
   * @param page - Playwright Page instance.
   */
  constructor(page: Page) {
    this.page = page;

    // Locators initialization
  }

  /**
   * Verifies that the warto page title matches the expected value.
   */
  async isTitleMatches(): Promise<boolean> {
    try {
      await expect(this.page).toHaveTitle(
        'Warto wykonywać testy automatyczne – Selenium Shop Automatyzacja Testów'
      );
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
}

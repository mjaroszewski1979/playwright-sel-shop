import { Page, expect } from '@playwright/test';
import { isUrlMatches } from '../utils/urlUtils';

/**
 * Page Object Model class for the "Ankieta" (Survey) page.
 * Encapsulates verification logic for title and URL.
 */
export class AnkietaPage {
  readonly page: Page;

  /**
   * Constructor for AnkietaPage.
   * @param page - Playwright Page instance.
   */
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Verifies that the page title matches the expected title for the Ankieta page.
   * @returns True if title matches, otherwise false.
   */
  async isTitleMatches(): Promise<boolean> {
    // Sprawdzenie tytułu przez oczekiwanie – jeśli nie pasuje, rzuci wyjątek
    try {
      await expect(this.page).toHaveTitle('Ankieta – Selenium Shop Automatyzacja Testów');
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Verifies that the current page URL matches the expected URL for the Ankieta page.
   * @returns True if URL matches, otherwise false.
   */
  async verifyUserIsOnAnkietaPage(): Promise<boolean> {
    return await isUrlMatches(this.page, 'http://www.selenium-shop.pl/o-nas/');
  }
}

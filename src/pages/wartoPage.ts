import { Page, expect, Locator } from '@playwright/test';
import { isUrlMatches } from '../utils/urlUtils';
import { clickElement } from '../utils/actions';

/**
 * Page Object Model for the "Koszyk" (Cart) page.
 */
export class WartoPage {
  readonly page: Page;

  // Locators
  readonly buttonCloseWindow: Locator;
  readonly inputFirstLastName: Locator;
  /**
   * Constructor for WartoPage.
   * @param page - Playwright Page instance.
   */
  constructor(page: Page) {
    this.page = page;

    // Locators initialization
    this.buttonCloseWindow = page.locator('input[type="button"]', {
      hasText: 'Zamknij okno przeglądarki',
    });
    this.inputFirstLastName = page.locator('#imie_nazwisko');
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
  async verifyUserIsOnWartoPage(): Promise<boolean> {
    return await isUrlMatches(
      this.page,
      'http://www.selenium-shop.pl/warto-wykonywac-testy-automatyczne/'
    );
  }

  private async clickButtonCloseWindow(): Promise<void> {
    await clickElement(this.buttonCloseWindow);
  }

  private async fillFirstLastNameInput(): Promise<void> {
    await this.inputFirstLastName.fill('');
    await this.inputFirstLastName.type('Jan Kowalski');
    await this.clickButtonCloseWindow();
  }

  async isWindowClosedAfterClickButton(): Promise<boolean> {
    try {
      await this.fillFirstLastNameInput();
      const context = this.page.context();
      const expectedPagesCount = context.pages().length;
      expect(expectedPagesCount).toBe(1);
      return true;
    } catch (error) {
      console.error('Close window click button failed:', error);
      return false;
    }
  }
}

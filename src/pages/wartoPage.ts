import { Page, expect, Locator } from '@playwright/test';
import { isUrlMatches } from '../utils/urlUtils';
import { clickElement } from '../utils/actions';

/**
 * Page Object Model for the "Warto" page.
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

  /**
   * Clicks the "Close Browser Window" button on the page.
   *
   * This method simulates a user clicking the button used to close the current browser window.
   * It is intended to be used internally as part of window close validation.
   */
  private async clickButtonCloseWindow(): Promise<void> {
    await clickElement(this.buttonCloseWindow);
  }

  /**
   * Fills the input field with a sample first and last name, then clicks the "Close Window" button.
   *
   * This method is used to simulate user interaction by typing a name into the designated input field
   * and then attempting to close the browser window via a button click.
   * It is intended to be used as part of window close behavior tests.
   */
  private async fillFirstLastNameInput(): Promise<void> {
    await this.inputFirstLastName.fill('');
    await this.inputFirstLastName.type('Jan Kowalski');
    await this.clickButtonCloseWindow();
  }

  /**
   * Verifies that the browser window remains open after attempting to close it via the form.
   *
   * Steps:
   * 1. Fill in the first and last name input.
   * 2. Click the "Close Window" button.
   * 3. Check that only one browser window/tab remains open.
   *
   * Expected Result:
   * The browser should not open a new window or tab after the action,
   * confirming the simulated "close" behavior was handled in the same window.
   */
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

import { Page, Locator } from '@playwright/test';
import { isElementVisibleWithCorrectValue } from '../utils/assertions';
import { isUrlMatches } from '../utils/urlUtils';

/**
 * Page Object Model for the "Account Details" page in the Selenium Shop application.
 */
export class SzczegolyKontaPage {
    readonly page: Page;

    // Locators
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly displayNameInput: Locator;
    readonly userEmailInput: Locator;

    /**
   * Constructor for SzczegolyKontaPage.
   * @param page - Playwright Page instance.
   */
    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.firstNameInput = page.locator('input#account_first_name');
        this.lastNameInput = page.locator('input#account_last_name');
        this.displayNameInput = page.locator('input#account_display_name');
        this.userEmailInput = page.locator('input#account_email');
    }

    /**
   * Verifies that the user is currently on the "Account Details" page.
   * @returns true if the current URL matches the expected one, false otherwise.
   */
    async verifyUserIsOnSzczegolyKontaPage(): Promise<boolean> {
      
      return await isUrlMatches(this.page, 'http://www.selenium-shop.pl/moje-konto/edit-account/');
      }

/**
   * Validates whether the form fields for account details are correctly populated and visible.
   * Checks the values for first name, last name, display name, and email.
   * @returns true if all fields are visible and contain the correct values, false otherwise.
   */
async isAccountDetailSectionDisplayedCorrectly(): Promise<boolean> {
  try {
    const firstNameCorrect = await isElementVisibleWithCorrectValue(this.firstNameInput, 'Jan');
    const lastNameCorrect = await isElementVisibleWithCorrectValue(this.lastNameInput, 'Testowy1');
    const displayNameCorrect = await isElementVisibleWithCorrectValue(this.displayNameInput, 'Jan Testowy1');
    const userEmailCorrect = await isElementVisibleWithCorrectValue(this.userEmailInput, 'UserTest1@op.pl');

    return firstNameCorrect && lastNameCorrect && displayNameCorrect && userEmailCorrect;
  } catch {
    return false;
  }
}
}
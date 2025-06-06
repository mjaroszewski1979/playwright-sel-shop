import { Page, Locator } from '@playwright/test';
import { isElementVisibleWithCorrectValue } from '../utils/assertions';
import { isUrlMatches } from '../utils/urlUtils';

export class SzczegolyKontaPage {
    readonly page: Page;

    // Locators
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly displayNameInput: Locator;
    readonly userEmailInput: Locator;

    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.firstNameInput = page.locator('input#account_first_name');
        this.lastNameInput = page.locator('input#account_last_name');
        this.displayNameInput = page.locator('input#account_display_name');
        this.userEmailInput = page.locator('input#account_email');
    }

    async verifyUserIsOnSzczegolyKontaPage(): Promise<boolean> {
      
      return await isUrlMatches(this.page, 'http://www.selenium-shop.pl/moje-konto/edit-account/');
      }


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
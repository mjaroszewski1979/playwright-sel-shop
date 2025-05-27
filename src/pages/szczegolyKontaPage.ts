import { Page, expect, Locator } from '@playwright/test';

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

    async isUrlMatches(): Promise<boolean> {
    try {
      const currentUrl = this.page.url();
      expect(currentUrl).toBe('http://www.selenium-shop.pl/moje-konto/edit-account/');
      return true;
    } catch {
      return false;
    }
  }
  async isElementVisibleWithCorrectValue(locatorName: Locator, expectedValue: string): Promise<boolean> {
  try {
    await expect(locatorName).toBeVisible();
    const currentValue = await locatorName.inputValue();
    await expect(currentValue).toBe(expectedValue);
    return true;
  } catch {
    return false;
  }
}

async isAccountDetailSectionDisplayedCorrectly(): Promise<boolean> {
  try {
    const firstNameCorrect = await this.isElementVisibleWithCorrectValue(this.firstNameInput, 'Jan');
    const lastNameCorrect = await this.isElementVisibleWithCorrectValue(this.lastNameInput, 'Testowy1');
    const displayNameCorrect = await this.isElementVisibleWithCorrectValue(this.displayNameInput, 'Jan Testowy1');
    const userEmailCorrect = await this.isElementVisibleWithCorrectValue(this.userEmailInput, 'UserTest1@op.pl');

    return firstNameCorrect && lastNameCorrect && displayNameCorrect && userEmailCorrect;
  } catch {
    return false;
  }
}
}
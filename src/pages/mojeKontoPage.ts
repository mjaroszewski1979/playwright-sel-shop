import { Page, expect, Locator } from '@playwright/test';
import { config } from '../utils/config';
import { isUrlMatches } from '../utils/urlUtils';
import { clickElement } from '../utils/actions';

/**
 * Page Object Model for the "Moje Konto" (My Account) page.
 */
export class MojeKontoPage {
  readonly page: Page;

  // Locators
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly pageBody: Locator;
  readonly zamowieniaLink: Locator;
  readonly szczegolyKontaLink: Locator;
  readonly logoutLink: Locator;
  readonly incorrectLoginAlert: Locator;
  readonly adresyLink: Locator;
  readonly plikiDoPobraniaLink: Locator;

  /**
   * Constructor for MojeKontoPage.
   * @param page - Playwright Page instance.
   */
  constructor(page: Page) {
    this.page = page;

    // Locators initialization
    this.usernameField = page.locator('#username');
    this.passwordField = page.locator('#password');
    this.loginButton = page.locator('button[name="login"]');
    this.pageBody = page.locator('body');
    this.zamowieniaLink = page.locator('a', { hasText: 'Zamówienia' }).first();
    this.szczegolyKontaLink = page.locator('a', { hasText: 'Szczegóły konta' }).nth(0);
    this.logoutLink = page.locator('a', { hasText: 'Wyloguj' }).nth(0);
    this.incorrectLoginAlert = page.locator('ul.woocommerce-error');
    this.adresyLink = page.locator('a', { hasText: 'Adresy' }).first();
    this.plikiDoPobraniaLink = page.locator('a', { hasText: 'Pliki do pobrania' }).first();
  }

  /**
   * Checks if the user is on the "Moje Konto" (My Account) page.
   * @returns true if the URL matches the expected account page, false otherwise
   */
  async verifyUserIsOnMojeKontoPage(): Promise<boolean> {
    return await isUrlMatches(this.page, 'http://www.selenium-shop.pl/moje-konto/');
  }

  /**
   * Performs login using provided credentials.
   * @param username - The username to log in with
   * @param password - The password to log in with
   */
  async login(username: string, password: string): Promise<void> {
    await this.usernameField.fill('');
    await this.usernameField.type(username);

    await this.passwordField.fill('');
    await this.passwordField.type(password);

    await clickElement(this.loginButton);
  }

  /**
   * Verifies successful login using correct credentials.
   * @returns true if login success message is displayed, false otherwise
   */
  async isLoginSuccessfull(): Promise<boolean> {
    try {
      await this.login(config.username, config.password);
      await expect(this.pageBody).toContainText('Witaj Jan Testowy1');
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Verifies that incorrect login credentials trigger the expected error message.
   * @returns true if error message is displayed, false otherwise
   */
  async isIncorrectLoginResolvedProperly(): Promise<boolean> {
    try {
      await this.login('wronguser', 'wrongpass');
      await expect(this.incorrectLoginAlert).toContainText(
        'Nieznana użytkownik. Proszę sprawdzić ponownie lub spróbować swój email.'
      );
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Verifies that the user can successfully log out.
   * @returns true if logout is successful and login button is visible again
   */
  async isLogoutSuccessfull(): Promise<boolean> {
    try {
      await this.login(config.username, config.password);
      await clickElement(this.logoutLink);
      await expect(this.loginButton).toBeVisible();
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Clicks the "Adresy" (Addresses) link in the account menu.
   */
  async clickAdresyLink(): Promise<void> {
    await clickElement(this.adresyLink);
  }

  /**
   * Clicks the "Pliki do pobrania" (Downloads) link in the account menu.
   */
  async clickPlikiDoPobraniaLink(): Promise<void> {
    await clickElement(this.plikiDoPobraniaLink);
  }

  /**
   * Clicks the "Szczegóły konta" (Account Details) link in the account menu.
   */
  async clickSzczegolyKontaLink(): Promise<void> {
    await clickElement(this.szczegolyKontaLink);
  }

  /**
   * Clicks the "Zamówienia" (Orders) link in the account menu.
   */
  async clickZamowieniaLink(): Promise<void> {
    await clickElement(this.zamowieniaLink);
  }
}

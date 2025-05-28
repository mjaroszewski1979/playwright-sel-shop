import { Page, expect, Locator } from '@playwright/test';
import { config } from '../utils/config';

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

  }

  async login(username: string, password: string): Promise<void> {

    await this.usernameField.fill(''); 
    await this.usernameField.type(username);

    await this.passwordField.fill(''); 
    await this.passwordField.type(password);

    await this.loginButton.click();
  }

  async isLoginSuccessfull(): Promise<boolean> {
    try {
      await this.login(config.username, config.password);
      await expect(this.pageBody).toContainText('Witaj Jan Testowy1');
      return true;
    } catch {
      return false;
    }
  }

  async isIncorrectLoginResolvedProperly(): Promise<boolean> {
    try {
      await this.login('wronguser', 'wrongpass');
      await expect(this.incorrectLoginAlert).toContainText('Nieznana użytkownik. Proszę sprawdzić ponownie lub spróbować swój email.');
      return true;
    } catch {
      return false;
    }
  }

  async clickZamowieniaLink(): Promise<void> {
    await this.zamowieniaLink.click();
  }

  async clickSzczegolyKontaLink(): Promise<void> {
    await this.szczegolyKontaLink.click();
  }
  async clickLogoutLink(): Promise<void> {
    await this.logoutLink.click();
  }

  async isLogoutSuccessfull(): Promise<boolean> {
    try {
      await this.login(config.username, config.password);
      await this.clickLogoutLink();
      await expect(this.loginButton).toBeVisible();
      return true;
    } catch {
      return false;
    }
  }

}
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

  constructor(page: Page) {
    this.page = page;

    // Locators initialization
    this.usernameField = page.locator('#username');
    this.passwordField = page.locator('#password');
    this.loginButton = page.locator('button[name="login"]');
    this.pageBody = page.locator('body');
    this.zamowieniaLink = page.locator('a', { hasText: 'Zamówienia' }).first();

  }

  async login(username: string, password: string): Promise<void> {

    await this.usernameField.fill(''); 
    await this.usernameField.type(username);

    await this.passwordField.fill(''); 
    await this.passwordField.type(password);

    await this.loginButton.click();
  }

  async isLoginSuccessfull(): Promise<boolean> {
    await this.login(config.username, config.password);
    
    await expect(this.pageBody).toContainText('Witaj Jan Testowy1');
    return true;
  }

  async clickZamowieniaLink(): Promise<void> {
    await this.zamowieniaLink.click();
  }
}
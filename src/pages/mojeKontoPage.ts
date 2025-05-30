import { Page, expect, Locator } from '@playwright/test';
import { config } from '../utils/config';
import { isUrlMatches } from '../utils/urlUtils';
import { clickElement } from '../utils/actions';

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

   async verifyUserIsOnMojeKontoPage(): Promise<boolean> {
        
          return await isUrlMatches(this.page, 'http://www.selenium-shop.pl/moje-konto/');
          }

  async login(username: string, password: string): Promise<void> {

    await this.usernameField.fill(''); 
    await this.usernameField.type(username);

    await this.passwordField.fill(''); 
    await this.passwordField.type(password);

    await clickElement(this.loginButton);
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

  async clickAdresyLink(): Promise<void> {
    await clickElement(this.adresyLink);
  }

  async clickPlikiDoPobraniaLink(): Promise<void> {
    await clickElement(this.plikiDoPobraniaLink);
  }

  async clickSzczegolyKontaLink(): Promise<void> {
    await clickElement(this.szczegolyKontaLink);
  }

  async clickZamowieniaLink(): Promise<void> {
    await clickElement(this.zamowieniaLink);
  }

}
import { Page, expect } from '@playwright/test';
import { config } from '../utils/config';

export class MojeKontoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string, password: string): Promise<void> {
    const usernameField = this.page.locator('#username');
    const passwordField = this.page.locator('#password');
    const loginButton = this.page.locator('button[name="login"]');

    await usernameField.fill(''); // wyczyszczenie
    await usernameField.type(username);

    await passwordField.fill(''); // wyczyszczenie
    await passwordField.type(password);

    await loginButton.click();
  }

  async isLoginSuccessfull(): Promise<boolean> {
    await this.login(config.username, config.password);
    console.log('Dane logowania:', config);
    
    await expect(this.page.locator('body')).toContainText('Witaj Jan Testowy1');
    return true;
  }
}
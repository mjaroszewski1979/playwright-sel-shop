import { Page, expect } from '@playwright/test';
import { isUrlMatches } from '../utils/urlUtils';

export class AnkietaPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }


  async isTitleMatches(): Promise<boolean> {
    // Sprawdzenie tytułu przez oczekiwanie – jeśli nie pasuje, rzuci wyjątek
    try {
      await expect(this.page).toHaveTitle('Ankieta – Selenium Shop Automatyzacja Testów');
      return true;
    } catch {
      return false;
    }
  }

  async verifyUserIsOnAnkietaPage(): Promise<boolean> {
      
        return await isUrlMatches(this.page, 'http://www.selenium-shop.pl/o-nas/');
        }
  

}

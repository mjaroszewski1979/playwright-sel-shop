import { Page, expect } from '@playwright/test';

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

  async isUrlMatches(): Promise<boolean> {
    const expectedUrl = 'http://www.selenium-shop.pl/o-nas/';
    try {
      const currentUrl = this.page.url(); // <- wywołanie metody
      expect(currentUrl).toBe(expectedUrl);
      return true;
    } catch (error) {
      console.log('Błąd porównania URL:', error);
      return false;
    }
  }
  

}

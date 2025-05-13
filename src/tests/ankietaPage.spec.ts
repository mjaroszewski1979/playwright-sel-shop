import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { AnkietaPage } from '../pages/ankietaPage';



test('Weryfikacja tytulu strony Ankieta', async ({ page }) => {
    const mainPage = new MainPage(page);
    const ankietaPage = new AnkietaPage(page);
  
    await mainPage.goto();
    await mainPage.gotoAnkietaPage();
  
    expect(await ankietaPage.isTitleMatches()).toBe(true);
  });

test('Weryfikacja url strony Ankieta', async ({ page }) => {
    const mainPage = new MainPage(page);
    const ankietaPage = new AnkietaPage(page);
  
    await mainPage.goto();
    await mainPage.gotoAnkietaPage();
  
    expect(await ankietaPage.isUrlMatches()).toBe(true);
  });
import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { MojeKontoPage } from '../pages/mojeKontoPage';



test('Weryfikacja procesu logowania z poprwana nazwa uzytkownika i haslem', async ({ page }) => {
    const mainPage = new MainPage(page);
    const mojeKontoPage = new MojeKontoPage(page);
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
  
    expect(await mojeKontoPage.isLoginSuccessfull()).toBe(true);
  });
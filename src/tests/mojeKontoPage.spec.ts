import { test, expect } from '../pages/basePage';

test('Weryfikacja procesu logowania z poprwana nazwa uzytkownika i haslem', async ({ 
  mainPage,
  mojeKontoPage
 }) => {

    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
  
    expect(await mojeKontoPage.isLoginSuccessfull()).toBe(true);
  });
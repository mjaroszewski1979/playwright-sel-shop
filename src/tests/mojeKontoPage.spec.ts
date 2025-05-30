import { test, expect } from '../pages/basePage';

test('Weryfikacja url strony Moje Konto', async ({ 
  mainPage,
  mojeKontoPage
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
  
    expect(await mojeKontoPage.verifyUserIsOnMojeKontoPage()).toBe(true);
  });

test('Weryfikacja procesu logowania z poprwana nazwa uzytkownika i haslem', async ({ 
  mainPage,
  mojeKontoPage
 }) => {

    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
  
    expect(await mojeKontoPage.isLoginSuccessfull()).toBe(true);
  });

test('Weryfikacja procesu logowania z niepoprwana nazwa uzytkownika i haslem', async ({ 
  mainPage,
  mojeKontoPage
 }) => {

    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
  
    expect(await mojeKontoPage.isIncorrectLoginResolvedProperly()).toBe(true);
  });

test('Weryfikacja poprawnosci procesu wylogowania', async ({ 
  mainPage,
  mojeKontoPage
 }) => {

    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
  
    expect(await mojeKontoPage.isLogoutSuccessfull()).toBe(true);
  });
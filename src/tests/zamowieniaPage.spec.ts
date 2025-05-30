import { test, expect } from '../pages/basePage';
import { config } from '../utils/config';



test('Weryfikacja url strony Zamowienia', async ({ 
  mainPage,
  mojeKontoPage,
  zamowieniaPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickElement(mojeKontoPage.zamowieniaLink);

    expect(await zamowieniaPage.verifyUserIsOnZamowieniaPage()).toBe(true);
  });

test('Weryfikacja ilosci zamowien na pojedynczej stronie', async ({ 
  mainPage,
  mojeKontoPage,
  zamowieniaPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickElement(mojeKontoPage.zamowieniaLink);


    expect(await zamowieniaPage.isNumberOfOrdersMatches()).toBe(true);
  });

test('Weryfikacja struktury tabeli zamowien', async ({ 
  mainPage,
  mojeKontoPage,
  zamowieniaPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickElement(mojeKontoPage.zamowieniaLink);


    expect(await zamowieniaPage.isTextOfTableHeadersCorrect()).toBe(true);
  });

test('Weryfikacja szczegolow zamowienia', async ({ 
  mainPage,
  mojeKontoPage,
  zamowieniaPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickElement(mojeKontoPage.zamowieniaLink);


    expect(await zamowieniaPage.verifyOrderDetails()).toBe(true);
  });

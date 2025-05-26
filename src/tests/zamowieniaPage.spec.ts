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
    await mojeKontoPage.clickZamowieniaLink();

    expect(await zamowieniaPage.isUrlMatches()).toBe(true);
  });

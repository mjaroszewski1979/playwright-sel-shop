import { test, expect } from '../pages/basePage';
import { config } from '../utils/config';



test('Weryfikacja url strony Adresy', async ({ 
  mainPage,
  mojeKontoPage,
  plikiDoPobraniaPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickElement(mojeKontoPage.plikiDoPobraniaLink);

    expect(await plikiDoPobraniaPage.isUrlMatches()).toBe(true);
  });
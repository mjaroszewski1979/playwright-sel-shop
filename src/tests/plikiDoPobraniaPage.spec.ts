import { test, expect } from '../pages/basePage';
import { config } from '../utils/config';
import { clickElement } from '../utils/actions';



test('Weryfikacja url strony Pliki Do Pobrania', async ({ 
  mainPage,
  mojeKontoPage,
  plikiDoPobraniaPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await clickElement(mojeKontoPage.plikiDoPobraniaLink);

    expect(await plikiDoPobraniaPage.verifyUserIsOnPlikiDoPobraniaPage()).toBe(true);
  });
  
test('Weryfikacja widocznosci i tekstu wyswietlonego komunikatu', async ({ 
  mainPage,
  mojeKontoPage,
  plikiDoPobraniaPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await clickElement(mojeKontoPage.plikiDoPobraniaLink);

    expect(await plikiDoPobraniaPage.isInfoMessageDisplayedCorrectly()).toBe(true);
  });
import { test, expect } from '../pages/basePage';
import { config } from '../utils/config';



test('Weryfikacja url strony Adresy', async ({ 
  mainPage,
  mojeKontoPage,
  adresyPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickElement(mojeKontoPage.adresyLink);

    expect(await adresyPage.verifyUserIsOnAdresyPage()).toBe(true);
  });

test('Weryfikacja poprawnosci sekcji Edytuj Adres', async ({ 
  mainPage,
  mojeKontoPage,
  adresyPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickElement(mojeKontoPage.adresyLink);

    expect(await adresyPage.isEditAddressSectionDisplayedCorrectly()).toBe(true);
  });

test('Weryfikacja poprawnosci edycji pola Adres Rozliczeniowy', async ({ 
  mainPage,
  mojeKontoPage,
  adresyPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickElement(mojeKontoPage.adresyLink);

    expect(await adresyPage.isEditingBillingAddressWorksCorrectly()).toBe(true);
  });
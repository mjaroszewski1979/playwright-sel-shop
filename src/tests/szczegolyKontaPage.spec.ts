import { test, expect } from '../pages/basePage';
import { config } from '../utils/config';



test('Weryfikacja url strony Szczegoly Konta', async ({ 
  mainPage,
  mojeKontoPage,
  szczegolyKontaPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickSzczegolyKontaLink();

    expect(await szczegolyKontaPage.verifyUserIsOnSzczegolyKontaPage()).toBe(true);
  });

test('Weryfikacja wartosci widocznych w polach input strony Szczegoly Konta', async ({ 
  mainPage,
  mojeKontoPage,
  szczegolyKontaPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickSzczegolyKontaLink();

    expect(await szczegolyKontaPage.isAccountDetailSectionDisplayedCorrectly()).toBe(true);
  });
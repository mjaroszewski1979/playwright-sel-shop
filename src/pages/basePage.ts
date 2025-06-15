import { test as base } from '@playwright/test';
import { MainPage } from './mainPage';
import { AnkietaPage } from './ankietaPage';
import { MojeKontoPage } from './mojeKontoPage';
import { FirstProductPage } from './firstProductPage';
import { KoszykPage } from './koszykPage';
import { PilkiPage } from './pilkiPage';
import { ZamowieniaPage } from './zamowieniaPage';
import { SzczegolyKontaPage } from './szczegolyKontaPage';
import { AdresyPage } from './adresyPage';
import { PlikiDoPobraniaPage } from './plikiDoPobraniaPage';
import { WartoPage } from './wartoPage';

/**
 * Custom Playwright fixtures for Selenium Shop tests.
 * Each fixture provides an instance of a Page Object representing a specific part of the application.
 */
type MyFixtures = {
  mainPage: MainPage;
  ankietaPage: AnkietaPage;
  mojeKontoPage: MojeKontoPage;
  firstProductPage: FirstProductPage;
  koszykPage: KoszykPage;
  pilkiPage: PilkiPage;
  zamowieniaPage: ZamowieniaPage;
  szczegolyKontaPage: SzczegolyKontaPage;
  adresyPage: AdresyPage;
  plikiDoPobraniaPage: PlikiDoPobraniaPage;
  wartoPage: WartoPage;
};

/**
 * Extended Playwright `test` function with custom fixtures for Page Object Models.
 */
export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
  ankietaPage: async ({ page }, use) => {
    await use(new AnkietaPage(page));
  },
  mojeKontoPage: async ({ page }, use) => {
    await use(new MojeKontoPage(page));
  },
  firstProductPage: async ({ page }, use) => {
    await use(new FirstProductPage(page));
  },
  koszykPage: async ({ page }, use) => {
    await use(new KoszykPage(page));
  },
  pilkiPage: async ({ page }, use) => {
    await use(new PilkiPage(page));
  },
  zamowieniaPage: async ({ page }, use) => {
    await use(new ZamowieniaPage(page));
  },
  szczegolyKontaPage: async ({ page }, use) => {
    await use(new SzczegolyKontaPage(page));
  },
  adresyPage: async ({ page }, use) => {
    await use(new AdresyPage(page));
  },
  plikiDoPobraniaPage: async ({ page }, use) => {
    await use(new PlikiDoPobraniaPage(page));
  },
  wartoPage: async ({ page }, use) => {
    await use(new WartoPage(page));
  },
});

// Re-export expect for use in tests
export { expect } from '@playwright/test';

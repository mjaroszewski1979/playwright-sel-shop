import { test as base } from '@playwright/test';
import { MainPage } from './mainPage';
import { AnkietaPage } from './ankietaPage'; 
import { MojeKontoPage } from './mojeKontoPage';
import { FirstProductPage } from './firstProductPage';
import { KoszykPage } from './koszykPage';

type MyFixtures = {
    mainPage: MainPage,
    ankietaPage: AnkietaPage,
    mojeKontoPage: MojeKontoPage,
    firstProductPage: FirstProductPage,
    koszykPage: KoszykPage,
}

export const test = base.extend<MyFixtures>({
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page))
    },
    ankietaPage: async ({ page }, use) => {
        await use(new AnkietaPage(page))
    },
    mojeKontoPage: async ({ page }, use) => {
        await use(new MojeKontoPage(page))
    },
    firstProductPage: async ({ page }, use) => {
        await use(new FirstProductPage(page))
    },
    koszykPage: async ({ page }, use) => {
        await use(new KoszykPage(page))
    },

})

export { expect} from '@playwright/test';
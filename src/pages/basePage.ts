import { test as base } from '@playwright/test';
import { MainPage } from './mainPage';
import { AnkietaPage } from './ankietaPage'; 
import { MojeKontoPage } from './mojeKontoPage';

type MyFixtures = {
    mainPage: MainPage,
    ankietaPage: AnkietaPage,
    mojeKontoPage: MojeKontoPage,
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

})

export { expect} from '@playwright/test';
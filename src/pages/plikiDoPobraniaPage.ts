import { Page, expect, Locator } from '@playwright/test';
import { isElementVisibleWithPartialText } from '../utils/assertions';
import { isUrlMatches } from '../utils/urlUtils';

export class PlikiDoPobraniaPage {
    readonly page: Page;

    // Locators
    readonly infoMessageDiv: Locator;


    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.infoMessageDiv = page.locator('div.woocommerce-info');

    }

    async verifyUserIsOnPlikiDoPobraniaPage(): Promise<boolean> {
      
        return await isUrlMatches(this.page, 'http://www.selenium-shop.pl/moje-konto/downloads/');
        }


    async isInfoMessageDisplayedCorrectly(): Promise<boolean> {
        try {
        const infoMessageCorrect = await isElementVisibleWithPartialText(this.infoMessageDiv, 'Pliki do pobrania nie są jeszcze dostępne.');
        return infoMessageCorrect;
        } catch {
        return false;
        }
        }

    }
import { Page, expect, Locator } from '@playwright/test';

export class PlikiDoPobraniaPage {
    readonly page: Page;

    // Locators
    readonly infoMessageDiv: Locator;


    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.infoMessageDiv = page.locator('div.woocommerce-info');

    }

    

    async isUrlMatches(): Promise<boolean> {
        try {
        const currentUrl = this.page.url();
        expect(currentUrl).toBe('http://www.selenium-shop.pl/moje-konto/downloads/');
        return true;
        } catch {
        return false;
        }
        }

    async isElementVisibleWithText(locatorName: Locator, expectedText: string): Promise<boolean> {
        try {
            await expect(locatorName).toBeVisible();
            await expect(locatorName).toHaveText(expectedText);
            return true;
        } catch {
            return false;
        }
        }

    async isInfoMessageDisplayedCorrectly(): Promise<boolean> {
        try {
        const infoMessageCorrect = await this.isElementVisibleWithText(this.infoMessageDiv, 'Pliki do pobrania nie są jeszcze dostępne.');
        return infoMessageCorrect;
        } catch {
        return false;
        }
        }

    }
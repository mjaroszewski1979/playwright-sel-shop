import { Page, expect, Locator } from '@playwright/test';

export class AdresyPage {
    readonly page: Page;

    // Locators
    readonly adresRozliczeniowyHeader: Locator;
    readonly adresDoWysylkiHeader: Locator;

    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.adresRozliczeniowyHeader = page.locator('header.woocommerce-Address-title').nth(0);
        this.adresDoWysylkiHeader = page.locator('header.woocommerce-Address-title').nth(1);
    }

    

    async isUrlMatches(): Promise<boolean> {
        try {
        const currentUrl = this.page.url();
        expect(currentUrl).toBe('http://www.selenium-shop.pl/moje-konto/edit-address/');
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
    async isEditAddressSectionDisplayedCorrectly(): Promise<boolean> {
        try {
            const adresRozliczeniowyCorrect = await this.isElementVisibleWithText(this.adresRozliczeniowyHeader, 'Adres rozliczeniowy');
            const adresDoWysylkiCorrect = await this.isElementVisibleWithText(this.adresDoWysylkiHeader, 'Adres do wysyłki');

            return adresRozliczeniowyCorrect && adresDoWysylkiCorrect
        } catch {
            return false;
        }
        }
}
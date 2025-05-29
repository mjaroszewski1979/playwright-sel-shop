import { Page, expect, Locator } from '@playwright/test';

export class AdresyPage {
    readonly page: Page;

    // Locators
    readonly adresRozliczeniowyHeader: Locator;
    readonly adresDoWysylkiHeader: Locator;
    readonly adresRozliczeniowyEdycjaLink: Locator;
    readonly adresDoWysylkiEdycjaLink: Locator;
    readonly successMessageDiv: Locator;
    readonly streetInput: Locator;
    readonly saveButton: Locator;
    readonly addressFirstSection: Locator;

    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.adresRozliczeniowyHeader = page.locator('header.title > h3').nth(0);
        this.adresDoWysylkiHeader = page.locator('header.title > h3').nth(1);
        this.adresRozliczeniowyEdycjaLink = page.locator('a.edit').nth(0);
        this.adresDoWysylkiEdycjaLink = page.locator('a.edit').nth(1);
        this.successMessageDiv = page.locator('div.woocommerce-message');
        this.streetInput = page.locator('input#billing_address_1');
        this.saveButton = page.locator('button[name="save_address"]');
        this.addressFirstSection = page.locator('div.u-column1 > address').nth(0);
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

    async isElementVisibleWithPartialText(locatorName: Locator, expectedText: string): Promise<boolean> {
        try {
            await expect(locatorName).toBeVisible();
            await expect(locatorName).toContainText(expectedText);
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

    generateRandomStreet(): string {
        const randomNumber = Math.floor(1000 + Math.random() * 9000); 
        return `Nowa ${randomNumber}`;
        }

    async isEditingBillingAddressWorksCorrectly(): Promise<boolean> {
        try {
            await this.adresRozliczeniowyEdycjaLink.click();
            const randomStreetName = this.generateRandomStreet();
            await this.streetInput.fill('');
            await this.streetInput.type(randomStreetName);
            await this.saveButton.click();
            const successMessageCorrect = await this.isElementVisibleWithText(this.successMessageDiv, 'Adres został zmieniony.');
            const addressStreetCorrect = await this.isElementVisibleWithPartialText(this.addressFirstSection, randomStreetName);

            return successMessageCorrect && addressStreetCorrect;
        } catch {
            return false;
        }
        }

    

}
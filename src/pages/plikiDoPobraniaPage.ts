import { Page, expect, Locator } from '@playwright/test';

export class PlikiDoPobraniaPage {
    readonly page: Page;

    // Locators
    readonly adresRozliczeniowyHeader: Locator;


    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.adresRozliczeniowyHeader = page.locator('header.title > h3').nth(0);

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

    }
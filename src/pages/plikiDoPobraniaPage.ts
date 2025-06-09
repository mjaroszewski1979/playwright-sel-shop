import { Page, Locator } from '@playwright/test';
import { isElementVisibleWithPartialText } from '../utils/assertions';
import { isUrlMatches } from '../utils/urlUtils';

/**
 * Page Object Model for the "Downloads" (Pliki do pobrania) page in the Selenium Shop application.
 */
export class PlikiDoPobraniaPage {
    readonly page: Page;

    // Locators
    readonly infoMessageDiv: Locator;


    /**
   * Constructor for PlikiDoPobraniaPage.
   * @param page - Playwright Page instance.
   */
    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.infoMessageDiv = page.locator('div.woocommerce-info');

    }

    /**
   * Verifies if the user is currently on the "Downloads" page.
   * @returns true if the URL matches the expected downloads page, false otherwise.
   */
    async verifyUserIsOnPlikiDoPobraniaPage(): Promise<boolean> {
      
        return await isUrlMatches(this.page, 'http://www.selenium-shop.pl/moje-konto/downloads/');
        }


    /**
   * Checks if the informational message indicating that no downloads are available is correctly displayed.
   * @returns true if the correct message is visible, false otherwise.
   */
    async isInfoMessageDisplayedCorrectly(): Promise<boolean> {
        try {
        const infoMessageCorrect = await isElementVisibleWithPartialText(this.infoMessageDiv, 'Pliki do pobrania nie są jeszcze dostępne.');
        return infoMessageCorrect;
        } catch {
        return false;
        }
        }

    }
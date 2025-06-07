import { Page, Locator } from '@playwright/test';
import { isElementVisibleWithText, isElementVisibleWithPartialText } from '../utils/assertions';
import { generateRandomStreet } from '../utils/actions';
import { isUrlMatches } from '../utils/urlUtils';
import { clickElement } from '../utils/actions';

/**
 * Page Object Model class for the "Adresy" page.
 * Encapsulates locators and operations for billing and shipping address management.
 */
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

    /**
   * Initializes page locators.
   * @param page - The Playwright Page instance.
   */
    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.adresRozliczeniowyHeader = page.locator('header.title > h3').nth(0);
        this.adresDoWysylkiHeader = page.locator('header.title > h3').nth(1);
        this.adresRozliczeniowyEdycjaLink = page.locator('a.edit').nth(0);
        this.adresDoWysylkiEdycjaLink = page.locator('a.edit').nth(1);
        this.successMessageDiv = page.locator('div.woocommerce-message');
        this.streetInput = page.locator('input#billing_address_1');
        this.saveButton = page.locator('button[name="save_address"]');
        this.addressFirstSection = page.locator('div.u-column1 > address').nth(0);
    }

    /**
   * Checks whether the user is on the "Adresy" page by verifying the URL.
   * @returns True if URL matches expected address page URL, otherwise false.
   */
    async verifyUserIsOnAdresyPage(): Promise<boolean> {
      
        return await isUrlMatches(this.page, 'http://www.selenium-shop.pl/moje-konto/edit-address/');
        }


    /**
   * Verifies that both billing and shipping address headers are visible and contain correct text.
   * @returns True if both headers are correct, otherwise false.
   */
    async isEditAddressSectionDisplayedCorrectly(): Promise<boolean> {
        try {
            const adresRozliczeniowyCorrect = await isElementVisibleWithText(this.adresRozliczeniowyHeader, 'Adres rozliczeniowy');
            const adresDoWysylkiCorrect = await isElementVisibleWithText(this.adresDoWysylkiHeader, 'Adres do wysyłki');

            return adresRozliczeniowyCorrect && adresDoWysylkiCorrect
        } catch {
            return false;
        }
        }


    /**
   * Edits the billing address with a randomly generated street name and verifies if the update is reflected correctly.
   * @returns True if both success message and new address are displayed correctly, otherwise false.
   */
    async isEditingBillingAddressWorksCorrectly(): Promise<boolean> {
        try {
            await this.adresRozliczeniowyEdycjaLink.click();
            const randomStreetName = generateRandomStreet();
            await this.streetInput.fill('');
            await this.streetInput.type(randomStreetName);
            await clickElement(this.saveButton);
            const successMessageCorrect = await isElementVisibleWithText(this.successMessageDiv, 'Adres został zmieniony.');
            const addressStreetCorrect = await isElementVisibleWithPartialText(this.addressFirstSection, randomStreetName);

            return successMessageCorrect && addressStreetCorrect;
        } catch {
            return false;
        }
        }

}
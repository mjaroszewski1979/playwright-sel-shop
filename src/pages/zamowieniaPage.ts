import { Page, expect, Locator } from '@playwright/test';
import { isUrlMatches } from '../utils/urlUtils';
import { clickElement } from '../utils/actions';

/**
 * Page Object Model for the "Orders" page in the Selenium Shop application.
 */
export class ZamowieniaPage {
    readonly page: Page;

    // Locators
    readonly singleOrderRow: Locator;
    readonly ordersTableHeaderSpan: Locator;
    readonly orderNumberLink: Locator;
    readonly orderTime: Locator;
    readonly orderNumberMark: Locator;
    readonly orderDateMark: Locator;


    /**
   * Constructor for ZamowieniaPage.
   * @param page - Playwright Page instance.
   */
    constructor(page: Page) {
        this.page = page;

        // Locators initialization
        this.singleOrderRow = page.locator('tr.woocommerce-orders-table__row.woocommerce-orders-table__row--status-on-hold.order');
        this.ordersTableHeaderSpan = page.locator('span.nobr');
        this.orderNumberLink = page.locator('td[data-title="Zamówienie"] > a').first();
        this.orderTime = page.locator('td[data-title="Data"] time').first();
        this.orderNumberMark = page.locator('p > mark.order-number');
        this.orderDateMark = page.locator('p > mark.order-date');

    }

    /**
   * Verifies whether the current URL matches the expected Orders page URL.
   * @returns true if the URL matches, false otherwise.
   */
    async verifyUserIsOnZamowieniaPage(): Promise<boolean> {
      
    return await isUrlMatches(this.page, 'http://www.selenium-shop.pl/moje-konto/orders/');
    }


    /**
   * Checks whether the number of displayed orders matches the expected count (10).
   * @returns true if count matches, false otherwise.
   */
    async isNumberOfOrdersMatches(): Promise<boolean> {
    try {
      await expect(this.singleOrderRow).toHaveCount(10);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Verifies whether the table headers have the correct Polish labels.
   * @returns true if all headers are correct, false otherwise.
   */
  async isTextOfTableHeadersCorrect(): Promise<boolean> {

    const expectedTexts = [
      'Zamówienie',
      'Data',
      'Status',
      'Suma',
      'Działania'
    ];

    try {
      for (let i = 0; i < expectedTexts.length; i++) {
        await expect(this.ordersTableHeaderSpan.nth(i)).toHaveText(expectedTexts[i]);
      }
      return true;
    } catch {
      return false;
    }
  }


  /**
   * Retrieves the order number (without the '#' symbol) from the first order row.
   * @returns the order number as a string.
   */
  async getOrderNumber(): Promise<string> {
    const rawOrderNumber = await this.orderNumberLink.textContent();
    if (!rawOrderNumber) {
      throw new Error('Nie znaleziono numeru zamówienia.');
    }
    const orderNumber = rawOrderNumber.replace('#', '').trim();
    return orderNumber;
  }

  /**
   * Retrieves the order date from the first order row.
   * @returns the order date as a string.
   */
  async getOrderTime(): Promise<string> {
    const orderDate = await this.orderTime.textContent();
    if (!orderDate) {
      throw new Error('Order date not found.');
    }
    return orderDate;
  }

  /**
   * Verifies whether the order details page displays the same order number and date as the summary row.
   * Navigates to the order details and validates correctness of data.
   * @returns true if both values match, false otherwise.
   */
  async verifyOrderDetails(): Promise<boolean> {
    try {
      const orderNumber = await this.getOrderNumber()
      const orderDate = await this.getOrderTime()
      await clickElement(this.orderNumberLink);
      await expect(this.orderNumberMark).toHaveText(orderNumber);
      await expect(this.orderDateMark).toHaveText(orderDate);

      return true;
    } catch (error) {
    console.error('Order details validation failed:', error);
    return false;
  }
  }

}
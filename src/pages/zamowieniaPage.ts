import { Page, expect, Locator } from '@playwright/test';
import { isUrlMatches } from '../utils/urlUtils';
import { clickElement } from '../utils/actions';

export class ZamowieniaPage {
    readonly page: Page;

    // Locators
    readonly singleOrderRow: Locator;
    readonly ordersTableHeaderSpan: Locator;
    readonly orderNumberLink: Locator;
    readonly orderTime: Locator;
    readonly orderNumberMark: Locator;
    readonly orderDateMark: Locator;



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

    async verifyUserIsOnZamowieniaPage(): Promise<boolean> {
      
    return await isUrlMatches(this.page, 'http://www.selenium-shop.pl/moje-konto/orders/');
    }


    async isNumberOfOrdersMatches(): Promise<boolean> {
    try {
      await expect(this.singleOrderRow).toHaveCount(10);
      return true;
    } catch {
      return false;
    }
  }

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


  async getOrderNumber(): Promise<string> {
    const rawOrderNumber = await this.orderNumberLink.textContent();
    if (!rawOrderNumber) {
      throw new Error('Nie znaleziono numeru zamówienia.');
    }
    const orderNumber = rawOrderNumber.replace('#', '').trim();
    return orderNumber;
  }

  async getOrderTime(): Promise<string> {
    const orderDate = await this.orderTime.textContent();
    if (!orderDate) {
      throw new Error('Nie znaleziono daty zamówienia.');
    }
    return orderDate;
  }

  async verifyOrderDetails(): Promise<boolean> {
    try {
      const orderNumber = await this.getOrderNumber()
      const orderDate = await this.getOrderTime()
      await clickElement(this.orderNumberLink);
      await expect(this.orderNumberMark).toHaveText(orderNumber);
      await expect(this.orderDateMark).toHaveText(orderDate);

      return true;
    } catch (error) {
    console.error('Błąd walidacji danych zamówienia:', error);
    return false;
  }
  }

}
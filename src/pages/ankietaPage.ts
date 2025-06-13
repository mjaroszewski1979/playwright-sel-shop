import { Page, Locator, Dialog, expect } from '@playwright/test';
import { isUrlMatches } from '../utils/urlUtils';
import { clickElement } from '../utils/actions';
import { isElementVisibleWithText } from '../utils/assertions';

/**
 * Page Object Model class for the "Ankieta" (Survey) page.
 * Encapsulates verification logic for title and URL.
 */
export class AnkietaPage {
  readonly page: Page;

  // Locators
  readonly buttonAlert: Locator;
  readonly buttonPromptAlert: Locator;
  readonly buttonConfirmAlert: Locator;
  readonly buttonProces: Locator;
  readonly spanProces: Locator;
  readonly buttonRightClick: Locator;
  readonly rightClickInfoPara: Locator;
  readonly doubleClickInfoPara: Locator;
  readonly buttonDoubleClick: Locator;
  readonly buttonNewWindow: Locator;

  /**
   * Constructor for AnkietaPage.
   * @param page - Playwright Page instance.
   */
  constructor(page: Page) {
    this.page = page;

    // Initialize locators
    this.buttonAlert = page.locator('#alertPrzycisk');
    this.buttonPromptAlert = page.locator('#promtAlertPrzycisk');
    this.buttonConfirmAlert = page.locator('#confimationAlertPrzycisk');
    this.buttonProces = page.locator('#proces');
    this.spanProces = page.locator('#procesText');
    this.buttonRightClick = page.locator('#rightClick');
    this.rightClickInfoPara = page.locator('#rightClickInfo');
    this.doubleClickInfoPara = page.locator('#p-doubleClick');
    this.buttonDoubleClick = page.locator('input[type="button"]', {
      hasText: 'Dwuklik pokaż komunikat',
    });
    this.buttonNewWindow = page.locator('input[type="button"]', {
      hasText: 'Otwórz nowe okno',
    });
  }

  /**
   * Verifies that the page title matches the expected title for the Ankieta page.
   * @returns True if title matches, otherwise false.
   */
  async isTitleMatches(): Promise<boolean> {
    try {
      await expect(this.page).toHaveTitle('Ankieta – Selenium Shop Automatyzacja Testów');
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Verifies that the current page URL matches the expected URL for the Ankieta page.
   * @returns True if URL matches, otherwise false.
   */
  async verifyUserIsOnAnkietaPage(): Promise<boolean> {
    return await isUrlMatches(this.page, 'http://www.selenium-shop.pl/o-nas/');
  }

  /**
   * Clicks on the alert-triggering button element to open a browser alert dialog.
   */
  async clickButtonAlert(): Promise<void> {
    await clickElement(this.buttonAlert);
  }

  async clickButtonPromptAlert(): Promise<void> {
    await clickElement(this.buttonPromptAlert);
  }

  async clickButtonConfirmAlert(): Promise<void> {
    await clickElement(this.buttonConfirmAlert);
  }

  async clickButtonProces(): Promise<void> {
    await clickElement(this.buttonProces);
  }

  async clickButtonNewWindow(): Promise<void> {
    await clickElement(this.buttonNewWindow);
  }

  async clickButtonDoubleClick(): Promise<void> {
    await this.buttonDoubleClick.dblclick();
  }

  async clickButtonRightClick(): Promise<void> {
    await this.buttonRightClick.hover();
    await this.buttonRightClick.click({ button: 'right' });
  }

  /**
   * Registers a one-time alert (dialog) event handler.
   * When the alert appears, it verifies the alert's content and accepts it.
   */

  private registerAlertHandler(): void {
    this.page.once('dialog', async (dialog) => {
      await this.verifyAlert(dialog);
      await this.verifyAlertText(dialog, 'To jest okno „Allert” strony www.selenium-shop.pl');
      await this.acceptAlert(dialog);
    });
  }

  private registerConfirmAlertHandler(): void {
    this.page.once('dialog', async (dialog) => {
      await this.verifyConfirmAlert(dialog);
      await this.verifyAlertText(
        dialog,
        'Czy chcesz zatwierdzić operację usunięcia Twoich danych osobowych?'
      );
      await this.dismissAlert(dialog);
    });
  }
  private registerPromptAlertHandler(): void {
    this.page.once('dialog', async (dialog) => {
      await this.verifyPromptAlert(dialog);
      await this.acceptPromptAlert(dialog, 'maciej');
    });
  }

  /**
   * Verifies that the dialog is of type 'alert' and contains the expected message.
   * @param dialog The Dialog object triggered by the browser.
   */
  private async verifyAlert(dialog: Dialog): Promise<void> {
    expect(dialog.type()).toBe('alert');
  }

  private async verifyPromptAlert(dialog: Dialog): Promise<void> {
    expect(dialog.type()).toBe('prompt');
  }

  private async verifyConfirmAlert(dialog: Dialog): Promise<void> {
    expect(dialog.type()).toBe('confirm');
  }

  private async verifyAlertText(dialog: Dialog, text: string): Promise<void> {
    expect(dialog.message()).toContain(text);
  }

  /**
   * Accepts (closes) the currently opened alert dialog by clicking the 'OK' button.
   * @param dialog The Dialog object to be accepted.
   */
  private async acceptAlert(dialog: Dialog): Promise<void> {
    await dialog.accept();
  }

  private async dismissAlert(dialog: Dialog): Promise<void> {
    await dialog.dismiss();
  }

  private async acceptPromptAlert(dialog: Dialog, text: string): Promise<void> {
    await dialog.accept(text);
  }

  /**
   * Verifies that the alert is handled correctly by:
   *  - Registering the alert handler.
   *  - Triggering the alert via button click.
   *  - Asserting that the button remains visible after alert is handled.
   * @returns True if alert is handled successfully, otherwise false.
   */
  async isAlertHandledCorrectly(): Promise<boolean> {
    try {
      this.registerAlertHandler();
      await this.clickButtonAlert();
      await expect(this.buttonAlert).toBeVisible();
      return true;
    } catch (error) {
      console.error('Alert handling failed:', error);
      return false;
    }
  }

  async isPromptAlertHandledCorrectly(): Promise<boolean> {
    try {
      this.registerPromptAlertHandler();
      await this.clickButtonPromptAlert();
      await expect(this.buttonPromptAlert).toBeVisible();
      return true;
    } catch (error) {
      console.error('Alert handling failed:', error);
      return false;
    }
  }

  async isConfirmAlertHandledCorrectly(): Promise<boolean> {
    try {
      this.registerConfirmAlertHandler();
      await this.clickButtonConfirmAlert();
      await expect(this.buttonConfirmAlert).toBeVisible();
      return true;
    } catch (error) {
      console.error('Alert handling failed:', error);
      return false;
    }
  }

  async isProcesElementDisplayedProperly(): Promise<boolean> {
    try {
      this.clickButtonProces();
      await this.clickButtonConfirmAlert();
      const procesCorrect = await isElementVisibleWithText(
        this.spanProces,
        'Element Proces został wyświetlony'
      );
      return procesCorrect;
    } catch (error) {
      console.error('Alert handling failed:', error);
      return false;
    }
  }

  async isRightClickInfoParaDisplayedProperly(): Promise<boolean> {
    try {
      this.clickButtonRightClick();
      const infoParaCorrect = await isElementVisibleWithText(
        this.rightClickInfoPara,
        'Przycisk RIGHT został kliknięty'
      );
      return infoParaCorrect;
    } catch (error) {
      console.error('Right click button failed:', error);
      return false;
    }
  }

  async isDoubleClickInfoParaDisplayedProperly(): Promise<boolean> {
    try {
      this.clickButtonDoubleClick();
      const infoParaDBClickCorrect = await isElementVisibleWithText(
        this.doubleClickInfoPara,
        'Przycisk dwuklik został kliknięty'
      );
      return infoParaDBClickCorrect;
    } catch (error) {
      console.error('Double click button failed:', error);
      return false;
    }
  }

  async isNewWindowOpenedAfterClickNewWindowButton(): Promise<boolean> {
    try {
      const context = this.page.context();
      const initialPagesCount = context.pages().length;
      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        this.clickButtonNewWindow(),
      ]);
      await newPage.waitForLoadState();
      const finalPagesCount = context.pages().length;
      expect(finalPagesCount).toBe(initialPagesCount + 1);
      return true;
    } catch (error) {
      console.error('New window click button failed:', error);
      return false;
    }
  }
}

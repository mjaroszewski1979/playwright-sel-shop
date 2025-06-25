import { Page, Locator, Dialog, expect } from '@playwright/test';
import { isUrlMatches } from '../utils/urlUtils';
import { clickElement } from '../utils/actions';
import { isElementVisibleWithText } from '../utils/assertions';
import { testData } from '../utils/testData';

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
  readonly inputImie: Locator;
  readonly inputNazwisko: Locator;
  readonly textareaKomentarz: Locator;
  readonly selectSport: Locator;
  readonly selectMarki: Locator;
  readonly buttonWyslij: Locator;
  readonly divDatepicker: Locator;
  readonly divPokazInfo: Locator;
  readonly divPokazInfoImie: Locator;
  readonly divPokazInfoNazwisko: Locator;
  readonly divPokazInfoProdukt: Locator;
  readonly divPokazInfoSport: Locator;
  readonly divPokazInfoMarka: Locator;
  readonly divPokazInfoDataPlec: Locator;
  readonly divPokazInfoDataWiek: Locator;
  readonly divPokazInfoKomentarz: Locator;

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
    this.inputImie = page.locator('#Imię').first();
    this.inputNazwisko = page.locator('#Nazwisk');
    this.textareaKomentarz = page.locator('#Komentarz').first();
    this.buttonWyslij = page.locator('#Wyslij');
    this.selectSport = page.locator('select[name="Sport"]').first();
    this.selectMarki = page.locator('#Marki').first();
    this.divDatepicker = page.locator('#datepicker input.form-control.white');
    this.divPokazInfo = page.locator('div#info');
    this.divPokazInfoImie = page.locator('div#info', { hasText: `Imie: ${testData.imie}` });
    this.divPokazInfoNazwisko = page.locator('div#info', {
      hasText: `Nazwisko: ${testData.nazwisko}`,
    });
    this.divPokazInfoDataPlec = page.locator('div#info', {
      hasText: `Płeć: ${testData.plec}`,
    });
    this.divPokazInfoDataWiek = page.locator('div#info', {
      hasText: `Wiek: ${testData.wiek}`,
    });
    this.divPokazInfoProdukt = page.locator('div#info', {
      hasText: `Produkty jakie szukasz: ${testData.produkt}`,
    });
    this.divPokazInfoSport = page.locator('div#info', { hasText: `Sport: ${testData.sport}` });
    this.divPokazInfoMarka = page.locator('div#info', { hasText: `Marki: ${testData.marka}` });

    this.divPokazInfoKomentarz = page.locator('div#info', {
      hasText: `Komentarz: ${testData.komentarz}`,
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

  /**
   * Clicks the prompt alert button to trigger a prompt dialog in the browser.
   */
  async clickButtonPromptAlert(): Promise<void> {
    await clickElement(this.buttonPromptAlert);
  }

  /**
   * Clicks the confirm alert button to trigger a confirmation dialog in the browser.
   */
  async clickButtonConfirmAlert(): Promise<void> {
    await clickElement(this.buttonConfirmAlert);
  }

  /**
   * Clicks the "Proces" button to trigger process-related behavior or UI update.
   */
  async clickButtonProces(): Promise<void> {
    await clickElement(this.buttonProces);
  }

  /**
   * Clicks the "New Window" button to open a new browser window.
   */
  async clickButtonNewWindow(): Promise<void> {
    await clickElement(this.buttonNewWindow);
  }

  /**
   * Double-clicks the designated button to trigger a double-click action.
   */
  async clickButtonDoubleClick(): Promise<void> {
    await this.buttonDoubleClick.dblclick();
  }

  /**
   * Right-clicks on the target button element to trigger context menu behavior.
   */
  async clickButtonRightClick(): Promise<void> {
    await this.buttonRightClick.hover();
    await this.buttonRightClick.click({ button: 'right' });
  }

  /**
   * Clicks the "Wyślij" button to submit the survey form.
   */
  async clickButtonWyslij(): Promise<void> {
    await clickElement(this.buttonWyslij);
  }

  /**
   * Selects the predefined sport value from the dropdown based on test data.
   */
  async selectSports(): Promise<void> {
    await expect(this.selectSport).toBeVisible();
    await this.selectSport.selectOption(testData.sport);
  }

  /**
   * Selects the predefined brand value from the dropdown based on test data.
   */
  async selectMarka(): Promise<void> {
    await expect(this.selectMarki).toBeVisible();
    await this.selectMarki.selectOption(testData.marka);
  }

  /**
   * Fills in the purchase date input using the predefined test data value.
   */
  async inputPurchaseDate(): Promise<void> {
    await this.divDatepicker.fill(testData.dataZakupu);
  }

  /**
   * Fills in the "Komentarz" (comment) textarea with predefined test data.
   */
  async fillTextareaKomentarz(): Promise<void> {
    await this.textareaKomentarz.fill(testData.komentarz);
  }

  /**
   * Returns a dynamic radio button locator for the "Wiek" (age) group.
   * @param wiek - The value of the age group to select.
   * @returns Locator for the age radio input.
   */
  getInputRadioWiek(wiek: string): Locator {
    return this.page.locator(`input[type="radio"][value="${wiek}"]`).first();
  }

  /**
   * Returns a dynamic radio button locator for the "Płeć" (gender) group.
   * @param plec - The value of the gender option to select.
   * @returns Locator for the gender radio input.
   */
  getInputRadioPlec(plec: string): Locator {
    return this.page.locator(`input[type="radio"][value="${plec}"]`).first();
  }

  /**
   * Returns a Locator for the checkbox input element corresponding to the given product value.
   *
   * This method is useful for interacting with product-specific checkboxes in the survey form.
   * It searches for the first checkbox input whose "value" attribute matches the provided product name.
   *
   * @param produkt - The product name used to identify the checkbox (e.g., "Koszulka meczowa").
   * @returns A Playwright Locator pointing to the matched checkbox element.
   */
  getInputCheckboxProdukt(produkt: string): Locator {
    return this.page.locator(`input[type="checkbox"][value="${produkt}"]`).first();
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

  /**
   * Registers a one-time handler for confirm alert.
   * When the alert appears, it confirms the alert's content and accepts it.
   */
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

  /**
   * Registers a one-time handler for prompt alert.
   * Fills the prompt with a predefined string before accepting it.
   */
  private registerPromptAlertHandler(): void {
    this.page.once('dialog', async (dialog) => {
      await this.verifyPromptAlert(dialog);
      await this.acceptPromptAlert(dialog, testData.komentarz);
    });
  }

  /**
   * Fills in all required fields in the Ankieta form using test data
   * and submits the form by clicking the "Wyślij" button.
   */
  async fillAnkietaForm(): Promise<void> {
    await this.inputImie.fill('');
    await this.inputImie.fill(testData.imie);
    await this.inputNazwisko.fill('');
    await this.inputNazwisko.fill(testData.nazwisko);
    await this.getInputRadioPlec(testData.plec).check();
    await this.getInputRadioWiek(testData.wiek).check();
    await this.getInputCheckboxProdukt(testData.produkt).check();
    await this.selectSports();
    await this.inputPurchaseDate();
    await this.selectMarka();
    await this.fillTextareaKomentarz();
    await this.clickButtonWyslij();
  }

  /**
   * Verifies that the dialog is of type 'alert' and contains the expected message.
   * @param dialog The Dialog object triggered by the browser.
   */
  private async verifyAlert(dialog: Dialog): Promise<void> {
    expect(dialog.type()).toBe('alert');
  }

  /**
   * Verifies that the received dialog is of type 'prompt'.
   * Used to validate that a prompt alert was triggered as expected.
   * @param dialog The dialog instance triggered by the browser.
   */
  private async verifyPromptAlert(dialog: Dialog): Promise<void> {
    expect(dialog.type()).toBe('prompt');
  }

  /**
   * Verifies that the received dialog is of type 'confirm'.
   * Used to validate that a confirm alert was triggered as expected.
   * @param dialog The dialog instance triggered by the browser.
   */
  private async verifyConfirmAlert(dialog: Dialog): Promise<void> {
    expect(dialog.type()).toBe('confirm');
  }

  /**
   * Verifies that the alert dialog's message contains the expected text.
   * Useful for checking correctness of alert content.
   * @param dialog The dialog instance triggered by the browser.
   * @param text The expected substring to be found in the dialog message.
   */
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

  /**
   * Dismisses (closes) the confirmation dialog by clicking the "Cancel" button.
   * @param dialog The Dialog object to be dismissed.
   */
  private async dismissAlert(dialog: Dialog): Promise<void> {
    await dialog.dismiss();
  }

  /**
   * Accepts a prompt alert and fills it with the specified input value.
   * @param dialog The Dialog object to be accepted.
   * @param text The input string to send to the prompt.
   */
  private async acceptPromptAlert(dialog: Dialog, text: string): Promise<void> {
    await dialog.accept(text);
  }

  /**
   * Waits for and returns a new browser page that opens after triggering an action.
   * @returns The newly opened Page instance or null if opening failed.
   */
  async getNewPage(): Promise<Page | null> {
    try {
      const context = this.page.context();
      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        this.clickButtonNewWindow(),
      ]);
      await newPage.waitForLoadState();
      return newPage;
    } catch (error) {
      console.error('New window click button failed:', error);
      return null;
    }
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

  /**
   * Verifies that the prompt alert is handled correctly by:
   *  - Registering the prompt alert handler.
   *  - Triggering the prompt alert via button click.
   *  - Asserting that the button remains visible after handling.
   * @returns True if prompt alert is handled successfully, otherwise false.
   */
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

  /**
   * Verifies that the confirm alert is handled correctly by:
   *  - Registering the confirm alert handler.
   *  - Triggering the confirm alert via button click.
   *  - Asserting that the button remains visible after handling.
   * @returns True if confirm alert is handled successfully, otherwise false.
   */
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

  /**
   * Verifies that the "Proces" element is displayed correctly after:
   *  - Clicking the "Proces" button.
   *  - Handling the confirmation alert.
   *  - Checking visibility and content of the related span.
   * @returns True if the element is displayed properly, otherwise false.
   */
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

  /**
   * Verifies that the paragraph for right-click information is displayed properly
   * after performing a right-click on the associated button.
   * @returns True if the information paragraph is displayed as expected, otherwise false.
   */
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

  /**
   * Verifies that the paragraph for double-click information is displayed properly
   * after performing a double-click on the associated button.
   * @returns True if the information paragraph is displayed as expected, otherwise false.
   */
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

  /**
   * Verifies that a new browser window is opened after clicking the appropriate button.
   * Compares the number of open pages before and after the action.
   * @returns True if a new window opens correctly, otherwise false.
   */
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

  /**
   * Verifies that the full Ankieta (survey) form can be filled and submitted
   * without errors and the confirmation section is displayed.
   * @returns True if the form submits successfully, otherwise false.
   */
  async isAnkietaFormWorksCorrectly(): Promise<boolean> {
    try {
      await this.fillAnkietaForm();
      expect(this.divPokazInfo.isVisible);
      return true;
    } catch (error) {
      console.error('Ankieta form is not working correctly', error);
      return false;
    }
  }

  /**
   * Verifies that the information displayed after submitting the form
   * matches the values provided during form input.
   * @returns True if displayed data matches input data, otherwise false.
   */
  async verifyDisplayedDataMatchesInput(): Promise<boolean> {
    try {
      await this.fillAnkietaForm();
      expect(
        this.divPokazInfoImie.isVisible &&
          this.divPokazInfoNazwisko.isVisible &&
          this.divPokazInfoDataPlec.isVisible &&
          this.divPokazInfoDataWiek.isVisible &&
          this.divPokazInfoProdukt.isVisible &&
          this.divPokazInfoSport.isVisible &&
          this.divPokazInfoMarka.isVisible &&
          this.divPokazInfoKomentarz.isVisible
      );
      return true;
    } catch (error) {
      console.error('Ankieta form is not working correctly', error);
      return false;
    }
  }
}

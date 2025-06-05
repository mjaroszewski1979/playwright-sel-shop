import { test, expect } from '../pages/basePage';
import { config } from '../utils/config';


/**
 * Test to verify that the user is correctly navigated to the "Addresses" page.
 * 
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the "My Account" page.
 * 3. Log in using valid credentials.
 * 4. Click the "Addresses" link.
 * 5. Assert that the current page is the "Addresses" page.
 */
test('Verify Addresses page URL', async ({ 
  mainPage,
  mojeKontoPage,
  adresyPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickAdresyLink();

    expect(await adresyPage.verifyUserIsOnAdresyPage()).toBe(true);
  });

  /**
 * Test to verify that the "Edit Address" section is displayed correctly.
 * 
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the "My Account" page.
 * 3. Log in using valid credentials.
 * 4. Click the "Addresses" link.
 * 5. Assert that the "Edit Address" section is visible and rendered properly.
 */
test('Verify correct rendering of Edit Address section', async ({ 
  mainPage,
  mojeKontoPage,
  adresyPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickAdresyLink();
    expect(await adresyPage.isEditAddressSectionDisplayedCorrectly()).toBe(true);
  });

  /**
 * Test to verify that editing the billing address field works as expected.
 * 
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the "My Account" page.
 * 3. Log in using valid credentials.
 * 4. Click the "Addresses" link.
 * 5. Assert that the billing address can be edited and the changes are correctly applied.
 */
test('Verify billing address edit functionality', async ({ 
  mainPage,
  mojeKontoPage,
  adresyPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickAdresyLink();

    expect(await adresyPage.isEditingBillingAddressWorksCorrectly()).toBe(true);
  });
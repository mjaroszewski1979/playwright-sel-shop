import { test, expect } from '../pages/basePage';
import { config } from '../utils/config';


/**
 * Test to verify that the user is correctly redirected to the "Account Details" page after logging in.
 *
 * Steps:
 * 1. Navigate to the main page.
 * 2. Open the "My Account" page.
 * 3. Log in using valid credentials.
 * 4. Click the "Account Details" link from the user account menu.
 * 5. Assert that the current URL matches the expected one for the "Account Details" page.
 */
test('Verify URL of Account Details page', async ({ 
  mainPage,
  mojeKontoPage,
  szczegolyKontaPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickSzczegolyKontaLink();

    expect(await szczegolyKontaPage.verifyUserIsOnSzczegolyKontaPage()).toBe(true);
  });

  /**
 * Test to verify that the input fields on the "Account Details" page are prefilled with the correct values.
 *
 * Steps:
 * 1. Navigate to the main page.
 * 2. Open the "My Account" page.
 * 3. Log in using valid credentials.
 * 4. Navigate to the "Account Details" page.
 * 5. Assert that input fields such as first name, last name, and email contain the expected user data.
 */
test('Verify correctness of input field values on Account Details page', async ({ 
  mainPage,
  mojeKontoPage,
  szczegolyKontaPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickSzczegolyKontaLink();

    expect(await szczegolyKontaPage.isAccountDetailSectionDisplayedCorrectly()).toBe(true);
  });
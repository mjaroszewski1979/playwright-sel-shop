import { test, expect } from '../pages/basePage';
import { config } from '../utils/config';

/**
 * Test to verify that the user is correctly redirected to the "Downloads" page after logging in.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the "My Account" page.
 * 3. Log in with valid credentials.
 * 4. Click the "Downloads" link in the account menu.
 * 5. Assert that the current URL matches the expected URL for the "Downloads" page.
 */
test('Verify URL of Downloads page', async ({ mainPage, mojeKontoPage, plikiDoPobraniaPage }) => {
  await mainPage.goto();
  await mainPage.gotoMojeKontoPage();
  await mojeKontoPage.login(config.username, config.password);
  await mojeKontoPage.clickPlikiDoPobraniaLink();

  expect(await plikiDoPobraniaPage.verifyUserIsOnPlikiDoPobraniaPage()).toBe(true);
});

/**
 * Test to verify that the expected information message is correctly displayed on the "Downloads" page.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the "My Account" page.
 * 3. Log in with valid credentials.
 * 4. Click the "Downloads" link in the account menu.
 * 5. Assert that the informational message is visible and contains the correct text.
 */
test('Verify visibility and correctness of the info message on Downloads page', async ({
  mainPage,
  mojeKontoPage,
  plikiDoPobraniaPage,
}) => {
  await mainPage.goto();
  await mainPage.gotoMojeKontoPage();
  await mojeKontoPage.login(config.username, config.password);
  await mojeKontoPage.clickPlikiDoPobraniaLink();

  expect(await plikiDoPobraniaPage.isInfoMessageDisplayedCorrectly()).toBe(true);
});

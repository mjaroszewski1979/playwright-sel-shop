import { test, expect } from '../pages/basePage';

/**
 * Test to verify that the title of the "Survey" page matches the expected value.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the "Survey" page.
 * 3. Assert that the page title matches the expected title.
 */
test('Verify Survey page title', async ({ mainPage, ankietaPage }) => {
  await mainPage.goto();
  await mainPage.gotoAnkietaPage();

  expect(await ankietaPage.isTitleMatches()).toBe(true);
});

/**
 * Test to verify that the user is correctly navigated to the "Survey" page by checking the URL.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the "Survey" page.
 * 3. Assert that the current page URL is correct for the "Survey" page.
 */
test('Verify Survey page URL', async ({ mainPage, ankietaPage }) => {
  await mainPage.goto();
  await mainPage.gotoAnkietaPage();

  expect(await ankietaPage.verifyUserIsOnAnkietaPage()).toBe(true);
});

/**
 * Test to verify that alert is handled properly and contains correct text.
 *
 * Steps:
 * Navigates to the main page and then to the "Ankieta" page.
 * It verifies that:
 *  - An alert dialog is correctly triggered after clicking the designated button.
 *  - The alert contains the expected message.
 *  - The alert is properly accepted (closed).
 *  - The button that triggered the alert remains visible afterward.
 *
 * Expected Result:
 * The alert should be handled without error, with correct message content and
 * proper dismissal behavior.
 */
test('Verify alert is handled properly and contain correct text', async ({
  mainPage,
  ankietaPage,
}) => {
  await mainPage.goto();
  await mainPage.gotoAnkietaPage();

  expect(await ankietaPage.isAlertHandledCorrectly()).toBe(true);
});

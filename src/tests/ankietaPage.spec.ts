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

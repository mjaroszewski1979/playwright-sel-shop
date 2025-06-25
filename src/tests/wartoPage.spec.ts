import { test, expect } from '../pages/basePage';
import { WartoPage } from '../pages/wartoPage';

/**
 * Test to verify that the warto page title matches the expected value.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the warto page.
 * 3. Assert that the page title is correct.
 */
test('Verify Warto page title', async ({ mainPage, ankietaPage, wartoPage }) => {
  await mainPage.goto();
  await mainPage.gotoAnkietaPage();
  await ankietaPage.clickButtonNewWindow();
  const newPage = await ankietaPage.getNewPage();
  expect(newPage).not.toBeNull();
  if (newPage) {
    const wartoPage = new WartoPage(newPage);
    expect(await wartoPage.isTitleMatches()).toBe(true);
  }
});

/**
 * Test to verify that the warto page URL is correct after opening a new window.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the "Survey" (Ankieta) page.
 * 3. Click the button that opens a new window.
 * 4. Switch to the newly opened page.
 * 5. Assert that the URL of the new page matches the expected warto page URL.
 *
 * Expected Result:
 * The newly opened window should display the "Warto" page with the correct URL.
 */
test('Verify Warto page URL', async ({ mainPage, ankietaPage }) => {
  await mainPage.goto();
  await mainPage.gotoAnkietaPage();
  await ankietaPage.clickButtonNewWindow();
  const newPage = await ankietaPage.getNewPage();
  expect(newPage).not.toBeNull();
  if (newPage) {
    const wartoPage = new WartoPage(newPage);
    expect(await wartoPage.verifyUserIsOnWartoPage()).toBe(true);
  }
});

/**
 * Test to verify that clicking the "Close Window" button in the warto page works as expected.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the "Survey" (Ankieta) page.
 * 3. Click the button that opens a new window.
 * 4. Switch to the new window containing the "Warto" page.
 * 5. Fill in the required input field.
 * 6. Click the "Close Window" button.
 * 7. Assert that only one window remains open, indicating the close action was handled correctly.
 *
 * Expected Result:
 * After clicking the close button on the "Warto" page, the window should be closed,
 * and only the original browser tab should remain open.
 */
test('Verify closing current window works correctly', async ({ mainPage, ankietaPage }) => {
  await mainPage.goto();
  await mainPage.gotoAnkietaPage();
  await ankietaPage.clickButtonNewWindow();
  const newPage = await ankietaPage.getNewPage();
  expect(newPage).not.toBeNull();
  if (newPage) {
    const wartoPage = new WartoPage(newPage);
    expect(await wartoPage.isWindowClosedAfterClickButton()).toBe(true);
  }
});

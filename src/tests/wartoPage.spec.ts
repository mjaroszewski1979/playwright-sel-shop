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

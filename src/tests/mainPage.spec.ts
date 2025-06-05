import { test, expect } from '../pages/basePage';


/**
 * Test to verify that the title of the home page is correct.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Assert that the page title matches the expected value.
 */
test('Verify Home page title', async ({ 
  mainPage
 }) => {
  await mainPage.goto();
  expect(await mainPage.isTitleMatches()).toBe(true);
});

/**
 * Test to verify that the correct number of navigation menu items is displayed.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Assert that the number of menu items is correct.
 */
test('Verify number of navigation menu items', async ({ 
  mainPage
 }) => {
  await mainPage.goto();
  expect(await mainPage.isNumberOfMenuItemsCorrect()).toBe(true);
});

/**
 * Test to verify that the text labels of the navigation menu items are correct.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Assert that the text of each menu item matches the expected value.
 */
test('Verify text of navigation menu items', async ({ 
  mainPage
 }) => {
  await mainPage.goto();
  expect(await mainPage.isTextOfMenuItemsCorrect()).toBe(true);
});

/**
 * Test to verify that the correct number of product elements is displayed on the home page.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Assert that the number of product items matches the expected count.
 */
test('Verify number of product items on Home page', async ({ 
  mainPage
 }) => {
  await mainPage.goto();
  expect(await mainPage.isNumberOfProductItemsCorrect()).toBe(true);
});

import { test, expect } from '../pages/basePage';

/**
 * Test to verify that the user is correctly redirected to the "Balls" category page (Pilki).
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Click on the first product.
 * 3. Click on the "Balls" category link from the product details page.
 * 4. Assert that the current URL matches the expected "Balls" page URL.
 */
test('Verify URL of Balls category page', async ({ 
  mainPage,
  firstProductPage,
  pilkiPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductLink();
    await firstProductPage.clickPilkiCategoryLink();
  
    expect(await pilkiPage.verifyUserIsOnPilkiPage()).toBe(true);
  });

  /**
 * Test to verify that the title of the "Balls" category page is correct.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Click on the first product.
 * 3. Click on the "Balls" category link.
 * 4. Assert that the page title matches the expected value.
 */
test('Verify title of Balls category page', async ({ 
  mainPage,
  firstProductPage,
  pilkiPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductLink();
    await firstProductPage.clickPilkiCategoryLink();

    expect(await pilkiPage.isTitleMatches()).toBe(true);
  });

  /**
 * Test to verify that the listed products belong to the correct category.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Click on the first product.
 * 3. Click on the "Balls" category link.
 * 4. Assert that each displayed product matches the expected category.
 */
test('Verify correct product categorization on Balls page', async ({ 
  mainPage,
  firstProductPage,
  pilkiPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductLink();
    await firstProductPage.clickPilkiCategoryLink();

    expect(await pilkiPage.isProductDescriptionMatchesCorrectCategory()).toBe(true);
  });

  /**
 * Test to verify ascending price sorting functionality on the "Balls" category page.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Click on the first product.
 * 3. Click on the "Balls" category link.
 * 4. Select the "Price: Low to High" sorting option.
 * 5. Assert that products are correctly sorted in ascending price order.
 */
test('Verify product sorting by ascending price on Balls page', async ({ 
  mainPage,
  firstProductPage,
  pilkiPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductLink();
    await firstProductPage.clickPilkiCategoryLink();
    await pilkiPage.selectAscendingOrderOption();

    expect(await pilkiPage.isSortingProductsByPriceWorksCorrectly()).toBe(true);
  });
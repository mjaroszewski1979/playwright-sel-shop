import { test, expect } from '../pages/basePage';


/**
 * Test to verify that the title of the product page for "Kipsta 100 Ball" matches the expected value.
 * 
 * Steps:
 * 1. Navigate to the home page.
 * 2. Click on the first product.
 * 3. Assert that the product page title matches the expected title.
 */
test('Verify product page title for Kipsta 100 Ball', async ({ 
  mainPage,
  firstProductPage
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductLink();

    expect(await firstProductPage.isTitleMatches()).toBe(true);
  });

  /**
 * Test to verify that a confirmation message is displayed after adding a product to the basket.
 * 
 * Steps:
 * 1. Navigate to the home page.
 * 2. Click on the first product.
 * 3. Click the "Add to Basket" button.
 * 4. Assert that the "Product added to basket" message is visible.
 */
test('Verify visibility of "product added to basket" message', async ({ 
  mainPage,
  firstProductPage
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductLink();
    await firstProductPage.clickGoToBasketButton();

    expect(await firstProductPage.isAddedToBasketMessageDisplayed()).toBe(true);
  });

  /**
 * Test to verify that all product information on the product page is displayed correctly.
 * 
 * Steps:
 * 1. Navigate to the home page.
 * 2. Click on the first product.
 * 3. Assert that all essential product information sections are present and properly rendered.
 */
test('Verify correctness of displayed product information', async ({ 
  mainPage,
  firstProductPage
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductLink();

    expect(await firstProductPage.isProductSectionDisplayedCorrectly()).toBe(true);
  });

  /**
 * Test to verify that the number of user reviews shown matches the actual number.
 * 
 * Steps:
 * 1. Navigate to the home page.
 * 2. Click on the first product.
 * 3. Click the "Ratings" section.
 * 4. Assert that the displayed review count is accurate.
 */
test('Verify user review count matches displayed number', async ({ 
  mainPage,
  firstProductPage
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductLink();
    await firstProductPage.clickRatingLink();

    expect(await firstProductPage.isRatingCountMatches()).toBe(true);
  });
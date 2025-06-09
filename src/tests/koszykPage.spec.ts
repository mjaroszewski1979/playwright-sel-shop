import { test, expect } from '../pages/basePage';

/**
 * Test to verify that the shopping cart page title matches the expected value.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the shopping cart page.
 * 3. Assert that the page title is correct.
 */
test('Verify Cart page title', async ({ mainPage, koszykPage }) => {
  await mainPage.goto();
  await mainPage.gotoKoszykPage();

  expect(await koszykPage.isTitleMatches()).toBe(true);
});

/**
 * Test to verify that the URL of the shopping cart page is correct.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the shopping cart page.
 * 3. Assert that the URL matches the expected one.
 */
test('Verify Cart page URL', async ({ mainPage, koszykPage }) => {
  await mainPage.goto();
  await mainPage.gotoKoszykPage();

  expect(await koszykPage.verifyUserIsOnKoszykPage()).toBe(true);
});

/**
 * Test to verify that the product link is visible in the cart after adding the product.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the first product page and add it to the cart.
 * 3. Open the cart page.
 * 4. Assert that the product link is displayed.
 */
test('Verify product link visibility in cart', async ({
  mainPage,
  firstProductPage,
  koszykPage,
}) => {
  await mainPage.goto();
  await mainPage.clickFirstProductLink();
  await firstProductPage.clickGoToBasketButton();
  await mainPage.gotoKoszykPage();

  expect(await koszykPage.isFirstProductLinkDisplayed()).toBe(true);
});

/**
 * Test to verify that a product can be successfully removed from the shopping cart.
 *
 * Steps:
 * 1. Navigate to the first product page.
 * 2. Add the product to the cart and view the cart.
 * 3. Remove the product.
 * 4. Assert that the removal confirmation message is shown.
 */
test('Verify product removal from cart', async ({ mainPage, firstProductPage, koszykPage }) => {
  await mainPage.goto();
  await mainPage.clickFirstProductLink();
  await firstProductPage.clickGoToBasketButton();
  await firstProductPage.clickViewBasketLink();
  await koszykPage.clickRemoveProductLink();

  expect(await koszykPage.isRemovedProductMessageDisplayed()).toBe(true);
});

/**
 * Test to verify that the correct number of products appears in the cart after selection.
 *
 * Steps:
 * 1. Navigate to the first product page.
 * 2. Set product quantity, add to cart, and view cart.
 * 3. Assert that the number of products in the cart is correct.
 */
test('Verify correct number of products in cart', async ({
  mainPage,
  firstProductPage,
  koszykPage,
}) => {
  await mainPage.goto();
  await mainPage.clickFirstProductLink();
  await firstProductPage.fillNumberOfProducts();
  await firstProductPage.clickGoToBasketButton();
  await firstProductPage.clickViewBasketLink();

  expect(await koszykPage.isNumberOfProductsCorrect()).toBe(true);
});

/**
 * Test to verify that a product can be added to the cart using the hover-visible "Add to cart" button.
 *
 * Steps:
 * 1. Hover over the product.
 * 2. Click the "Add to cart" button.
 * 3. View the cart.
 * 4. Assert that the product link is displayed in the cart.
 */
test('Verify adding product to cart using hover button', async ({ mainPage, koszykPage }) => {
  await mainPage.goto();
  await mainPage.clickFirstProductAddToCartButton();
  await mainPage.clickFirstProductViewCartButton();

  expect(await koszykPage.isFirstProductLinkDisplayed()).toBe(true);
});

/**
 * Test to verify that two different products can be added to the cart using hover buttons.
 *
 * Steps:
 * 1. Add the first and second products using hover-enabled buttons.
 * 2. Navigate to the cart page.
 * 3. Assert that both product links are visible in the cart.
 */
test('Verify adding two different products to cart via hover buttons', async ({
  mainPage,
  koszykPage,
}) => {
  await mainPage.goto();
  await mainPage.clickFirstProductAddToCartButton();
  await mainPage.clickSecondProductAddToCartButton();
  await mainPage.gotoKoszykPageScroll();

  expect(
    (await koszykPage.isFirstProductLinkDisplayed()) &&
      (await koszykPage.isSecondProductLinkDisplayed())
  ).toBe(true);
});

/**
 * Test to verify that the total amount in the cart updates correctly after changing quantity.
 *
 * Steps:
 * 1. Add a product to the cart and view the cart.
 * 2. Update the quantity of the product.
 * 3. Assert that the total amount reflects the new quantity.
 */
test('Verify cart total amount updates after quantity change', async ({ mainPage, koszykPage }) => {
  await mainPage.goto();
  await mainPage.clickFirstProductAddToCartButton();
  await mainPage.clickFirstProductViewCartButton();
  await koszykPage.updateBasketQuantity();

  expect(await koszykPage.isUpdatedTotalAmountCorrect()).toBe(true);
});

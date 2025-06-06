import { test, expect } from '../pages/basePage';
import { config } from '../utils/config';


/**
 * Test to verify that the user is redirected to the correct "Orders" page URL after logging in.
 *
 * Steps:
 * 1. Navigate to the main page.
 * 2. Go to the "My Account" page.
 * 3. Log in with valid credentials.
 * 4. Click the "Orders" link in the user account menu.
 * 5. Assert that the current URL matches the expected URL of the "Orders" page.
 */
test('Verify URL of Orders page', async ({ 
  mainPage,
  mojeKontoPage,
  zamowieniaPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickZamowieniaLink();

    expect(await zamowieniaPage.verifyUserIsOnZamowieniaPage()).toBe(true);
  });

  /**
 * Test to verify the number of orders displayed on a single page.
 *
 * Steps:
 * 1. Navigate to the main page and log in.
 * 2. Go to the "Orders" page.
 * 3. Assert that the number of displayed orders matches the expected count.
 */
test('Verify number of orders on a single page', async ({ 
  mainPage,
  mojeKontoPage,
  zamowieniaPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickZamowieniaLink();


    expect(await zamowieniaPage.isNumberOfOrdersMatches()).toBe(true);
  });

  /**
 * Test to validate the structure and content of the orders table.
 *
 * Steps:
 * 1. Log in and go to the "Orders" page.
 * 2. Assert that the table headers are displayed correctly and match the expected labels.
 */
test('Verify structure of orders table', async ({ 
  mainPage,
  mojeKontoPage,
  zamowieniaPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickZamowieniaLink();


    expect(await zamowieniaPage.isTextOfTableHeadersCorrect()).toBe(true);
  });

  /**
 * Test to verify that detailed information about an individual order is displayed correctly.
 *
 * Steps:
 * 1. Log in and go to the "Orders" page.
 * 2. Check the content of the order details section.
 * 3. Assert that the order data (e.g. ID, status, total) is accurate and well-formatted.
 */
test('Verify order details', async ({ 
  mainPage,
  mojeKontoPage,
  zamowieniaPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
    await mojeKontoPage.login(config.username, config.password);
    await mojeKontoPage.clickZamowieniaLink();


    expect(await zamowieniaPage.verifyOrderDetails()).toBe(true);
  });

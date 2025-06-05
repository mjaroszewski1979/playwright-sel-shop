import { test, expect } from '../pages/basePage';

/**
 * Test to verify that the user is correctly redirected to the "My Account" page.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Navigate to the "My Account" page.
 * 3. Assert that the current URL matches the expected "My Account" URL.
 */
test('Verify URL of My Account page', async ({ 
  mainPage,
  mojeKontoPage
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
  
    expect(await mojeKontoPage.verifyUserIsOnMojeKontoPage()).toBe(true);
  });

  /**
 * Test to verify successful login with valid username and password.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Navigate to the "My Account" page.
 * 3. Attempt to log in with valid credentials.
 * 4. Assert that the login was successful.
 */
test('Verify login process with valid credentials', async ({ 
  mainPage,
  mojeKontoPage
 }) => {

    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
  
    expect(await mojeKontoPage.isLoginSuccessfull()).toBe(true);
  });

  /**
 * Test to verify login behavior with incorrect username and password.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Navigate to the "My Account" page.
 * 3. Attempt to log in with invalid credentials.
 * 4. Assert that an error message is displayed and login fails as expected.
 */
test('Verify login process with invalid credentials', async ({ 
  mainPage,
  mojeKontoPage
 }) => {

    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
  
    expect(await mojeKontoPage.isIncorrectLoginResolvedProperly()).toBe(true);
  });

  /**
 * Test to verify that the logout process works correctly.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Navigate to the "My Account" page.
 * 3. Perform login and then logout.
 * 4. Assert that the user is successfully logged out and redirected appropriately.
 */
test('Verify logout process works correctly', async ({ 
  mainPage,
  mojeKontoPage
 }) => {

    await mainPage.goto();
    await mainPage.gotoMojeKontoPage();
  
    expect(await mojeKontoPage.isLogoutSuccessfull()).toBe(true);
  });
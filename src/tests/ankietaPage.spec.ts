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

/**
 * Test to verify that a prompt alert is handled correctly with user-provided input.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the "Survey" page.
 * 3. Trigger the prompt alert and provide input.
 * 4. Assert that the alert is accepted with the given input.
 * 5. Verify that the expected behavior or message is displayed after handling the prompt.
 *
 * Expected Result:
 * The prompt alert should be triggered, input should be submitted successfully,
 * and the confirmation of that input should be handled/displayed as expected.
 */
test('Verify prompt alert is handled properly with provided text', async ({
  mainPage,
  ankietaPage,
}) => {
  await mainPage.goto();
  await mainPage.gotoAnkietaPage();

  expect(await ankietaPage.isPromptAlertHandledCorrectly()).toBe(true);
});

/**
 * Test to verify that a confirmation alert is handled properly and contains the expected text.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the "Survey" page.
 * 3. Trigger the confirm alert.
 * 4. Assert that the alert contains the expected message.
 * 5. Accept or dismiss the alert as required.
 * 6. Verify that the result of confirmation is handled correctly on the page.
 *
 * Expected Result:
 * The confirm alert should be displayed with the correct text,
 * and after acceptance or dismissal, the corresponding UI response should be verified.
 */
test('Verify confirm alert is handled properly and contain correct text', async ({
  mainPage,
  ankietaPage,
}) => {
  await mainPage.goto();
  await mainPage.gotoAnkietaPage();

  expect(await ankietaPage.isConfirmAlertHandledCorrectly()).toBe(true);
});

/**
 * Test to verify that the "Process" element is displayed properly and contains the expected text.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the "Survey" page.
 * 3. Trigger the action that displays the "Process" element.
 * 4. Assert that the element is visible and the text content is correct.
 *
 * Expected Result:
 * The "Process" element should be present on the page and display the correct message.
 */
test('Verify proces element is displayed properly and contain correct text', async ({
  mainPage,
  ankietaPage,
}) => {
  await mainPage.goto();
  await mainPage.gotoAnkietaPage();

  expect(await ankietaPage.isProcesElementDisplayedProperly()).toBe(true);
});

/**
 * Test to verify that the right-click (context menu) action displays the correct information paragraph.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the "Survey" page.
 * 3. Right-click on the designated element.
 * 4. Assert that the paragraph with information appears and contains the expected text.
 *
 * Expected Result:
 * After performing a right-click, the correct paragraph should be shown with proper text content.
 */
test('Verify right click info para is displayed properly and contain correct text', async ({
  mainPage,
  ankietaPage,
}) => {
  await mainPage.goto();
  await mainPage.gotoAnkietaPage();

  expect(await ankietaPage.isRightClickInfoParaDisplayedProperly()).toBe(true);
});

/**
 * Test to verify that double-clicking on the designated element displays the correct information paragraph.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the "Survey" page.
 * 3. Perform a double-click on the target element.
 * 4. Assert that the paragraph with information appears and contains the expected text.
 *
 * Expected Result:
 * After a double-click action, the correct paragraph should be displayed with expected text.
 */
test('Verify double click info para is displayed properly and contain correct text', async ({
  mainPage,
  ankietaPage,
}) => {
  await mainPage.goto();
  await mainPage.gotoAnkietaPage();

  expect(await ankietaPage.isDoubleClickInfoParaDisplayedProperly()).toBe(true);
});

/**
 * Test to verify that clicking a specific button opens a new browser window.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the "Survey" page.
 * 3. Click the button expected to open a new window.
 * 4. Assert that a new browser window or tab has been opened.
 *
 * Expected Result:
 * A second browser window should open after clicking the button,
 * and the total count of windows should be equal to 2.
 */
test('Verify that clicking button opens a new window', async ({ mainPage, ankietaPage }) => {
  await mainPage.goto();
  await mainPage.gotoAnkietaPage();

  expect(await ankietaPage.isNewWindowOpenedAfterClickNewWindowButton()).toBe(true);
});

/**
 * Test to verify that the survey form ("Ankieta") functions correctly after submitting.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the "Survey" page.
 * 3. Fill out the form with valid input data.
 * 4. Submit the form.
 * 5. Assert that the form is processed correctly and confirmation is displayed.
 *
 * Expected Result:
 * The form should be submitted successfully and a confirmation or response should appear on the page.
 */
test('Verify that ankieta form is working correctly after submitting', async ({
  mainPage,
  ankietaPage,
}) => {
  await mainPage.goto();
  await mainPage.gotoAnkietaPage();

  expect(await ankietaPage.isAnkietaFormWorksCorrectly()).toBe(true);
});

/**
 * Test to verify that the data displayed after submitting the survey form matches the input provided.
 *
 * Steps:
 * 1. Navigate to the home page.
 * 2. Go to the "Survey" page.
 * 3. Fill out the form with known data.
 * 4. Submit the form.
 * 5. Assert that all displayed data fields match the originally entered input.
 *
 * Expected Result:
 * Each piece of user input should be correctly displayed in the appropriate section after submission.
 */
test('Verify that displayed data matches input after submitting ankieta form', async ({
  mainPage,
  ankietaPage,
}) => {
  await mainPage.goto();
  await mainPage.gotoAnkietaPage();

  expect(await ankietaPage.verifyDisplayedDataMatchesInput()).toBe(true);
});

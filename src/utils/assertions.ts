import { expect, Locator } from '@playwright/test';

/**
 * Verifies that a given element is visible and its exact text content matches the expected text.
 *
 * @param locator - A Playwright Locator object targeting the element to verify.
 * @param expectedText - The exact text the element should contain.
 * @returns A boolean indicating whether the element is visible and contains the expected text.
 */
export async function isElementVisibleWithText(locator: Locator, expectedText: string): Promise<boolean> {
  try {
    await expect(locator).toBeVisible();
    await expect(locator).toHaveText(expectedText);
    return true;
  } catch {
    return false;
  }
}

/**
 * Verifies that a given element is visible and contains the expected substring in its text.
 *
 * @param locator - A Playwright Locator object targeting the element to verify.
 * @param expectedText - A partial string expected to be part of the element's text.
 * @returns A boolean indicating whether the element is visible and contains the expected partial text.
 */
export async function isElementVisibleWithPartialText(locator: Locator, expectedText: string): Promise<boolean> {
  try {
    await expect(locator).toBeVisible();
    await expect(locator).toContainText(expectedText);
    return true;
  } catch {
    return false;
  }
}

/**
 * Verifies that a visible input element contains the expected value.
 *
 * @param locatorName - A Playwright Locator targeting the input field to be checked.
 * @param expectedValue - The value expected to be present in the input field.
 * @returns A boolean indicating whether the input is visible and its value matches the expected one.
 */
export async function isElementVisibleWithCorrectValue(locatorName: Locator, expectedValue: string): Promise<boolean> {
  try {
    await expect(locatorName).toBeVisible();
    const currentValue = await locatorName.inputValue();
    expect(currentValue).toBe(expectedValue);
    return true;
  } catch {
    return false;
  }
}



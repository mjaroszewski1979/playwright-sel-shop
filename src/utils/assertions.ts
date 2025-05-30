import { expect, Locator } from '@playwright/test';


export async function isElementVisibleWithText(locator: Locator, expectedText: string): Promise<boolean> {
  try {
    await expect(locator).toBeVisible();
    await expect(locator).toHaveText(expectedText);
    return true;
  } catch {
    return false;
  }
}

export async function isElementVisibleWithPartialText(locator: Locator, expectedText: string): Promise<boolean> {
  try {
    await expect(locator).toBeVisible();
    await expect(locator).toContainText(expectedText);
    return true;
  } catch {
    return false;
  }
}


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



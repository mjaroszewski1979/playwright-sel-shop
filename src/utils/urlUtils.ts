// src/utils/urlUtils.ts
import { Page, expect } from '@playwright/test';

/**
 * Verifies that the current page URL exactly matches the expected URL.
 *
 * @param page - The Playwright Page object representing the current browser tab.
 * @param expectedUrl - The exact URL that the page is expected to have.
 * @returns A boolean indicating whether the current URL matches the expected one.
 */
export async function isUrlMatches(page: Page, expectedUrl: string): Promise<boolean> {
  try {
    await expect(page).toHaveURL(expectedUrl);
    return true;
  } catch {
    return false;
  }
}

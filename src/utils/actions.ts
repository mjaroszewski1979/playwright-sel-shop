import { Locator, Page } from '@playwright/test';

/**
 * Clicks on the provided element.
 *
 * @param locator - A Playwright Locator object targeting the element to be clicked.
 */
export async function clickElement(locator: Locator): Promise<void> {
  await locator.click();
}

/**
 * Hovers over one element and then clicks another element.
 *
 * @param hoverLocator - A Playwright Locator used to perform the hover action.
 * @param clickLocator - A Playwright Locator used to perform the click after hover.
 */
export async function hoverClickElement(
  hoverLocator: Locator,
  clickLocator: Locator
): Promise<void> {
  await hoverLocator.hover();
  await clickLocator.click();
}

/**
 * Scrolls to the top of the page and then clicks the given element.
 *
 * @param locator - A Playwright Locator targeting the element to be clicked.
 * @param page - The Playwright Page object used to perform the scroll.
 */
export async function scrollClickElement(locator: Locator, page: Page): Promise<void> {
  await page.evaluate(() => window.scrollTo(0, 0));
  await locator.click();
}

/**
 * Generates a random street name in the format "Nowa XXXX",
 * where XXXX is a random 4-digit number.
 *
 * @returns A randomly generated street name string.
 */
export function generateRandomStreet(): string {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `Nowa ${randomNumber}`;
}

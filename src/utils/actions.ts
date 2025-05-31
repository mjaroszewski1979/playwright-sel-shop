import { Locator, Page } from '@playwright/test';

export async function clickElement(locator: Locator): Promise<void> {
    await locator.click();
  }

export async function hoverClickElement(hoverLocator: Locator, clickLocator: Locator): Promise<void> {
    await hoverLocator.hover();
    await clickLocator.click();
  }

export async function scrollClickElement(locator: Locator, page: Page): Promise<void> {
    await page.evaluate(() => window.scrollTo(0, 0));
    await locator.click();
  }


export function generateRandomStreet(): string {
    const randomNumber = Math.floor(1000 + Math.random() * 9000); 
    return `Nowa ${randomNumber}`;
    }
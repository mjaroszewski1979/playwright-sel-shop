import { Locator } from '@playwright/test';

export function generateRandomStreet(): string {
    const randomNumber = Math.floor(1000 + Math.random() * 9000); 
    return `Nowa ${randomNumber}`;
    }

export async function clickElement(locator: Locator): Promise<void> {
    await locator.click();
  }
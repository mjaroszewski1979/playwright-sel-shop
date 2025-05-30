// src/utils/urlUtils.ts
import { Page, expect } from '@playwright/test';


export async function isUrlMatches(page: Page, expectedUrl: string): Promise<boolean> {
  try {
    const currentUrl = page.url();
    expect(currentUrl).toBe(expectedUrl);
    return true;
  } catch {
    return false;
  }
}

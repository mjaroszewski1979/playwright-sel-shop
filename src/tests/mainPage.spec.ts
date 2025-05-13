import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';

test('Weryfikacja tytulu strony glownej', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
  expect(await mainPage.isTitleMatches()).toBe(true);
});

test('Weryfikacja liczby elementow menu', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
  expect(await mainPage.isNumberOfMenuItemsCorrect()).toBe(true);
});

test('Weryfikacja tekstu elementow menu', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
  expect(await mainPage.isTextOfMenuItemsCorrect()).toBe(true);
});

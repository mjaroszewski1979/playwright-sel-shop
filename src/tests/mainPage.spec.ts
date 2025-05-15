import { test, expect } from '../pages/basePage';


test('Weryfikacja tytulu strony glownej', async ({ 
  mainPage
 }) => {
  await mainPage.goto();
  expect(await mainPage.isTitleMatches()).toBe(true);
});

test('Weryfikacja liczby elementow menu', async ({ 
  mainPage
 }) => {
  await mainPage.goto();
  expect(await mainPage.isNumberOfMenuItemsCorrect()).toBe(true);
});

test('Weryfikacja tekstu elementow menu', async ({ 
  mainPage
 }) => {
  await mainPage.goto();
  expect(await mainPage.isTextOfMenuItemsCorrect()).toBe(true);
});

test('Weryfikacja liczby produktow', async ({ 
  mainPage
 }) => {
  await mainPage.goto();
  expect(await mainPage.isNumberOfProductItemsCorrect()).toBe(true);
});

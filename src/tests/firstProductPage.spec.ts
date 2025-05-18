import { test, expect } from '../pages/basePage';



test('Weryfikacja tytulu strony Pilka Kipsta 100', async ({ 
  mainPage,
  firstProductPage
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductLink();

    expect(await firstProductPage.isTitleMatches()).toBe(true);
  });

test('Weryfikacja widocznosci komunikatu o dodaniu produktu do koszyka', async ({ 
  mainPage,
  firstProductPage
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductLink();
    await firstProductPage.clickGoToBasketButton();

    expect(await firstProductPage.isAddedToBasketMessageDisplayed()).toBe(true);
  });
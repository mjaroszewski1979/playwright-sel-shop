import { test, expect } from '../pages/basePage';



test('Weryfikacja tytulu strony Pilki', async ({ 
  mainPage,
  firstProductPage,
  pilkiPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductLink();
    await firstProductPage.clickPilkiCategoryLink();

    expect(await pilkiPage.isTitleMatches()).toBe(true);
  });

test('Weryfikacja poprawnosci kategoryzowania produktów', async ({ 
  mainPage,
  firstProductPage,
  pilkiPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductLink();
    await firstProductPage.clickPilkiCategoryLink();

    expect(await pilkiPage.isProductDescriptionMatchesCorrectCategory()).toBe(true);
  });

test('Weryfikacja poprawnosci sortowania produktów - cena rosnąco', async ({ 
  mainPage,
  firstProductPage,
  pilkiPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductLink();
    await firstProductPage.clickPilkiCategoryLink();
    await pilkiPage.selectAscendingOrderOption();

    expect(await pilkiPage.isSortingProductsByPriceWorksCorrectly()).toBe(true);
  });
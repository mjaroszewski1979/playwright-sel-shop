import { test, expect } from '../pages/basePage';
import { KoszykPage } from '../pages/koszykPage';



test('Weryfikacja tytulu strony Koszyk', async ({ 
  mainPage,
  koszykPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoKoszykPage();

    expect(await koszykPage.isTitleMatches()).toBe(true);
  });

test('Weryfikacja widocznosci linku dodanego produktu w koszyku', async ({ 
  mainPage,
  firstProductPage,
  koszykPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductLink();
    await firstProductPage.clickGoToBasketButton();
    await mainPage.gotoKoszykPage();

    expect(await koszykPage.isFirstProductLinkDisplayed()).toBe(true);
  });

test('Weryfikacja poprawnosci usuniecia dodanego produktu z koszyka', async ({ 
  mainPage,
  firstProductPage,
  koszykPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductLink();
    await firstProductPage.clickGoToBasketButton();
    await firstProductPage.clickViewBasketLink();
    await koszykPage.clickRemoveProductLink();

    expect(await koszykPage.isRemovedProductMessageDisplayed()).toBe(true);
  });

test('Weryfikacja poprawnej liczby produktow w koszyku zakupowym', async ({ 
  mainPage,
  firstProductPage,
  koszykPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductLink();
    await firstProductPage.fillNumberOfProducts();
    await firstProductPage.clickGoToBasketButton();
    await firstProductPage.clickViewBasketLink();

    expect(await koszykPage.isNumberOfProductsCorrect()).toBe(true);
  });

  test('Weryfikacja dodawania produktu do koszyka za pomoca przycisku widocznego po hover', async ({ 
  mainPage,
  koszykPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductAddToCartButton();
    await mainPage.clickFirstProductViewCartButton();

    expect(await koszykPage.isFirstProductLinkDisplayed()).toBe(true);
  });

  test('Weryfikacja dodawania dwóch różnych produktów do koszyka za pomoca przycisku widocznego po hover', async ({ 
  mainPage,
  koszykPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductAddToCartButton();
    await mainPage.clickSecondProductAddToCartButton();
    await mainPage.gotoKoszykPageScroll();

    expect(await koszykPage.isFirstProductLinkDisplayed() && await koszykPage.isSecondProductLinkDisplayed()).toBe(true);
  });
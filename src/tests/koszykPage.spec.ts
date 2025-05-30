import { test, expect } from '../pages/basePage';
import { clickElement } from '../utils/actions';



test('Weryfikacja tytulu strony Koszyk', async ({ 
  mainPage,
  koszykPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoKoszykPage();

    expect(await koszykPage.isTitleMatches()).toBe(true);
  });

test('Weryfikacja url strony Koszyk', async ({ 
  mainPage,
  koszykPage
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoKoszykPage();
  
    expect(await koszykPage.verifyUserIsOnKoszykPage()).toBe(true);
  });

test('Weryfikacja widocznosci linku dodanego produktu w koszyku', async ({ 
  mainPage,
  firstProductPage,
  koszykPage,
 }) => {
  
    await mainPage.goto();
    await clickElement(mainPage.firstProductLink);
    await clickElement(firstProductPage.goToBasketButton);
    await clickElement(mainPage.koszykMenu);

    expect(await koszykPage.isFirstProductLinkDisplayed()).toBe(true);
  });

test('Weryfikacja poprawnosci usuniecia dodanego produktu z koszyka', async ({ 
  mainPage,
  firstProductPage,
  koszykPage,
 }) => {
  
    await mainPage.goto();
    await clickElement(mainPage.firstProductLink);
    await clickElement(firstProductPage.goToBasketButton);
    await clickElement(firstProductPage.viewBasketLink);
    await clickElement(koszykPage.removeLink);

    expect(await koszykPage.isRemovedProductMessageDisplayed()).toBe(true);
  });

test('Weryfikacja poprawnej liczby produktow w koszyku zakupowym', async ({ 
  mainPage,
  firstProductPage,
  koszykPage,
 }) => {
  
    await mainPage.goto();
    await clickElement(mainPage.firstProductLink);
    await firstProductPage.fillNumberOfProducts();
    await clickElement(firstProductPage.goToBasketButton);
    await clickElement(firstProductPage.viewBasketLink);

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

  test('Weryfikacja aktualizacji kwoty całkowitej w koszyku', async ({ 
  mainPage,
  koszykPage,
 }) => {
  
    await mainPage.goto();
    await mainPage.clickFirstProductAddToCartButton();
    await mainPage.clickFirstProductViewCartButton();
    await koszykPage.updateBasketQuantity();

    expect(await koszykPage.isUpdatedTotalAmountCorrect()).toBe(true);
  });
import { test, expect } from '../pages/basePage';
import { clickElement } from '../utils/actions';



test('Weryfikacja tytulu strony Pilka Kipsta 100', async ({ 
  mainPage,
  firstProductPage
 }) => {
  
    await mainPage.goto();
    await clickElement(mainPage.firstProductLink);

    expect(await firstProductPage.isTitleMatches()).toBe(true);
  });

test('Weryfikacja widocznosci komunikatu o dodaniu produktu do koszyka', async ({ 
  mainPage,
  firstProductPage
 }) => {
  
    await mainPage.goto();
    await clickElement(mainPage.firstProductLink);
    await clickElement(firstProductPage.goToBasketButton);

    expect(await firstProductPage.isAddedToBasketMessageDisplayed()).toBe(true);
  });

test('Weryfikacja poprawnosci informacji dotyczacych produktu', async ({ 
  mainPage,
  firstProductPage
 }) => {
  
    await mainPage.goto();
    await clickElement(mainPage.firstProductLink);

    expect(await firstProductPage.isProductSectionDisplayedCorrectly()).toBe(true);
  });

test('Weryfikacja zgodnosci liczby opinii uzytkownikow', async ({ 
  mainPage,
  firstProductPage
 }) => {
  
    await mainPage.goto();
    await clickElement(mainPage.firstProductLink);
    await clickElement(firstProductPage.ratingLink);

    expect(await firstProductPage.isRatingCountMatches()).toBe(true);
  });
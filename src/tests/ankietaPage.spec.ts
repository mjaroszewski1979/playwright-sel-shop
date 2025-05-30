import { test, expect } from '../pages/basePage';



test('Weryfikacja tytulu strony Ankieta', async ({ 
  mainPage,
  ankietaPage
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoAnkietaPage();
  
    expect(await ankietaPage.isTitleMatches()).toBe(true);
  });

test('Weryfikacja url strony Ankieta', async ({ 
  mainPage,
  ankietaPage
 }) => {
  
    await mainPage.goto();
    await mainPage.gotoAnkietaPage();
  
    expect(await ankietaPage.verifyUserIsOnAnkietaPage()).toBe(true);
  });
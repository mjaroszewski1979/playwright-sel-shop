import { faker } from '@faker-js/faker';

/**
 * Generates randomized test data for the "Ankieta" (Survey) form using the Faker library.
 *
 * This function returns a consistent object structure with dynamically generated values
 * to simulate real-world user input across various form fields. The purpose is to provide
 * varied and realistic test input data for automated test scenarios.
 *
 * Field breakdown:
 * - imie: Random female first name.
 * - nazwisko: Random last name.
 * - plec: Randomly selected gender ("Kobieta" or "Mężczyzna").
 * - wiek: Randomly selected age range from predefined categories.
 * - produkt: Random product name selected from a predefined list.
 * - sport: Random sport name selected from common options.
 * - marka: Random brand name selected from well-known sports brands.
 * - komentarz: Randomly generated sentence to simulate a comment field.
 * - dataZakupu: Random future date (within one year), formatted as 'dd-mm-yyyy'.
 *
 * The function is immediately executed to export a single `testData` object
 * that can be used directly in test cases.
 */
const generateAnkietaData = () => ({
  imie: faker.person.firstName('female'),
  nazwisko: faker.person.lastName(),
  plec: faker.helpers.arrayElement(['Kobieta', 'Mężczyzna']),
  wiek: faker.helpers.arrayElement([
    'mniej niż 15',
    '15-19',
    '20-29',
    '30-39',
    '40-60',
    'więcej niż 60',
  ]),
  produkt: faker.helpers.arrayElement([
    'Koszulka meczowa',
    'Piłka nożna',
    'Buty sportowe',
    'Torba sportowa',
  ]),
  sport: faker.helpers.arrayElement(['pilkaNozna', 'siatkowka', 'koszykowka', 'bieganie', 'inny']),
  marka: faker.helpers.arrayElement(['adidas', 'nike', 'kappa', 'lotto', 'puma']),
  komentarz: faker.lorem.sentence(),
  dataZakupu: faker.date
    .future({ years: 1 })
    .toLocaleDateString('pl-PL')
    .replace(/\./g, '-')
    .padStart(10, '0'),
});

export const testData = generateAnkietaData();

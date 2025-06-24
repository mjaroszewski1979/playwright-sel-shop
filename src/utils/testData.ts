import { faker } from '@faker-js/faker';

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

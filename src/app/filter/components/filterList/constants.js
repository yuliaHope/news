import { NO_SELECTED } from '../../../constants';

export const filters = {
  sources: 'Source',
  country: 'Country',
  category: 'Category',
};

export const categories = [
  NO_SELECTED,
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

export const countries = [
  NO_SELECTED,
  'ae',
  'ar',
  'at',
  'au',
  'be',
  'bg',
  'br',
  'ca',
  'ch',
  'cn',
  'co',
  'cu',
  'cz',
  'de',
  'eg',
  'fr',
  'gb',
  'gr',
  'hk',
  'hu',
  'id',
  'ie',
  'il',
  'in',
  'it',
  'jp',
  'kr',
  'lt',
  'lv',
  'ma',
  'mx',
  'my',
  'ng',
  'nl',
  'no',
  'nz',
  'ph',
  'pl',
  'pt',
  'ro',
  'rs',
  'ru',
  'sa',
  'se',
  'sg',
  'si',
  'sk',
  'th',
  'tr',
  'tw',
  'ua',
  'us',
  've',
  'za',
];

export const mapOptions = options =>
  options.map(option => ({ id: option, name: option }));

export const mappedCountries = mapOptions(countries);
export const mappedCategories = mapOptions(categories);

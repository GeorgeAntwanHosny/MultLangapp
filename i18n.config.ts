import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en, ar} from './src/translations';
const {languageDetectorPlugin} = require('./src/utils/languageDetectorPlugin');

const LANGUAGES = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

export const LANG_CODES = Object.keys(LANGUAGES);

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    compatibilityJSON: 'v3',
    resources: LANGUAGES,
    //language to use if translations in user language are not available
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;

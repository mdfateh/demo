import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
//@ts-ignore
import EN from '../src/Utilities/i18n/en.json';
//@ts-ignore
import ES from '../src/Utilities/i18n/es.json';

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: {translation: EN},
      es: {translation: ES},
    },
    lng: 'en',
    // fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;

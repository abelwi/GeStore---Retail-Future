// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../src/locales/en.json';
import vi from '../src/locales/vi.json';
import ja from '../src/locales/ja.json';
import ko from '../src/locales/ko.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
      ja: { translation: ja },
      ko: { translation: ko }
    },
    lng: localStorage.getItem('userLanguage') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

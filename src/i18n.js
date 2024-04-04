import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from './translations/en.json';
import tr from './translations/tr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'tr', // if you're using a language detector, do not define the lng option
    resources: {
      en,
      tr,
    },
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
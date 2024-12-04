import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Varsayılan dil
    debug: true,       // Hata ayıklama açık
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Dil dosyası yolu
    },
    ns: ['common'],      // Kullanılan namespace
    defaultNS: 'common', // Varsayılan namespace
    interpolation: {
      escapeValue: false, // React için gerekli
    },
  });

export default i18n;
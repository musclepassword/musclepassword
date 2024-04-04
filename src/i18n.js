import i18n from 'i18next';
import EN from './translations/en.json';
import TR from './translations/tr.json';

i18n.init({
  lng: localStorage.getItem('i18n').toLowerCase(), // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: EN,
    tr: TR,
  }
});

export default i18n;
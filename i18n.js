import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true, // Konsolda hata mesajlarını gösterir
    interpolation: {
      escapeValue: false, // React ile XSS korumasına gerek yok
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Çeviri dosyalarının yolu
    },
  });

export default i18n;
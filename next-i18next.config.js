const LocizeBackend = require('i18next-locize-backend/cjs')
const LocalStorageBackend = require('i18next-localstorage-backend').default
const isBrowser = typeof window !== 'undefined'

module.exports = {
    i18n: {
        locales: ["en", "tr"], // Desteklenen diller
        defaultLocale: "en",   // Varsayılan dil
        localeDetection: true, // Dil otomatik algılama
        debug: true,
        backend: {
            backends: isBrowser ? [LocalStorageBackend, LocizeBackend] : [],
          },
    },
};
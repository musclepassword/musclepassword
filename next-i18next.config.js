module.exports = {
  i18n: {
      defaultLocale: 'en',
      locales: ['en', 'tr'],
      localeDetection: false,
  },
  fallbackLng: 'en',
  ns: ['common'],
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
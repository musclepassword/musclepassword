const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'tr'], // Desteklenen diller
    defaultLocale: 'en', // Varsayılan dil
    localePath: path.resolve('./public/locales'), // Dil dosyalarının yolu
    localeDetection: false, // Otomatik dil algılama devre dışı
    debug: true,
  },
};
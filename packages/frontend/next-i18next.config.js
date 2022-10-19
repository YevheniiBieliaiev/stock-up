module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ua'],
    localeDetection: false
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development'
};

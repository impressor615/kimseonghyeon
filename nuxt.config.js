module.exports = {
  head: {
    title: 'SEONGHYEON KIM',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Seonghyeon Kim Wkebsite' }
    ],
  },
  css: [
    '~/assets/stylesheets/global.scss',
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-url': {},
        'postcss-cssnext': {
          features: {
            rem: {
              html: false,
            },
          },
        },
      },
    },
  },
};

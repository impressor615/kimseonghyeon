module.exports = {
  head: {
    title: 'SEONGHYEON KIM',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Seonghyeon Kim Wkebsite' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/my-favicon.ico',
      },
    ],
  },
  css: [
    '~/assets/stylesheets/global.scss',
  ],
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/axios',
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

const title = 'Col·lectiu Ovidi Montllor'
const description = 'Col·lectiu Ovidi Montllor de música en valencià'
const keywords =
  'ovidi, montllor, col·lectiu, música, valencià, premis ovidi, COMcerts'
const url = 'https://elcom.cat'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title,
    htmlAttrs: {
      lang: 'ca',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#be1f30' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'keywords', name: 'keywords', content: keywords },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:locale', property: 'og:locale', content: 'ca' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      { hid: 'og:image', property: 'og:image', content: url + 'thumbnail.png' },
      { hid: 'og:url', property: 'og:url', content: url },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: '@premisovidi',
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:title', property: 'twitter:title', content: title },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: description,
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: url + 'ogimage.png',
      },
      { hid: 'twitter:url', property: 'twitter:url', content: url },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '30x30', href: '/favicon.png' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/sass/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/api.js', '~/plugins/carousel.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://www.npmjs.com/package/nuxt-fontawesome
    'nuxt-fontawesome',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Router
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'pages',
        path: '*',
        component: resolve(__dirname, 'pages/page.vue'),
      })
    },
  },

  // Style resources
  styleResources: {
    // your settings here
    scss: [
      './assets/sass/_variables.scss',
      'bootstrap/scss/_functions.scss',
      'bootstrap/scss/_variables.scss',
      'bootstrap/scss/_mixins.scss',
    ],
  },

  // Fontawesome
  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/pro-regular-svg-icons',
        icons: ['faBars', 'faTimes', 'faGlobe'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: [
          'faFacebook',
          'faTwitter',
          'faInstagram',
          'faYoutube',
          'faSpotify',
          'faTiktok',
          'faApple'
        ],
      },
    ],
  },
}

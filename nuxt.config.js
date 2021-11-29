export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Col·lectiu Ovidi Montllor',
    htmlAttrs: {
      lang: 'ca',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'theme-color', content: '#be1f30' },
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
        ],
      },
    ],
  },
}

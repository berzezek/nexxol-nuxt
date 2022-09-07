export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  ssr: false,
  head: {
    title: 'Nexxol',
    titleTemplate: 'Nexxol | %s',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Машинные масла и присадки Узбекистан'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Varela+Round'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i'
      },
    ],
    script: [{
        src: 'https://use.fontawesome.com/releases/v6.1.0/js/all.js',
        async: true,
        defer: true
      },
      {
        src: 'js/scripts.js',
      },

    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/css/styles.css'
  ],



  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}

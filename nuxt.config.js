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
        src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js',
        async: true,
        defer: true
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js',
        async: true,
        defer: true
      },
      // {
      //   src: 'assets/js/scripts.js',
      //   type: 'module'
      // },
      {
        src: 'https://code.jquery.com/jquery-3.6.0.min.js',
        async: true
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
  buildModules: [
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    'nuxt-izitoast',
    '@nuxtjs/toast',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  izitoast: {
    position: 'topRight',
    transitionIn: 'bounceInLeft',
    transitionOut: 'fadeOutRight',
  },

  privateRuntimeConfig: {
    baseUrl: process.env.BASE_URL
  },

  publicRuntimeConfig: {
    baseUrl: 'http://nexxol.uz/api/v1/'
  },

  auth: {
    strategies: {
      local: {
        token: {
          required: true,   
          type: 'Token',
          maxAge: 60*60*24*365,
          global: true,
          property: 'auth_token'
        },
        user: {
          property: ''
        },
        endpoints: {
          login: {
            url: 'http://nexxol.uz/api/v1/auth/token/login/',
            method: 'post'
          },
          user: {
            url: 'http://nexxol.uz/api/v1/auth/users/me/',
            method: 'get'
          },
          logout: {
            url: 'http://nexxol.uz/api/v1/auth/token/logout/',
            method: 'post'
          },
          tokenRequired: true,
          tokenType: 'Token',
          tokenName: 'Authorization'

        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    linkActiveClass: 'active-link'
  }
}

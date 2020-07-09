export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Fvis Nig',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Our incredible range of services grows your business by creating tailor-made opportunities.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'fontawesome',
        src: '/front/js/fontawesome.js',
        body: true
      }
    ],
    script: [
      {
        src:
          'https://cdn.tiny.cloud/1/wxz33f00s8z6diht1deolijjq4cgjlrkf43a5se3awd4x8t5/tinymce/5/tinymce.min.js',
        referrerpolicy: 'origin'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#00ffe4', background: 'white', height: '4px' },
  /*
   ** Global CSS
   */
  css: ['plyr/dist/plyr.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/moment.js',
    '~/plugins/currency.js',
    '~/plugins/slick.client.js',
    '~/plugins/paystack.client.js',
    '~/plugins/tawk.client.js',
    '~/plugins/tinyeditor.client.js',
    '~/plugins/gallery.client.js',
    '~/plugins/youtube.client.js',
    '~/plugins/toast.js',
    '~/plugins/infinite.client.js',
    '~/plugins/country.client.js',
    '~/plugins/datepicker.client.js',
    '~/plugins/player.js',
    '~/plugins/observer.client.js',
    '~/plugins/content-placeholder.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxt/http'
  ],
  bootstrapVue: {
    bootstrapCSS: true, // Or `css: false`
    bootstrapVueCSS: true // Or `bvCSS: false`
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://resource.fvisng.com/api'
  },
  auth: {
    strategies: {
      local: {
        _scheme: 'refresh',
        token: {
          property: 'token',
          maxAge: 10080
          // type: 'Bearer'
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 10080
        },
        user: {
          property: 'user'
          // autoFetch: true
        },
        clientId: false,
        grantType: false,
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          refresh: { url: '/auth/refresh', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/user', method: 'get' }
        },
        autoLogout: true
        // tokenRequired: true,
        // tokenType: 'bearer'
      }
    },
    redirect: {
      login: '/login',
      logout: false,
      // callback: '/login',
      home: false
    }
    // resetOnError: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  server: {
    // port: 3001,
    // host: '192.168.8.104'
  }
}

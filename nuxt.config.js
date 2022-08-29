import axios from 'axios'
import _ from 'lodash';
export default {
  ssr: false,
  subdirectory: '/au',
  target: 'static',
  /*
  ** Headers of the page
  */

  render: {
    csp: true
  },

  head: {
    title: 'Multikart Ecommerce | Vuejs shopping theme',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/multikart/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900' }
    ],
    script: [
      { src: 'https://checkout.stripe.com/checkout.js'}
    ]
  },

  router: {
    base: ''
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff4c3b', throttle: 200, height: '3px', css: true },
  /*
  ** Global CSS
  */
  css: [
    'swiper/css/swiper.css',
    '~/assets/scss/app.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
     { src: '~/plugins/plugin.js', ssr:false },
     { src: '~/plugins/localStorage.js', ssr:false },
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
    '@nuxtjs/dotenv',
   
  ],
  dotenv: {
    /* module options */
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  generate: {
    routes() {

      let url =  process.env.VUE_APP_BLOG_API_URL + "posts?";
      let params = {
        per_page: 30,
      };

      params = new URLSearchParams(_.pickBy(params)).toString();
      return axios.get(url).then(res => {
        return res.data.map(blog => {
          return '/blogs/' + blog.slug
        })
      })
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      "vee-validate/dist/rules"
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    babel: { compact: true }
  }
}
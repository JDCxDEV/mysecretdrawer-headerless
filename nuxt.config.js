export default {
  ssr: false,
  target: "server",

  render: {
    csp: true,
  },

  head: {
    title: "MSD",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://mysecretdrawer.com/wp-content/uploads/sites/13/2020/01/cropped-faviconoriginal-32x32.jpg",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Lato:300,400,700,900",
      },
    ],
    script: [{ src: "https://checkout.stripe.com/checkout.js" }],
  },

  router: {
    base: "",
  },

  loading: {
    color: "#ff4c3b",
    throttle: 200,
    height: "3px",
    css: true,
  },

  css: ["swiper/css/swiper.css", "~/assets/scss/app.scss"],

  plugins: [
    { src: "~/plugins/plugin.js", ssr: false },
    { src: "~/plugins/localStorage.js", ssr: false },
  ],

  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "vue-scrollto/nuxt",
    "@nuxtjs/dotenv",
    "@nuxtjs/proxy",
  ],

  dotenv: {
    // module options
  },

  axios: {
    baseURL: "/",
    browserBaseURL: "/",
    proxy: true,
  },

  proxy: {
    "/api/": {
      target: process.env.BASE_URL,
      pathRewrite: { "^/api/": "" },
      changeOrigin: true,
    },
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },

  generate: {
    fallback: "404.html",
    // routes() {
    //   let url = process.env.VUE_APP_BLOG_API_URL + "posts?";
    //   let params = { per_page: 100 };
    //   params = new URLSearchParams(_.pickBy(params)).toString();
    //   return axios.get(url + params).then(res => {
    //     return res.data.map(blog => {
    //       return '/blog/' + blog.slug
    //     })
    //   })
    // }
  },

  build: {
    transpile: ["vee-validate/dist/rules"],
    extend(config, ctx) {
      // Extend webpack config here
    },
    babel: { compact: true },
  },
};

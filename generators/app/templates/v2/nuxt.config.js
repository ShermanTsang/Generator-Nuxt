import axios from "axios";

export default {
  publicRuntimeConfig: {
    serverHost: process.env.SERVER_HOST || "0.0.0.0",
    serverPort: process.env.SERVER_PORT || 3000,
    siteName: process.env.SITE_NAME,
    siteDescription: process.env.SITE_DESCRIPTION,
    siteKeywords: process.env.SITE_KEYWORDS,
    siteDomain: process.env.SITE_DOMAIN,
    apiBaseurl: process.env.API_BASEURL,
    ossBaseurl: process.env.OSS_BASEURL
  },
  privateRuntimeConfig: {
    // apiSecret: process.env.API_SECRET
  },
  server: {
    port: process.env.SERVER_PORT,
    host: process.env.SERVER_HOST
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: `%s - ${process.env.SITE_NAME}`,
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.SITE_DESCRIPTION
      },
      { hid: "keywords", name: "keywords", content: process.env.SITE_KEYWORDS }
    ],
    script: [
      // { src: `//hm.baidu.com/hm.js?${process.env.SERVICE_BAIDU_ANALYZE_ID}` }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "favicon", href: "/favicon.ico" }
    ]
  },

  /*
   ** Customize the progress-bar
   */
  loading: "@/components/PageLoading.vue",

  /*
   ** Global CSS
   */
  css: [
    // 'normalize.css',
    "@/assets/css/global.scss",
    "@/assets/css/override.scss",
    "@/assets/iconfont/iconfont.css"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "@/plugins/utils" },
    { src: "@/plugins/day-js" },
    { src: "@/plugins/auto-components" },
    { src: "@/plugins/axios" },
    { src: "@/plugins/transfer-dom", mode: "client" },
    { src: "@/plugins/vue-lazyload", mode: "client" },
    { src: "@/plugins/vue-router", mode: "client" }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios"
    // '@nuxtjs/pwa'
  ],

  /*
   ** Nuxt.js modules axios configuration
   */
  axios: {
    proxy: true
  },

  /*
   ** Proxy configuration
   */
  proxy: {
    "/api/": {
      target: `${process.env.API_BASEURL}`,
      pathRewrite: { "^/api/": "/" }
    },
    "/oss/": {
      target: `${process.env.OSS_BASEURL}`,
      pathRewrite: { "^/oss/": "/" }
    }
  },

  /*
   ** Router configuration
   */
  router: {
    middleware: "common"
  },

  /*
   ** Build configuration
   */
  build: {
    analyze: false,
    extractCSS: process.env.NODE_ENV === "production",
    maxChunkSize: 100000,
    postcss: {
      plugins: {
        "postcss-url": false
      }
    },
    loaders: {
      sass: {
        implementation: require("sass")
      },
      scss: {
        implementation: require("sass"),
        additionalData:
          '@use "sass:math";@import "@/assets/css/variables.scss";'
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, loaders }) {
      // Run ESLint on save
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },

  buildModules: ["@nuxtjs/tailwindcss"]
};

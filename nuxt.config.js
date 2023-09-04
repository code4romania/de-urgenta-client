export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Public env variables (accessible in client)
  publicRuntimeConfig: {
    baseURL: process.env.NUXT_BASE_URL || `https://${process.env.NUXT_ENV_VERCEL_URL}`
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'De Urgență',
    htmlAttrs: {
      lang: 'ro',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://deurgenta.ro' },
      { property: 'og:site_name', content: 'De Urgență' },
      { property: 'og:title', content: 'De Urgență' },
      {
        hid: 'description',
        name: 'description',
        property: 'og:description',
        content:
          'De urgență este o aplicație mobilă care te ajută să îți construiești un plan de urgență împreună cu cei apropiați, să ții evidența produselor din rucsac și a termenelor lor de valabilitate, oferă printr-un sistem de notificări și de puncte posibilitatea de a repeta informațiile cele mai utile în caz de cutremur sau altă calamitate și îți pune la dispoziție lista oficială a punctelor de întâlnire.',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/markdownit'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  tailwindcss: {
    jit: true,
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
  },
}

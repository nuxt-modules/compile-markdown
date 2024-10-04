export default defineNuxtConfig({
  // builder: 'webpack',
  modules: ['../src'],

  devtools: { enabled: true },

  nitro: {
    prerender: {
      ignore: ['/redirect'],
    },
  },

  markdown: {
    mdc: true,
  },

  experimental: {
    scanPageMeta: false,
  },

  compatibilityDate: '2024-10-04',
})

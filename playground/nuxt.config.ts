export default defineNuxtConfig({
  modules: ['../src'],
  devtools: { enabled: true },
  nitro: {
    prerender: {
      ignore: ['/redirect'],
    },
  },
  // builder: 'webpack',
})

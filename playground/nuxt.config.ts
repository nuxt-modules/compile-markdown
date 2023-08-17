import { bundledLanguages, getHighlighter } from 'shikiji'

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
    async markdownItSetup(md) {
      const shiki = await getHighlighter({
        themes: ['vitesse-dark', 'vitesse-light'],
        langs: Object.keys(bundledLanguages) as any,
      })

      md.use((markdown) => {
        markdown.options.highlight = (code, lang) => {
          return shiki.codeToHtml(code, {
            lang,
            themes: {
              light: 'vitesse-light',
              dark: 'vitesse-dark',
            },
            cssVariablePrefix: '--s-',
          })
        }
      })
    },
  },
})

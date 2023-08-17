import { addVitePlugin, addWebpackPlugin, defineNuxtModule } from '@nuxt/kit'
import type { Options as MarkdownOptions } from 'unplugin-vue-markdown/types'
import Markdown from 'unplugin-vue-markdown'

export interface ModuleOptions extends MarkdownOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-compile-markdown',
    configKey: 'markdown',
  },
  setup(options, nuxt) {
    const extensions = ['md', 'markdown']

    const reVue = /\.vue$/
    const reVueOrQuery = /\.vue($|\?)/
    const reEnding = new RegExp(`\\.(${extensions.join('|')})$`)
    const reEndingOrQuery = new RegExp(`\\.(${extensions.join('|')})($|\\?)`)
    const reWithVue = new RegExp(`\\.(${[...extensions, 'vue'].join('|')})$`)

    nuxt.options.extensions.push(...extensions.map(ext => `.${ext}`))

    nuxt.options.imports.transform ||= {}
    nuxt.options.imports.transform.include ||= [reVue]
    if (Array.isArray(nuxt.options.imports.transform.include))
      nuxt.options.imports.transform.include.push(reEnding)

    if (nuxt.options.components !== false) {
      nuxt.options.components ||= {} as any
      const components = nuxt.options.components as any
      components.transform ||= {}
      components.transform.include ||= [reVue]
      if (Array.isArray(components.transform.include))
        components.transform.include.push(reEnding)
    }

    if (nuxt.options.builder === '@nuxt/webpack-builder') {
      nuxt.hook('webpack:config', (configs) => {
        for (const config of configs) {
          const rule = config.module?.rules?.find((r: any) => r.loader === 'vue-loader')
          if (rule)
            (rule as any).test = reWithVue
        }
      })
    }
    else {
      nuxt.options.vite ||= {}
      nuxt.options.vite.vue ||= {}
      nuxt.options.vite.vue.include ||= [reVueOrQuery]
      if (Array.isArray(nuxt.options.vite.vue.include))
        nuxt.options.vite.vue.include.push(reEndingOrQuery)
    }

    const originalMarkdownItSetup = options.markdownItSetup
    const resolvedOptions: MarkdownOptions = {
      wrapperClasses: '',
      ...options,
      include: [reEndingOrQuery],
      headEnabled: false,
      async markdownItSetup(md) {
        await originalMarkdownItSetup?.(md)

        // Replace <a> with <NuxtLink>
        md.core.ruler.push(
          'NuxtLink',
          (state) => {
            type Token = (typeof state.tokens)[0]
            function visit(token: Token) {
              if (token.tag === 'a') {
                token.tag = 'NuxtLink'
                // Replace `href` with `to`
                const hrefTag = token.attrs?.find(([name]) => name === 'href')
                if (hrefTag)
                  hrefTag[0] = 'to'
              }
              token.children?.forEach(visit)
            }

            state.tokens.forEach(visit)
          },
        )
      },

      transforms: {
        extraScripts(frontmatter) {
          const scripts: string[] = []

          if (frontmatter.meta)
            scripts.push(`definePageMeta(${JSON.stringify(frontmatter.meta)})`)

          if (frontmatter.seo || frontmatter.title || frontmatter.description) {
            scripts.push(`useSeoMeta(${JSON.stringify({
              ...frontmatter.title ? { title: frontmatter.title } : {},
              ...frontmatter.description ? { description: frontmatter.description } : {},
              ...frontmatter.seo,
            })})`)
          }

          return scripts
        },
      },
    }

    addVitePlugin(() => Markdown.vite(resolvedOptions))
    addWebpackPlugin(() => Markdown.webpack(resolvedOptions))
  },
})

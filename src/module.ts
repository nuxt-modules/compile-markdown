import { addVitePlugin, addWebpackPlugin, defineNuxtModule } from '@nuxt/kit'
import type { Options } from 'unplugin-vue-markdown/types'
import Markdown from 'unplugin-vue-markdown'

export interface ModuleOptions extends Options { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-compile-markdown',
    configKey: 'markdown',
  },
  setup(options, nuxt) {
    nuxt.options.extensions.push('.md')

    nuxt.options.imports.transform ||= {}
    nuxt.options.imports.transform.include ||= [/\.vue$/]
    if (Array.isArray(nuxt.options.imports.transform.include))
      nuxt.options.imports.transform.include.push(/\.md$/)

    if (nuxt.options.components !== false) {
      nuxt.options.components ||= {} as any
      const components = nuxt.options.components as any
      components.transform ||= {}
      components.transform.include ||= [/\.vue$/]
      if (Array.isArray(components.transform.include))
        components.transform.include.push(/\.md$/)
    }

    if (nuxt.options.builder === '@nuxt/webpack-builder') {
      nuxt.hook('webpack:config', (configs) => {
        for (const config of configs) {
          const rule = config.module?.rules.find((r: any) => r.loader === 'vue-loader')
          if (rule)
            rule.test = /\.(vue|md)$/
        }
      })
    }
    else {
      nuxt.options.vite ||= {}
      nuxt.options.vite.vue ||= {}
      nuxt.options.vite.vue.include ||= [/\.vue($|\?)/]
      if (Array.isArray(nuxt.options.vite.vue.include))
        nuxt.options.vite.vue.include.push(/\.md($|\?)/)
    }

    options.include = [/\.md($|\?)/]

    addVitePlugin(() => Markdown.vite(options))
    addWebpackPlugin(() => Markdown.webpack(options))
  },
})

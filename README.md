# Nuxt Compile Markdown


[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt Module to compile markdown files into Vue SFC at **build time**. This enables you to put `.md` files into your `pages` directory as standalone pages, and `.md` under `components` directory as Vue components. With components auto-import built-in in Nuxt, you can also use any components in your markdown files.

## Install

1. Add `nuxt-compile-markdown` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-compile-markdown

# Using yarn
yarn add --dev nuxt-compile-markdown

# Using npm
npm install --save-dev nuxt-compile-markdown
```

2. Add `nuxt-compile-markdown` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-compile-markdown'
  ]
})
```

## FAQ

### How does this compare to [@nuxt/content](https://content.nuxtjs.org/)?



<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-compile-markdown/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-compile-markdown

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-compile-markdown.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-compile-markdown

[license-src]: https://img.shields.io/npm/l/nuxt-compile-markdown.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-compile-markdown

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com

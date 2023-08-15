# Nuxt Compile Markdown


[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt Module to compile markdown files into Vue SFC at build time.

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

That's it! You can now use My Module in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-compile-markdown/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-compile-markdown

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-compile-markdown.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-compile-markdown

[license-src]: https://img.shields.io/npm/l/nuxt-compile-markdown.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-compile-markdown

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com

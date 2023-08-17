# Nuxt Compile Markdown

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt Module to compile markdown files into Vue SFC at **build time**. This enables you to put `.md` files into your `pages/` directory as standalone pages, and `.md` under `components/` directory as Vue components. With components auto-import built-in in Nuxt, you can also use any components in your markdown files.

- 📚 Write pages & components in Markdown
- 💚 Use Vue components in Markdown.
- 

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

## Usage

Create your components or pages as Markdown:

```bash
components/
  HelloWorld.md
pages/
  about.md
  index.md
```

## SEO & Page metas


Use the `seo` property in the frontmatter to leverage [`useSeoMeta()`](https://nuxt.com/docs/api/composables/use-seo-meta):

```md
---
seo:
  title: My title
  description: My description
  ogImage: https://example.com/image.png
  twitterCard: summary_large_image
---

# My page
```

Will be transformed to:

```vue
<script setup>
useSeoMeta({
  title: 'My title',
  description: 'My description',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image'
})
</script>

<-- template --->
```

**Note:** Use `title` and `description` as shortcut for `seo.title` and `seo.description`

Use the `meta` property in the frontmatter to leverage [`definePageMeta()`](https://nuxt.com/docs/api/utils/define-page-meta#definepagemeta) for the `pages/` directory:

```md
---
meta:
  layout: dark
  middleware: log
---

# My page
```

Will be transformed to:

```vue
<script setup>
definePageMeta({
  layout: 'dark',
  middleware: 'log'
})
</script>

<-- template --->
```

## Frontmatter

The frontmatter is parsed and injected into Vue's instance data frontmatter field.

```md
---
name: My Page
---

# Hello World

This is {{ frontmatter.name }}
```

## Import Markdown as Vue components

With Nuxt auto-import, all Markdown files inside the `components/` directory will be imported when used:

```
components/
  HelloWorld.md
pages/
  index.md
```

Then in your `pages/index.md`:

```md
I can use a Markdown component:

<HelloWorld />
```

If the Markdown is not inside the `components/` directory, you can import it and use it as a normal Vue component:

```vue
<script setup>
import Readme from '../README.md'
</script>

<template>
  <Readme />
</template>
```

## FAQ

### How does this compare to [@nuxt/content](https://content.nuxtjs.org/)?

`nuxt-compile-markdown` works at built time and converts the Markdown files to Vue files for maximum performance. This module does not have the ability to query content like [Nuxt Content Query Builder](https://content.nuxtjs.org/guide/displaying/querying). Also `nuxt-compile-markdown` does not support the MDC syntax (for now).

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-compile-markdown/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-compile-markdown

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-compile-markdown.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-compile-markdown

[license-src]: https://img.shields.io/npm/l/nuxt-compile-markdown.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-compile-markdown

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com

---
title: Home!
---

# Hello{style="color:skyblue"}

Nuxt Page as Markdown

- Go to [/blog](/blog)
- Go to [/about](/about)
- Go to [/dynamic/hello](/dynamic/hello)
- Go to [/redirect](/redirect)

---

<Counter />

::docs
Slot content
::

---

```ts
export default defineNuxtConfig({
  // Hello World
})
```

~~~md
# Markdown

And **nested** code blocks

```rs
fn main() {
  println!("Hello World!");
}
```
~~~

---

For [Nuxt](http://nuxt.com/)

Checkout the [about page](/about) or the [blog](/blog).

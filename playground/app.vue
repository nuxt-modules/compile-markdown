<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  font-family: Arial, Helvetica, sans-serif;
}

html.dark {
  color-scheme: dark;
}

.shiki {
  padding: 0.6rem;
  border-radius: 0.2rem;
  border: 1px solid #8882;
}

html.dark .shiki,
html.dark .shiki span {
  color: var(--s-dark) !important;
  background-color: var(--s-dark-bg) !important;
}
</style>

export default defineNuxtRouteMiddleware((to) => {
  // eslint-disable-next-line no-console
  console.log('[log middleware] Going to ', to.path)
})

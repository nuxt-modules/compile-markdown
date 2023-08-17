export default defineNuxtRouteMiddleware((to) => {
  console.log('[log middleware] Going to ', to.path)
})

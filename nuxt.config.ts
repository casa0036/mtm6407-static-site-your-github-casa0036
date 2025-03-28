// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-11-01',
//   devtools: { enabled: true }
// })

export default defineNuxtConfig({
  app: {
    baseURL: '/mtm6407-static-site-casa0036/',  // Ensure this matches your repo name
    buildAssetsDir: "/",
  },
  nitro: {
    preset: 'static',  // Enables static site generation
  }
})

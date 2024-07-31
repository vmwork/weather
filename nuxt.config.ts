// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // typescript: {
  //   typeCheck: true,
  // },
  css: ['~/assets/main.scss'],
  modules: ['@nuxt/image'],
  runtimeConfig: {
    public: {
      apiSecret: process.env.API_KEY,
      apiBase: process.env.BASE_URL,
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
    link: [
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" }
    ],
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],

  pwa: {
    manifest: {
      name: "smkcoding",
      short_name: "smkcoding",
      theme_color: "#fff",
      background_color: "#fff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "images/icons/logo1.jpg",
          sizes: "96x96",
          type: "image/png"
        },
        {
          
          src: "images/icons/logo2.jpg",
          sizes: "128x128",
          type: "image/png"
        },
        {
          
          src: "images/icons/pinguin.jpg",
          sizes: "144x144",
          type: "image/png"
        },
      ]
    },
    devOptions: {
      enabled: true,
    }
  }
})

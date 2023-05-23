// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig:{
        API_URL: "http://127.0.0.1:8000",
        public:{
          API_URL: "http://127.0.0.1:8000",
        }
      },
    modules: ['@nuxtjs/tailwindcss'],
    plugins: [
      {
        src: '@/plugins/vue-awesome-pagination.js',
        mode: 'client'
      }
    ],
      // css: ['@/vue-awesome-paginate/dist/style.css'],
    ssr: false
})

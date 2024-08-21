// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  runtimeConfig: {
    // public : {
    //   API_BASE: process.env.API_BASE,
    // },
    API_BASE: process.env.API_BASE
  },
  app: {
    head: {
        link: [           
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css'},
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/fontawesome.min.css'},
            { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css'},
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'},
        ],

        script: [          
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js',
              async: true,
              crossorigin: "anonymous"
            },
        ],
    },
  },
  css: [
    '~/assets/styles/global.scss',
  ],
  
  modules: [
    '@nuxt/image',
    '@nuxt/test-utils/module'
  ],
  plugins: [
    '~/plugins/moment.js' 
  ]
})

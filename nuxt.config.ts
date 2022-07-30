import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    //ssr: false,
    runtimeConfig: {
        public: {
            apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
            apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
        }
    },
    alias: {
        "@app": "/@app"
    },
    css: ["@/assets/main.scss"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        ['@nuxtjs/tailwindcss'],
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    // automatically imports `usePinia()`
                    'defineStore',
                    // automatically imports `usePinia()` as `usePiniaStore()`
                    ['defineStore', 'definePiniaStore'],
                ],
            },
        ]
    ],

})

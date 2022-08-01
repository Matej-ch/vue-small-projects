import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
        public: {
            apiSecret: '', // overridden by NUXT_API_SECRET environment variable in .env file
            apiBase: '', //  overridden by NUXT_PUBLIC_API_BASE environment variable in .env file
            mealApiBase: '',
            currencyApiKey: '',
            currencyApiBase: '',
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

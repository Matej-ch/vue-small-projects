import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    alias: {
        "@app": "/@app"
    },
    css: ["@/assets/main.scss"],
    modules: ['@nuxtjs/tailwindcss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    buildModules: [
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

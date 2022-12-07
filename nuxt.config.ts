import Icons from 'unplugin-icons/vite'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
    ssr: false,
    app: {
        layoutTransition: {
            name: 'layout', mode: 'out-in'
        },
        pageTransition: {
            name: 'slide-right', mode: 'out-in'
        },
        head: {
            meta: [
                {name: 'description', content: 'Collection of vue components'},
                {name: 'author', content: 'Matej ch.'},
                {name: 'keywords', content: 'Vuejs 3, Nuxt 3, Pinia, Javascript'}
            ],
        }
    },
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
        '@vueuse/nuxt',
        ['@nuxtjs/tailwindcss'],
        ['@nuxtjs/color-mode'],
        ['@pinia/nuxt'/*,
            {
                autoImports: [
                    // automatically imports `usePinia()`
                    'defineStore',
                    // automatically imports `usePinia()` as `usePiniaStore()`
                    ['defineStore', 'definePiniaStore'],
                ],
            },*/
        ]
    ],
    colorMode: {
        preference: 'light', // default value of $colorMode.preference
        fallback: 'system', // fallback value if not system preference found
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '-mode',
        storageKey: 'nuxt-color-mode'
    },
    vite: {
        plugins: [
            Icons({
                autoInstall: true
            }),
            svgLoader()
        ],
    }

})

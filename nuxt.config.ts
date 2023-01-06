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
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
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
        ['@nuxtjs/i18n'],
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
    i18n: {
        vueI18n: {
            legacy: false,
            locale: 'en',
            messages: {
                en: {
                    "language": "English",
                    "happyHolidays": "Happy Holidays!",
                    "christmasIsComing": "{ date } is in { time }",
                    "day": "one day | {count} days"
                },
                de: {
                    "language": "Deutsch",
                    "happyHolidays": "Schöne Ferien!",
                    "christmasIsComing": "{ date } ist in { time }",
                    "day": "ein Tag | {count} Tagen"
                },
                ja: {
                    "language": "日本語",
                    "happyHolidays": "ハッピーホリデー！",
                    "christmasIsComing": "{date}はあと{time}",
                    "day": "{count}日"
                }
            },
            datetimeFormats: {
                en: {
                    short: {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    },
                    long: {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        weekday: 'long',
                    },
                },
                'ja-JP': {
                    short: {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    },
                    long: {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        weekday: 'long',
                    },
                },
                de: {
                    short: {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    },
                    long: {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        weekday: 'long',
                    },
                },
            }
        }
    },
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

import {defineStore} from 'pinia'

export const useNavbarStore = defineStore('navbar', {
    state: () => {
        return {
            items: [
                {url: 'index', label: 'Home', 'icon': 'ic:round-home'},
                {url: 'border', label: 'Border radius previewer', 'icon': 'ic:baseline-border-style'},
                {url: 'bindec', label: 'Bin 2 Dec', 'icon': 'ic:outline-numbers'},
                {url: 'freq', label: 'Word frequency', 'icon': 'ic:round-query-stats'},
                {url: 'truefalse', label: 'True or False', 'icon': 'ic:sharp-question-mark'},
                {
                    url: 'github',
                    label: 'Github status',
                    'icon': 'ic:round-signal-wifi-statusbar-connected-no-internet-4'
                },
                {url: 'calc', label: 'Calculator', 'icon': 'ic:round-calculate'},
                {url: 'random', label: 'Random number', 'icon': 'ic:twotone-gradient'},
                {url: 'roman', label: 'Roman numerals', 'icon': 'ic:round-account-balance'},
                {url: 'weather', label: 'Weather App', 'icon': 'ic:round-cloud'},
                {url: 'meal', label: 'Random Meal Generator', 'icon': 'ic:round-set-meal'},
                {url: 'currency', label: 'Currency Converter', 'icon': 'ic:round-currency-exchange'},
                {url: 'password', label: 'Password Generator', 'icon': 'ic:round-lock'},
                {url: 'markdown', label: 'Markdown Previewer', 'icon': 'ic:round-text-fields'},
                {url: 'vigenere', label: 'Vigenere Cipher', 'icon': 'ic:twotone-polymer'},
                {url: 'color', label: 'ColorCycle', 'icon': 'ic:round-format-color-fill'},
                {url: 'nasa', label: 'NASA Exoplanet Query', 'icon': 'ion:planet'},
                {url: 'timeline', label: 'GitHub Timeline', 'icon': 'ion:time'},
                {url: 'notes', label: 'Notes App', 'icon': 'ion:newspaper'},
                {url: 'stopwatch', label: 'Stopwatch App', 'icon': 'ion:stopwatch-outline'},
                {url: 'dollars', label: 'Dollars To Cents', 'icon': 'ic:round-local-atm'},
            ]
        };
    }
})
import {defineStore} from 'pinia'

export const useNavbarStore = defineStore('navbar', {
    state: () => {
        return {
            items: [
                {url: 'index', label: 'Home'},
                {url: 'border', label: 'Border radius previewer'},
                {url: 'bindec', label: 'Bin 2 Dec'},
                {url: 'freq', label: 'Word frequency'},
                {url: 'truefalse', label: 'True or False'},
                {url: 'github', label: 'Github status'},
                {url: 'calc', label: 'Calculator'},
                {url: 'random', label: 'Random number'},
            ]
        };
    }
})
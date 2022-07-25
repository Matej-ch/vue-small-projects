import {defineStore, acceptHMRUpdate} from 'pinia'

export const useNavbarStore = defineStore('navbar', {
    state: () => {
        return {
            items: {
                'index': 'Home',
                'border': 'Border radius previewer',
                'bindec': 'Bin 2 Dec',
                'freq': 'Word frequency',
                'truefalse': 'True or False',
                'github': 'Github status',
                'calc': 'Calculator',
            }
        };
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
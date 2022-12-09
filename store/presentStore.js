import {defineStore} from "pinia";
import {shallowRef} from 'vue'

import Present1 from '~/assets/img/presents/present1.svg?component'
import Present2 from '~/assets/img/presents/present2.svg?component'
import Present3 from '~/assets/img/presents/present3.svg?component'
import Present4 from '~/assets/img/presents/present4.svg?component'
import Present5 from '~/assets/img/presents/present5.svg?component'

export const usePresentStore = defineStore('present', {
    state: () => {
        return {
            items: [
                {
                    "id": 1,
                    "src": shallowRef(Present1),
                    "dimensions": {
                        "width": 60,
                        "height": 60
                    }
                },
                {
                    "id": 2,
                    "src": shallowRef(Present2),
                    "dimensions": {
                        "width": 40,
                        "height": 40
                    }
                },
                {
                    "id": 3,
                    "src": shallowRef(Present3),
                    "dimensions": {
                        "width": 70,
                        "height": 60
                    }
                },
                {
                    "id": 4,
                    "src": shallowRef(Present4),
                    "dimensions": {
                        "width": 110,
                        "height": 90
                    }
                },
                {
                    "id": 5,
                    "src": shallowRef(Present5),
                    "dimensions": {
                        "width": 90,
                        "height": 70
                    }
                }
            ]
        }
    },
    getters: {
        sorted: (state) => {
            //console.log(state.items);
            //return 'kurwa';
            return state.items.sort((it1, it2) => ((it1.dimensions.width * it1.dimensions.height) > (it2.dimensions.width * it2.dimensions.height)) ? 1 : ((it1.dimensions.width * it1.dimensions.height) < (it2.dimensions.width * it2.dimensions.height)) ? -1 : 0);
        }
    }
})
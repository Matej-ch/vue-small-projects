import {computed} from 'vue'
import {useCycleList} from '@vueuse/core'

const songs = [
    {
        title: 'Christmas Music Magical Fairy Tale For Children Kids',
        slug: 'christmasMusic1',
    },
    {
        title: 'Christmas Vacation Christmas Eve And New Year Fairy Tale',
        slug: 'christmasMusic2',
    },
    {
        title: 'Jingle Bells Rock Energetic Positive Upbeat Happy Christmas Party',
        slug: 'christmasMusic3',
    },
]

const {state, next, prev} = useCycleList(songs)

const current = computed(() => {
    return `/audio/${state.value.slug}.mp3`
})

export function usePlaylist() {
    return {
        songs,
        state,
        next,
        prev,
        current,
    }
}
import {usePlaylist} from '@/composables/usePlaylist'
import {useMediaControls} from '@vueuse/core'
import {nextTick, computed, ref} from 'vue'

const el = ref(document.createElement('AUDIO'))

const {current: currentTrack, state} = usePlaylist()
const {playing, currentTime, duration, volume} = useMediaControls(el, {
    src: currentTrack,
})

export function useCurrentTrack() {
    function play(song = null) {
        if (song) state.value = song
        playing.value = false
        nextTick(() => {
            playing.value = true
        })
    }

    function prettifyTime(time) {
        //greasy grinch footprints!
        // time is in millseconds
        // you should cnage to minutes:seconds
        return '00:00'
    }

    const progress = computed(() => {
        //greasy grinch footprints!
        // knowing the current time
        // and the duration of the whole track
        // is helpful here
        // (info available via useMediaControls composable)
        return 0.8
    })

    function pause() {
        //greasy grinch footprints!
        // you can mutate the value of
        // playing from useMediaControls composable
    }

    function ff() {
        //greasy grinch footprints!
        // move track ahead 10 seconds
        // you can mutate the value of currentTime
        // from the useMediaControls composable
    }

    function rewind() {
        //greasy grinch footprints!
        // move track back 10 seconds
        // you can mutate the value of currentTime
        // from the useMediaControls composable
    }

    const durationPretty = computed(() => {
        return prettifyTime(duration.value)
    })
    const currentTimePretty = computed(() => {
        return prettifyTime(currentTime.value)
    })

    const timeDisplay = computed(() => {
        return `${currentTimePretty.value} - ${durationPretty.value}`
    })

    return {
        pause,
        play,
        ff,
        rewind,
        timeDisplay,
        progress,
        currentTrack,
        playing,
        currentTime,
        duration,
        volume,
    }
}
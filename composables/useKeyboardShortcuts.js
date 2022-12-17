import {useCurrentTrack} from '@/composables/useCurrentTrack'
import {usePlaylist} from '@/composables/usePlaylist'
import {onKeyStroke} from '@vueuse/core'

const {play, pause, rewind, ff, playing, currentTime, duration, volume, progress} = useCurrentTrack()
const {next, prev} = usePlaylist()

const shortcuts = [
    // spacebar to play
    [
        ' ',
        e => {
            // Allow spacebar to trigger buttons as normal for accessibility
            const activeEl = document.activeElement
            if (activeEl.tagName.toUpperCase() === 'BUTTON') return
            e.preventDefault()

            // if not focusing a button play | pause the song
            playing.value ? pause() : play()
        },

        // handling prevent manually above
        {prevent: false},
    ],

    // Right arrow for ff
    ['ArrowRight', e => ff()],

    // Cmd + RightArrow for Next
    ['ArrowRight', e => next(), {shift: true}],

    // Left arrow for ff
    ['ArrowLeft', e => rewind()],

    // Cmd + LeftArrow for prev
    ['ArrowLeft', e => prev(), {shift: true}],

    // Down Arrow for Volume Up
    [
        'ArrowDown',
        () => {
            const vol = volume.value - 0.1
            volume.value = vol < 0 ? 0 : vol
        },
    ],

    // Up Arrow for Volume Down
    [
        'ArrowUp',
        () => {
            const vol = volume.value + 0.1
            volume.value = vol > 1 ? 1 : vol
        },
    ],
]

export function useKeyboardShortcuts() {
    shortcuts.forEach(shortcut => {
        onKeyStroke(shortcut[0], e => {
            const options = shortcut.length === 3 ? shortcut[2] : {}
            const preventDefault = options.preventDefault || typeof options.preventDefault === 'undefined'

            if (preventDefault) e.preventDefault()

            if (options.shift && !e.shiftKey) return
            shortcut[1](e)
        })
    })
}
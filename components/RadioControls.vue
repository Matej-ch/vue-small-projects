<script setup>
import {computed} from 'vue'
import IconBackward from '~/assets/img/radio/icon-backward.svg'
import IconForward from '~/assets/img/radio/icon-forward.svg'
import IconPlay from '~/assets/img/radio/icon-play.svg'
import IconPause from '~/assets/img/radio/icon-pause.svg'
import IconChevronRight from '~/assets/img/radio/icon-chevron-right.svg'
import IconChevronLeft from '~/assets/img/radio/icon-chevron-left.svg'

const {play, pause, rewind, ff, playing, timeDisplay, volume, progress} = useCurrentTrack()
const {next, prev} = usePlaylist()
const volumneGradient = computed(() => {
    return `linear-gradient(90deg, rgba(66, 184, 131, 1) 0%, rgba(66, 184, 131, 1) ${volume.value * 100}%, transparent ${
        volume.value * 100
    }%)`
    return 'green'
})
</script>
<template>
    <div class="w-full relative rounded bg-slate-800 text-white">
        <div class="progress rounded h-1 bg-slate-400 relative" :style="`width: ${progress}%;`"></div>
        <div class="flex sm:justify-center items-center">
            <button class="pl-5" @click="prev()" title="Previous Song">
                <IconChevronLeft/>
            </button>

            <button @click="rewind()" title="Rewind">
                <IconBackward/>
            </button>

            <button
                @click="playing ? pause() : play()"
                class="bg-green rounded-full w-12 h-12 scale-150 mx-5"
                :title="playing ? 'Pause' : 'Play'"
            >
                <Transition>
                    <IconPause class="absolute top-[50%] left-[50%]" style="transform: translate(-50%, -50%)"
                               v-if="playing"/>
                    <IconPlay class="absolute top-[50%] left-[50%]" style="transform: translate(-50%, -50%)" v-else/>
                </Transition>
            </button>

            <button @click="ff()" title="Fast Forward">
                <IconForward/>
            </button>
            <button @click="next()" title="Next Song">
                <IconChevronRight/>
            </button>
        </div>
        <input
            :value="volume * 100"
            @input="volume = $event.target.value / 100"
            class="absolute right-5 w-24 top-[50%]"
            style="transform: translateY(-50%)"
            type="range"
        />
        <div class="hidden sm:block absolute left-5 w-24 top-[50%] whitespace-nowrap"
             style="transform: translateY(-50%)">
            {{timeDisplay}}
        </div>
    </div>
</template>
<style scoped>
.progress {
    background: linear-gradient(90deg, rgba(66, 184, 131, 1) 0%, rgba(0, 48, 255, 1) 100%);
}

input[type='range'] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    border: rgba(66, 184, 131, 1) 1px solid;
    background: v-bind(volumneGradient);
    height: 4px;
    border-radius: 3px;
}

input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    background: white;
    border-radius: 10px;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.4s ease;
    transform: translate(-50%, -50%) scale(1) !important;
}

.v-enter-from,
.v-leave-to {
    transform: translate(-50%, -50%) scale(0.3) !important;
    opacity: 0;
}

div svg {
    transition: 0.3s ease all;
}

div svg:hover {
    opacity: 0.7;
}
</style>
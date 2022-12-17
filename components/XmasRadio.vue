<template>
    <div class="w-full h-full flex justify-center items-center p-10">
        <div>
            <div class="shadow-md relative bg-white p-5 rounded-lg border-slate-100 border-[1px]">
                <KeyboardShortcuts/>
                <RadioPlaylist :playing="playing"/>
                <RadioControls/>
            </div>
        </div>
    </div>
</template>

<script setup>
import KeyboardShortcuts from "~/components/KeyboardShortcuts.vue";
import RadioPlaylist from "~/components/RadioPlaylist.vue";
import RadioControls from "~/components/RadioControls.vue";
import {watch} from 'vue'

useKeyboardShortcuts()
const {next} = usePlaylist()
const {play, playing, currentTime, duration, currentTrack} = useCurrentTrack()
watch(currentTrack, () => play())
watch(currentTime, () => {
    if (currentTime.value === duration.value) {
        next()
    }
})
</script>

<style scoped>

</style>
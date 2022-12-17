<template>
    <div class="w-full h-full flex justify-center items-center p-10">
        <div>
            <div class="shadow-md relative bg-white p-5 rounded-lg border-slate-100 border-[1px]">
                <KeyboardShortcuts/>
                <RadioHeader/>
                <RadioPlaylist :playing="playing"/>
                <RadioControls/>
            </div>
            <h4 class="mt-10 text-slate-400 text-center text-sm">
                This challenge brought to you by <a href="https://vueschool.io/" class="underline">Vue School</a>
            </h4>
        </div>
    </div>
</template>

<script setup>
import KeyboardShortcuts from "~/components/KeyboardShortcuts.vue";
import RadioPlaylist from "~/components/RadioPlaylist.vue";
import RadioHeader from "~/components/RadioHeader.vue";
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
<script setup>
import IconPlay from '~/assets/img/radio/icon-play.svg'
import IconPlaying from "~/components/IconPlaying.vue";

defineProps({
    song: {
        type: Object,
        required: true,
    },
    isSelected: {
        type: Boolean,
        default: false,
    },
    isPlaying: {
        type: Boolean,
        default: false,
    },
})
</script>
<template>
    <li
        class="text-slate-500 cursor-pointer flex items-center mb-7 only:md:mb-3 hover:bg-slate-200 pr-5"
        :class="{
      'bg-slate-200': isSelected,
    }"
    >
        <div class="relative rounded overflow-hidden">
            <div
                v-if="isSelected"
                class="hover:opacity-0 transition-opacity absolute top-0 right-0 left-0 bottom-0 bg-slate-900 opacity-50"
            ></div>
            <div
                class="pointer-events-none absolute text-white top-[50%] left-[50%]"
                style="transform: translate(-50%, -50%)"
            >
                <IconPlaying v-if="isPlaying"/>
                <IconPlay v-else/>
            </div>

            <img class="w-20" :src="`/img/${song.slug}.jpg`" :alt="song.title"/>
        </div>
        <div class="ml-5">
            <div>{{song.title}}</div>
        </div>
    </li>
</template>
<style scoped>
li {
    transition: 0.3s ease background;
}
</style>
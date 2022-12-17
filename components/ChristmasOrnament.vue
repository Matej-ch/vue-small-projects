<template>
    <div
        class="absolute rounded-full w-6 h-6 z-10"
        :class="bgColor"
        :style="{
      top: `${offsetY}px`,
      left: `${offsetX}px`,
    }"
    ></div>
</template>

<script setup>
import {computed} from 'vue'

const AMPLIFY = 20
const offsetY = 16 + (Math.random() * AMPLIFY - AMPLIFY / 2)
const offsetX = 16 + (Math.random() * AMPLIFY - AMPLIFY / 2)

const props = defineProps({
    color: {type: String, default: 'red'},
})
const bgColor = computed(() => (props.color === 'green' ? 'bg-emerald-200' : 'bg-red-500'))
</script>

<style scoped>

</style>
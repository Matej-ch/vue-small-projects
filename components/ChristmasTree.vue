<template>
    <div class="relative flex justify-center">
        <Tree class="w-64"/>
        <div class="flex items-end absolute -bottom-8 -gap-8 presents" ref="parent">
            <ChristmasPresent v-for="(p, index) in presents" :key="p" :name="p"/>
        </div>
    </div>
</template>

<script setup>
import Tree from '~/assets/img/tree.svg?component'
import {useAutoAnimate} from '@formkit/auto-animate/vue'

const props = defineProps({
    presents: Array
})

const [parent] = useAutoAnimate()
</script>

<style scoped>
.presents > div:nth-of-type(2) {
    @apply -mx-8 z-10 -mb-4;
}
</style>
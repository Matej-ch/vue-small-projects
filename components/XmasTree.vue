<template>
    <div>

        <XmasTree v-if="size > 1" :size="size - 1"/>

        <div class="flex flex-row justify-center">
            <div v-for="i in size"
                 class="relative rounded-full bg-green-700 w-16 h-16 -m-2 flex justify-center items-center border border-green-800"/>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    size: Number
})

</script>

<style scoped>

</style>
<template>
    <div>

        <XmasTree v-if="size > 1" :size="size - 1">
            <template #lights>
                <!-- Put two lights on each section of the tree -->
                <ChristmasLights v-for="i in 2"/>
            </template>

            <template #even>
                <ChristmasOrnament color="green"/>
            </template>
            <template #odd>
                <ChristmasOrnament color="red"/>
            </template>
        </XmasTree>

        <div class="flex flex-row justify-center">
            <div v-for="i in size"
                 class="relative rounded-full bg-green-700 w-16 h-16 -m-2 flex justify-center items-center border border-green-800">
                <slot name="lights"></slot>

                <slot v-if="i % 2 !== 0" name="even"></slot>
                <slot v-else name="odd"></slot>
            </div>
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
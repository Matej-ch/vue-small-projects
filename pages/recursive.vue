<template>
    <ComponentContainer>
        <template v-slot:header>
            Recursive Xmas Tree
        </template>

        <template v-slot:body>
            <XmasTree :size="7">
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
        </template>

    </ComponentContainer>
</template>

<script setup>
import XmasTree from '../components/XmasTree'
import {useHead} from "nuxt/app";
import ChristmasOrnament from "~/components/ChristmasOrnament.vue";

useHead({
    title: `Recursive Xmas Tree`
})

</script>

<style scoped>

</style>
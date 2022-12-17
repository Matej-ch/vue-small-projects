<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <ColorCycle/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import ColorCycle from '../components/ColorCycle'
import {useHead} from "nuxt/app";

const title = 'Color cycle';
useHead({
    title: title
})
</script>

<style scoped>

</style>

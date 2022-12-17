<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>

            <WordFrequency/>
        </template>

    </ComponentContainer>

</template>

<script setup>

import WordFrequency from '../components/WordFrequency'
import {useHead} from "nuxt/app";

const title = 'Word frequency';
useHead({
    title: title
})
</script>

<style scoped>

</style>

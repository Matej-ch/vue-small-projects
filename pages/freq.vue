<template>
    <ComponentContainer>
        <template v-slot:header>Word frequency</template>

        <template v-slot:body>

            <WordFrequency/>
        </template>

    </ComponentContainer>

</template>

<script setup>

import WordFrequency from '../components/WordFrequency'
import {useHead} from "nuxt/app";

useHead({
    title: `Word frequency`
})
</script>

<style scoped>

</style>

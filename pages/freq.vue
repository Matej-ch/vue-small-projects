<template>
    <WordFrequency/>
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

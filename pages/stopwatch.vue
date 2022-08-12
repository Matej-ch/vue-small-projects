<template>
    <Stopwatch/>
</template>

<script setup>
import Stopwatch from '../components/Stopwatch'
import {useHead} from "nuxt/app";

useHead({
    title: `Stopwatch`
})

</script>

<style scoped>

</style>
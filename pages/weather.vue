<template>
    <WeatherApp/>
</template>

<script setup>
import WeatherApp from '../components/WeatherApp'
import {useHead} from "nuxt/app";

useHead({
    title: `Weather app`
})
</script>

<style scoped>

</style>

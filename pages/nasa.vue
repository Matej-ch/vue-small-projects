<template>
    <Exoplanets/>
</template>

<script setup>
import Exoplanets from '../components/Exoplanets'
import {useHead} from "nuxt/app";

useHead({
    title: `Nasa planet query`
})
</script>

<style scoped>

</style>
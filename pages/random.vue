<template>
    <RandomNumber/>
</template>

<script setup>
import RandomNumber from '../components/RandomNumber'
import {useHead} from "nuxt/app";

useHead({
    title: `Random number generator`
})
</script>

<style scoped>

</style>

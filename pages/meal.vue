<template>
    <RandomMeal/>
</template>

<script setup>
import RandomMeal from '../components/RandomMeal'
import {useHead} from "nuxt/app";

useHead({
    title: `Random meal`
})
</script>

<style scoped>

</style>

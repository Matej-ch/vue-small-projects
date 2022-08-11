<template>
    <RomanNumerals/>
</template>

<script setup>
import RomanNumerals from '../components/RomanNumerals'
import {useHead} from "nuxt/app";

useHead({
    title: `Roman numerals`
})
</script>

<style scoped>

</style>

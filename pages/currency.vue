<template>
    <CurrencyConverter/>
</template>

<script setup>
import CurrencyConverter from '../components/CurrencyConverter'
import {useHead} from "nuxt/app";

useHead({
    title: `Currency converter`
})
</script>

<style scoped>

</style>

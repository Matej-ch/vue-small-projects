<template>
    <Calculator/>
</template>

<script setup>
import Calculator from '../components/Calculator'
import {useHead} from "nuxt/app";

useHead({
    title: `Calculator`
})
</script>

<style scoped>

</style>

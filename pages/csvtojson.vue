<template>
    <CsvToJson/>
</template>

<script setup>
import CsvToJson from "../components/CsvToJson";
import {useHead} from "nuxt/app";

useHead({
    title: `CSV 2 JSON`
})
</script>

<style scoped>

</style>
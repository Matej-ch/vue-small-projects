<template>
    <JsonToCsv/>
</template>

<script setup>
import JsonToCsv from "../components/JsonToCsv";
import {useHead} from "nuxt/app";

useHead({
    title: `JSON TO CSV`
})
</script>

<style scoped>

</style>
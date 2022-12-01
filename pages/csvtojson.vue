<template>
    <ComponentContainer>
        <template v-slot:header>CSV to Json converter</template>

        <template v-slot:body>
            <CsvToJson/>
        </template>

    </ComponentContainer>

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
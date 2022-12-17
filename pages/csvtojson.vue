<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <CsvToJson/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import CsvToJson from "../components/CsvToJson";
import {useHead} from "nuxt/app";

const title = 'CSV to Json converter';
useHead({
    title: title
})
</script>

<style scoped>

</style>
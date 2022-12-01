<template>
    <ComponentContainer>
        <template v-slot:header>Json to CSV converter</template>

        <template v-slot:body>
            <JsonToCsv/>
        </template>

    </ComponentContainer>

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
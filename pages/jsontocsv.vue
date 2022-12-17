<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <JsonToCsv/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import JsonToCsv from "../components/JsonToCsv";
import {useHead} from "nuxt/app";

const title = 'Json to CSV converter';
useHead({
    title: title
})
</script>

<style scoped>

</style>
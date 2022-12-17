<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <CompareGifts></CompareGifts>
        </template>

    </ComponentContainer>
</template>

<script setup>
import {useHead} from "nuxt/app";
import CompareGifts from "~/components/CompareGifts.vue";

const title = 'Compare gifts';
useHead({
    title: title
})
</script>

<style scoped>

</style>
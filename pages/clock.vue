<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
        </template>

    </ComponentContainer>

</template>

<script setup>
import {useHead} from "nuxt/app";

const title = 'Analog Clock';
useHead({
    title: title
})
</script>

<style scoped>

</style>
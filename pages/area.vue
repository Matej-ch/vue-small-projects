<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
        </template>

    </ComponentContainer>

</template>

<script setup>
import {useHead} from "nuxt/app";

const title = 'Area Selector';
useHead({
    title: title
})
</script>

<style scoped>

</style>
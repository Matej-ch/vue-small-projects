<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <SortPresents></SortPresents>
        </template>

    </ComponentContainer>

</template>

<script setup>
import {useHead} from "nuxt/app";

const title = 'Sort presents';
useHead({
    title: title
})
</script>

<style scoped>

</style>
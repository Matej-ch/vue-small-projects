<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <DollarsToCents/>
        </template>

    </ComponentContainer>

</template>

<script setup>

import DollarsToCents from "../components/DollarsToCents";
import {useHead} from "nuxt/app";

const title = 'Dollars to cents';
useHead({
    title: title
})
</script>

<style scoped>

</style>
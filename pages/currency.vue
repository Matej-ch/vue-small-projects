<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <CurrencyConverter/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import CurrencyConverter from '../components/CurrencyConverter'
import {useHead} from "nuxt/app";

const title = 'Currency converter';
useHead({
    title: title
})
</script>

<style scoped>

</style>

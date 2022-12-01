<template>
    <ComponentContainer>
        <template v-slot:header>Currency converter</template>

        <template v-slot:body>
            <CurrencyConverter/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import CurrencyConverter from '../components/CurrencyConverter'
import {useHead} from "nuxt/app";

useHead({
    title: `Currency converter`
})
</script>

<style scoped>

</style>

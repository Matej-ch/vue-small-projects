<template>
    <ComponentContainer>
        <template v-slot:header>Dollars to cents</template>

        <template v-slot:body>
            <DollarsToCents/>
        </template>

    </ComponentContainer>

</template>

<script setup>

import DollarsToCents from "../components/DollarsToCents";
import {useHead} from "nuxt/app";

useHead({
    title: `Dollars to cents`
})
</script>

<style scoped>

</style>
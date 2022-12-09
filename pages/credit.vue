<template>
    <ComponentContainer>
        <template v-slot:header>Credit card</template>

        <template v-slot:body>
            <CreditCard/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import CreditCard from "../components/CreditCard";
import {useHead} from "nuxt/app";

useHead({
    title: `Credit card`
})
</script>

<style scoped>

</style>
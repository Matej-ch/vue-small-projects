<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <CounterWithStep></CounterWithStep>
        </template>
    </ComponentContainer>
</template>

<script setup>
import {useHead} from "nuxt/app";

const title = 'Counter with step';
useHead({
    title: title
})
</script>

<style scoped>

</style>
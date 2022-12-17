<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <CountdownToChristmas :year="2022"></CountdownToChristmas>
        </template>

    </ComponentContainer>

</template>

<script setup>
import {useHead} from "nuxt/app";

const title = 'Countdown to Christmas';
useHead({
    title: title
})
</script>

<style scoped>

</style>
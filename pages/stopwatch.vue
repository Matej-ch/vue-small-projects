<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <Stopwatch/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import Stopwatch from '../components/Stopwatch'
import {useHead} from "nuxt/app";

const title = 'Stopwatch';
useHead({
    title: title
})

</script>

<style scoped>

</style>
<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <RandomNumber/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import RandomNumber from '../components/RandomNumber'
import {useHead} from "nuxt/app";

const title = 'Random number generator';
useHead({
    title: title
})
</script>

<style scoped>

</style>

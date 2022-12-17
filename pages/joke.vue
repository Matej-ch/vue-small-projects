<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>

            <JokeGenerator/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import JokeGenerator from '../components/JokeGenerator'
import {useHead} from "nuxt/app";

const title = 'Joke generator';
useHead({
    title: title
})
</script>

<style scoped>

</style>

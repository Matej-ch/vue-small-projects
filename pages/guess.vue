<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <GuessNumber></GuessNumber>
        </template>
    </ComponentContainer>
</template>

<script setup>
import {useHead} from "nuxt/app";
import GuessNumber from "../components/GuessNumber";

const title = 'Guess the number';
useHead({
    title: title
})
</script>

<style scoped>

</style>
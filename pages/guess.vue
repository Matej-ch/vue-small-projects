<template>
    <ComponentContainer>
        <template v-slot:header>Guess the number</template>

        <template v-slot:body>
            <GuessNumber></GuessNumber>
        </template>
    </ComponentContainer>
</template>

<script setup>
import {useHead} from "nuxt/app";
import GuessNumber from "../components/GuessNumber";

useHead({
    title: `Guess the number`
})
</script>

<style scoped>

</style>
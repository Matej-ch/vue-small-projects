<template>
    <ComponentContainer>
        <template v-slot:header>Joke generator</template>

        <template v-slot:body>

            <JokeGenerator/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import JokeGenerator from '../components/JokeGenerator'
import {useHead} from "nuxt/app";

useHead({
    title: `Joke generator`
})
</script>

<style scoped>

</style>

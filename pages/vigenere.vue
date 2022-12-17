<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <VigenereCipher/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import VigenereCipher from '../components/VigenereCipher'
import {useHead} from "nuxt/app";

const title = `Vigenere cipher`;
useHead({
    title: title
})
</script>

<style scoped>

</style>

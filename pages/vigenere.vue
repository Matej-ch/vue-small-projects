<template>
    <VigenereCipher/>
</template>

<script setup>
import VigenereCipher from '../components/VigenereCipher'
import {useHead} from "nuxt/app";

useHead({
    title: `Vigenere cipher`
})
</script>

<style scoped>

</style>

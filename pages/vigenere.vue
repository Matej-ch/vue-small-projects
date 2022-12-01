<template>
    <ComponentContainer>
        <template v-slot:header>Vigenere Cipher</template>

        <template v-slot:body>
            <VigenereCipher/>
        </template>

    </ComponentContainer>
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

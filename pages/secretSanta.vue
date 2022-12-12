<template>
    <ComponentContainer>
        <template v-slot:header>
            Secret santa challenge
        </template>

        <template v-slot:body>
            <SecretSantaChallenge/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import SecretSantaChallenge from "../components/SecretSantaChallenge";
import {useHead} from "nuxt/app";

useHead({
    title: `Secret santa challenge`
})
</script>

<style scoped>

</style>

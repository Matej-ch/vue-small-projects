<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}

        </template>

        <template v-slot:body>
            <SecretSantaChallenge/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import SecretSantaChallenge from "../components/SecretSantaChallenge";
import {useHead} from "nuxt/app";

const title = 'Secret santa challenge';
useHead({
    title: title
})
</script>

<style scoped>

</style>

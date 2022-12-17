<template>
    <ComponentContainer>
        <template v-slot:header>
            {{title}}
        </template>

        <template v-slot:body>
            <SecretSantaGenerator/>
        </template>

    </ComponentContainer>


</template>

<script setup>
import SecretSantaGenerator from '../components/SecretSantaGenerator'
import {useHead} from "nuxt/app";

const title = `Secret santa generator`;
useHead({
    title: title
})
</script>

<style scoped>

</style>

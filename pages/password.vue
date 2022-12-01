<template>
    <ComponentContainer>
        <template v-slot:header>
            Password generator
        </template>

        <template v-slot:body>
            <PasswordGenerator/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import PasswordGenerator from '../components/PasswordGenerator'
import {useHead} from "nuxt/app";

useHead({
    title: `Password generator`
})
</script>

<style scoped>

</style>

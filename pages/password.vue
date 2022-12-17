<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}
        </template>

        <template v-slot:body>
            <PasswordGenerator/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import PasswordGenerator from '../components/PasswordGenerator'
import {useHead} from "nuxt/app";

const title = 'Password generator';
useHead({
    title: title
})
</script>

<style scoped>

</style>

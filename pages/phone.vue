<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <PhoneNumberFormatter/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import {useHead} from "nuxt/app";

const title = 'Telephone formatter';
useHead({
    title: title
})
</script>

<style scoped>

</style>
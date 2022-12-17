<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>

            <GiftSearchBar/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import GiftSearchBar from '../components/GiftSearchBar'
import {useHead} from "nuxt/app";

const title = 'Gift search bar';
useHead({
    title: title
})
</script>

<style scoped>

</style>

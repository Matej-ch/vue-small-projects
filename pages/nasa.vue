<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <Exoplanets/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import Exoplanets from '../components/Exoplanets'
import {useHead} from "nuxt/app";

const title = 'NASA Exoplanet Query';
useHead({
    title: title
})
</script>

<style scoped>

</style>
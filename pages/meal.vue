<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <RandomMeal/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import RandomMeal from '../components/RandomMeal'
import {useHead} from "nuxt/app";

const title = 'Random meal';
useHead({
    title: title
})
</script>

<style scoped>

</style>

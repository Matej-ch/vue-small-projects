<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}
        </template>

        <template v-slot:body>
            <RomanNumerals/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import RomanNumerals from '../components/RomanNumerals'
import {useHead} from "nuxt/app";

const title = 'Roman numerals';
useHead({
    title: title
})
</script>

<style scoped>

</style>

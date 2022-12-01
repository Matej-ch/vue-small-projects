<template>
    <ComponentContainer>
        <template v-slot:header>
            Roman numerals
        </template>

        <template v-slot:body>
            <RomanNumerals/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import RomanNumerals from '../components/RomanNumerals'
import {useHead} from "nuxt/app";

useHead({
    title: `Roman numerals`
})
</script>

<style scoped>

</style>

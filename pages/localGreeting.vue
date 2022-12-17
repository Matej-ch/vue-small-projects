<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <HolidayGreeting/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import HolidayGreeting from '../components/HolidayGreeting'
import {useHead} from "nuxt/app";

const title = 'Local holiday greetings';
useHead({
    title: title
})
</script>

<style scoped>

</style>

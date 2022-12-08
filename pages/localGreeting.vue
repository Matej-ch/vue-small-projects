<template>
    <ComponentContainer>
        <template v-slot:header>Local holiday greetings</template>

        <template v-slot:body>
            <HolidayGreeting/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import HolidayGreeting from '../components/HolidayGreeting'
import {useHead} from "nuxt/app";

useHead({
    title: `Local holiday greetings`
})
</script>

<style scoped>

</style>

<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <WeatherApp/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import WeatherApp from '../components/WeatherApp'
import {useHead} from "nuxt/app";

const title = `Weather app`;

useHead({
    title: title
})
</script>

<style scoped>

</style>

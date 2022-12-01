<template>
    <ComponentContainer>
        <template v-slot:header>Weather app</template>

        <template v-slot:body>
            <WeatherApp/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import WeatherApp from '../components/WeatherApp'
import {useHead} from "nuxt/app";

useHead({
    title: `Weather app`
})
</script>

<style scoped>

</style>

<template>
    <ComponentContainer>
        <template v-slot:header>NASA Exoplanet Query</template>

        <template v-slot:body>
            <Exoplanets/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import Exoplanets from '../components/Exoplanets'
import {useHead} from "nuxt/app";

useHead({
    title: `Nasa platen query`
})
</script>

<style scoped>

</style>
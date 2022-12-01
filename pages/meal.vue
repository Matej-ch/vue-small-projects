<template>
    <ComponentContainer>
        <template v-slot:header>Random meal</template>

        <template v-slot:body>
            <RandomMeal/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import RandomMeal from '../components/RandomMeal'
import {useHead} from "nuxt/app";

useHead({
    title: `Random meal`
})
</script>

<style scoped>

</style>

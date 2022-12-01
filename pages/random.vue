<template>
    <ComponentContainer>
        <template v-slot:header>Random number generator</template>

        <template v-slot:body>
            <RandomNumber/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import RandomNumber from '../components/RandomNumber'
import {useHead} from "nuxt/app";

useHead({
    title: `Random number generator`
})
</script>

<style scoped>

</style>

<template>
    <ComponentContainer>
        <template v-slot:header>Stopwatch</template>

        <template v-slot:body>
            <Stopwatch/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import Stopwatch from '../components/Stopwatch'
import {useHead} from "nuxt/app";

useHead({
    title: `Stopwatch`
})

</script>

<style scoped>

</style>
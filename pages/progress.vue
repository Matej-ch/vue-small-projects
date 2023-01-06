<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <ProgressBar/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import ProgressBar from '../components/ProgressBar'
import {useHead} from "nuxt/app";

const title = `Progress bar`;

useHead({
    title: title
})
</script>

<style scoped>

</style>

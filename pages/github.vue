<template>
    <GithubStatus/>
</template>

<script setup>
import GithubStatus from '../components/GithubStatus'
import {useHead} from "nuxt/app";

useHead({
    title: `Github status`
})
</script>

<style scoped>

</style>

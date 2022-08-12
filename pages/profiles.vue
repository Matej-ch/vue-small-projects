<template>
    <GithubProfile/>
</template>

<script setup>
import {useHead} from "nuxt/app";
import GithubProfile from "../components/GithubProfile";

useHead({
    title: `Github profiles`
})
</script>

<style scoped>

</style>
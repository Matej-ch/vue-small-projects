<template>
    <GithubTimeline/>
</template>

<script setup>
import {useHead} from "nuxt/app";
import GithubTimeline from "../components/GithubTimeline";

useHead({
    title: `Github timeline`
})
</script>

<style scoped>

</style>
<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <GithubTimeline/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import {useHead} from "nuxt/app";
import GithubTimeline from "../components/GithubTimeline";

const title = 'Github timeline';
useHead({
    title: title
})
</script>

<style scoped>

</style>
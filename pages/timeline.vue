<template>
    <ComponentContainer>
        <template v-slot:header>Github timeline</template>

        <template v-slot:body>
            <GithubTimeline/>
        </template>

    </ComponentContainer>
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
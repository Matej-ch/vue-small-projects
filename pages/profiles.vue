<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <GithubProfile/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import {useHead} from "nuxt/app";
import GithubProfile from "../components/GithubProfile";

const title = 'Github profile';
useHead({
    title: title
})
</script>

<style scoped>

</style>
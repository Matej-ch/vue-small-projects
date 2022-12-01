<template>
    <ComponentContainer>
        <template v-slot:header>Github profile</template>

        <template v-slot:body>
            <GithubProfile/>
        </template>

    </ComponentContainer>
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
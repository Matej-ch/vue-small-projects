<template>
    <ComponentContainer>
        <template v-slot:header>
            Get status
        </template>

        <template v-slot:body>
            <GithubStatus/>
        </template>

    </ComponentContainer>


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

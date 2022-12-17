<template>
    <ComponentContainer>
        <template v-slot:header>
            {{title}}
        </template>

        <template v-slot:body>
            <GithubStatus/>
        </template>

    </ComponentContainer>


</template>

<script setup>
import GithubStatus from '../components/GithubStatus'
import {useHead} from "nuxt/app";

const title = 'Github status';
useHead({
    title: title
})
</script>

<style scoped>

</style>

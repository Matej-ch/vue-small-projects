<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <TrueOrFalse/>
        </template>

    </ComponentContainer>


</template>

<script setup>
import TrueOrFalse from '../components/TrueOrFalse'
import {useHead} from "nuxt/app";

const title = `True or false`;
useHead({
    title: title
})
</script>

<style scoped>

</style>

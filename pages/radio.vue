<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <XmasRadio/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import XmasRadio from '../components/XmasRadio'
import {useHead} from "nuxt/app";

const title = 'Xmas radio';
useHead({
    title: title
})
</script>

<style scoped>

</style>

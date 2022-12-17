<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>

            <JosephsGift/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import JosephsGift from '../components/JosephsGift'
import {useHead} from "nuxt/app";

const title = 'Josephs gift';
useHead({
    title: title
})
</script>

<style scoped>

</style>

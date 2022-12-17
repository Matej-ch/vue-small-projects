<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <Bin2Dec/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import Bin2Dec from '../components/Bin2Dec'
import {useHead} from "nuxt/app";

const title = 'Binary to decimal convertor';
useHead({
    title: title
})

</script>

<style scoped>

</style>

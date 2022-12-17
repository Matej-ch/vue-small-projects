<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <Calculator/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import Calculator from '../components/Calculator'
import {useHead} from "nuxt/app";

const title = 'Calculator';
useHead({
    title: title
})
</script>

<style scoped>

</style>

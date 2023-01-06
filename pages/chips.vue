<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <ChipsInput/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import ChipsInput from "../components/ChipsInput";
import {useHead} from "nuxt/app";

const title = 'Chips Input';
useHead({
    title: title
})
</script>

<style scoped>

</style>
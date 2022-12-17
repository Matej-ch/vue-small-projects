<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <ChristmasDirective/>
        </template>

    </ComponentContainer>

</template>

<script setup>

import ChristmasDirective from "../components/ChristmasDirective";
import {useHead} from "nuxt/app";

const title = 'Custom christmas directive';
useHead({
    title: title
})
</script>

<style scoped>

</style>
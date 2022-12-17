<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <NotesApp/>
        </template>

    </ComponentContainer>

</template>

<script setup>

import NotesApp from "../components/NotesApp";
import {useHead} from "nuxt/app";

const title = 'Personal notes';
useHead({
    title: title
})
</script>

<style scoped>

</style>
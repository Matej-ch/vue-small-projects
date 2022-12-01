<template>
    <ComponentContainer>
        <template v-slot:header>Personal notes</template>

        <template v-slot:body>
            <NotesApp/>
        </template>

    </ComponentContainer>

</template>

<script setup>

import NotesApp from "../components/NotesApp";
import {useHead} from "nuxt/app";

useHead({
    title: `Personal notes`
})
</script>

<style scoped>

</style>
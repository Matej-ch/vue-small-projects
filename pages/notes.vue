<template>
    <NotesApp/>
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
<template>
    <MarkdownPreviewer/>
</template>

<script setup>
import MarkdownPreviewer from '../components/MarkdownPreviewer'
import {useHead} from "nuxt/app";

useHead({
    title: `Markdown`
})
</script>

<style scoped>

</style>

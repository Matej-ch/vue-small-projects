<template>
    <ComponentContainer>
        <template v-slot:header>Markdown preview</template>

        <template v-slot:body>
            <MarkdownPreviewer/>
        </template>

    </ComponentContainer>

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

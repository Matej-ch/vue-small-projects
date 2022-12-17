<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <MarkdownPreviewer/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import MarkdownPreviewer from '../components/MarkdownPreviewer'
import {useHead} from "nuxt/app";

const title = 'Markdown preview';
useHead({
    title: title
})
</script>

<style scoped>

</style>

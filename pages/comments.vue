<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <CommentBox></CommentBox>
        </template>

    </ComponentContainer>

</template>

<script setup>
import {useHead} from "nuxt/app";

const title = 'Comment box';
useHead({
    title: title
})
</script>

<style scoped>

</style>
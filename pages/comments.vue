<template>
    <ComponentContainer>
        <template v-slot:header>Comment box</template>

        <template v-slot:body>
            <CommentBox></CommentBox>
        </template>

    </ComponentContainer>

</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
    title: `Comment box`
})
</script>

<style scoped>

</style>
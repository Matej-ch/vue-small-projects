<template>
    <ComponentContainer>
        <template v-slot:header></template>

        <template v-slot:body>
        </template>

    </ComponentContainer>

</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
    title: `JSON Creator`
})
</script>

<style scoped>

</style>
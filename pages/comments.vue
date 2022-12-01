<template>
    <ComponentContainer>
        <template v-slot:header>Comments</template>

        <template v-slot:body>
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
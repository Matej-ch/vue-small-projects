<template>
    <ComponentContainer>
        <template v-slot:header>Paginator</template>

        <template v-slot:body>
        </template>

    </ComponentContainer>

</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
    title: `Paginator`
})
</script>

<style scoped>

</style>
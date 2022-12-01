<template>
    <ComponentContainer>
        <template v-slot:header>Connect four</template>

        <template v-slot:body>
        </template>

    </ComponentContainer>

</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
    title: `Connect Four`
})
</script>

<style scoped>

</style>
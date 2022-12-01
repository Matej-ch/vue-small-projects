<template>
    <ComponentContainer>
        <template v-slot:header>Toast Popup</template>

        <template v-slot:body>
        </template>

    </ComponentContainer>

</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
    title: `Toast Popup`
})
</script>

<style scoped>

</style>
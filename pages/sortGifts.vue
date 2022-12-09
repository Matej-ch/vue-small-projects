<template>
    <ComponentContainer>
        <template v-slot:header>Sort presents</template>

        <template v-slot:body>
            <SortPresents></SortPresents>
        </template>

    </ComponentContainer>

</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
    title: `Sort presents`
})
</script>

<style scoped>

</style>
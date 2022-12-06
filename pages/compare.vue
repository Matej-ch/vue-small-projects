<template>
    <ComponentContainer>
        <template v-slot:header>Compare gifts</template>

        <template v-slot:body>
            <CompareGifts></CompareGifts>
        </template>

    </ComponentContainer>
</template>

<script setup>
import {useHead} from "nuxt/app";
import CompareGifts from "~/components/CompareGifts.vue";

useHead({
    title: `Compare gifts`
})
</script>

<style scoped>

</style>
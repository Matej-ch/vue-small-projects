<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <TransferList></TransferList>
        </template>

    </ComponentContainer>

</template>

<script setup>
import {useHead} from "nuxt/app";

const title = `Transfer List`;
useHead({
    title: title
})
</script>

<style scoped>

</style>
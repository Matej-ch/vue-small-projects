<template>
    <ComponentContainer>
        <template v-slot:header>Transfer List</template>

        <template v-slot:body>
            <TransferList></TransferList>
        </template>

    </ComponentContainer>

</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
    title: `Transfer List`
})
</script>

<style scoped>

</style>
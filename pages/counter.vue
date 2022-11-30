<template>
    <ComponentContainer>
        <template v-slot:header>Counter with step</template>

        <template v-slot:body>
            <CounterWithStep></CounterWithStep>
        </template>
    </ComponentContainer>
</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
    title: `Counter`
})
</script>

<style scoped>

</style>
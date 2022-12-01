<template>
    <ComponentContainer>
        <template v-slot:header>Calculator</template>

        <template v-slot:body>
            <Calculator/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import Calculator from '../components/Calculator'
import {useHead} from "nuxt/app";

useHead({
    title: `Calculator`
})
</script>

<style scoped>

</style>

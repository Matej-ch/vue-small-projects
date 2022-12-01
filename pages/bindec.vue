<template>
    <ComponentContainer>
        <template v-slot:header>Binary to decimal convertor</template>

        <template v-slot:body>
            <Bin2Dec/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import Bin2Dec from '../components/Bin2Dec'
import {useHead} from "nuxt/app";

useHead({
    title: `Binary to decimal`
})

</script>

<style scoped>

</style>

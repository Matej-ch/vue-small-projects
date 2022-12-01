<template>
    <ComponentContainer>
        <template v-slot:header>Border radius settings!</template>

        <template v-slot:body>
            <BorderRadiusPreviewer/>
        </template>

    </ComponentContainer>


</template>

<script setup>
import BorderRadiusPreviewer from '../components/BorderRadiusPreviewer'
import {useHead} from "nuxt/app";

useHead({
    title: `Border radius`
})
</script>

<style scoped>

</style>

<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <BorderRadiusPreviewer/>
        </template>

    </ComponentContainer>


</template>

<script setup>
import BorderRadiusPreviewer from '../components/BorderRadiusPreviewer'
import {useHead} from "nuxt/app";

const title = 'Border radius settings!';
useHead({
    title: title
})
</script>

<style scoped>

</style>

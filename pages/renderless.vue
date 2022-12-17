<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}
        </template>

        <template v-slot:body>
            <RenderlessComponent/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import RenderlessComponent from '../components/RenderlessComponent'
import {useHead} from "nuxt/app";

const title = 'Renderless component';
useHead({
    title: title
})
</script>

<style scoped>

</style>

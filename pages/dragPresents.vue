<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <DragAndDropPresents/>
        </template>

    </ComponentContainer>

</template>

<script setup>

import DragAndDropPresents from "../components/DragAndDropPresents";
import {useHead} from "nuxt/app";

const title = 'Drag and drop presents';
useHead({
    title: title
})
</script>

<style scoped>

</style>
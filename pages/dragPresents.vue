<template>
    <ComponentContainer>
        <template v-slot:header>Drag and drop presents</template>

        <template v-slot:body>
            <DragAndDropPresents/>
        </template>

    </ComponentContainer>

</template>

<script setup>

import DragAndDropPresents from "../components/DragAndDropPresents";
import {useHead} from "nuxt/app";

useHead({
    title: `Drag and drop presents`
})
</script>

<style scoped>

</style>
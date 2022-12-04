<template>
    <ComponentContainer>
        <template v-slot:header>
            Recursive Xmas Tree
        </template>

        <template v-slot:body>
            <XmasTree :size="7"/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import XmasTree from '../components/XmasTree'
import {useHead} from "nuxt/app";

useHead({
    title: `Recursive Xmas Tree`
})

</script>

<style scoped>

</style>
<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <TodoList></TodoList>
        </template>

    </ComponentContainer>

</template>

<script setup>
import {useHead} from "nuxt/app";

const title = `Todo List`;
useHead({
    title: title
})
</script>

<style scoped>

</style>
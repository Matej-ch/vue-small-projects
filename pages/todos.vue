<template>
    <ComponentContainer>
        <template v-slot:header>Todo List</template>

        <template v-slot:body>
            <TodoList></TodoList>
        </template>

    </ComponentContainer>

</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
    title: `Todo List`
})
</script>

<style scoped>

</style>
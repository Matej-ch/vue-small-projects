<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <TicTacToe/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import TicTacToe from '../components/TicTacToe'
import {useHead} from "nuxt/app";

const title = 'Tic-tac-toe';
useHead({
    title: title
})
</script>

<style scoped>

</style>
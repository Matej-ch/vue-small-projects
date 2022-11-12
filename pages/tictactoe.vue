<template>
    <TicTacToe/>
</template>

<script setup>
import TicTacToe from '../components/TicTacToe'
import {useHead} from "nuxt/app";

useHead({
    title: `Tic tac toe`
})
</script>

<style scoped>

</style>
<template>
    <ComponentContainer>
        <template v-slot:header>Tic-tac-toe</template>

        <template v-slot:body>
            <TicTacToe/>
        </template>

    </ComponentContainer>

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
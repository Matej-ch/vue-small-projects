<template>
    <ComponentContainer>
        <template v-slot:header>Countdown to Christmas</template>

        <template v-slot:body>
            <CountdownToChristmas :year="2022"></CountdownToChristmas>
        </template>

    </ComponentContainer>

</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
    title: `Countdown to Christmas`
})
</script>

<style scoped>

</style>
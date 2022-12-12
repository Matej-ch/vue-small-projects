<template>
    <ComponentContainer>
        <template v-slot:header>Josephs gift</template>

        <template v-slot:body>

            <JosephsGift/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import JosephsGift from '../components/JosephsGift'
import {useHead} from "nuxt/app";

useHead({
    title: `Josephs gift`
})
</script>

<style scoped>

</style>

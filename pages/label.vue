<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <GiftLabel/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import GiftLabel from '../components/GiftLabel'
import {useHead} from "nuxt/app";

const title = 'Gift label';
useHead({
    title: title
})
</script>

<style scoped>

</style>

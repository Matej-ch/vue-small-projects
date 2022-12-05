<template>
    <ComponentContainer>
        <template v-slot:header>Gift label</template>

        <template v-slot:body>
            <GiftLabel/>
        </template>

    </ComponentContainer>
</template>

<script setup>
import GiftLabel from '../components/GiftLabel'
import {useHead} from "nuxt/app";

useHead({
    title: `Gift label`
})
</script>

<style scoped>

</style>

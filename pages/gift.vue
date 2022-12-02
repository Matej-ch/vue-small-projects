<template>
    <ComponentContainer>
        <template v-slot:header>Gift search bar</template>

        <template v-slot:body>

            <GiftSearchBar/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import GiftSearchBar from '../components/GiftSearchBar'
import {useHead} from "nuxt/app";

useHead({
    title: `Gift search bar`
})
</script>

<style scoped>

</style>

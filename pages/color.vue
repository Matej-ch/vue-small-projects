<template>
    <ComponentContainer>
        <template v-slot:header>Color cycle</template>

        <template v-slot:body>
            <ColorCycle/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import ColorCycle from '../components/ColorCycle'
import {useHead} from "nuxt/app";

useHead({
    title: `Color cycle`
})
</script>

<style scoped>

</style>

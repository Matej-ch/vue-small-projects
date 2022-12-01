<template>
    <ComponentContainer>
        <template v-slot:header>True or false</template>

        <template v-slot:body>
            <TrueOrFalse/>
        </template>

    </ComponentContainer>


</template>

<script setup>
import TrueOrFalse from '../components/TrueOrFalse'
import {useHead} from "nuxt/app";

useHead({
    title: `True or false`
})
</script>

<style scoped>

</style>

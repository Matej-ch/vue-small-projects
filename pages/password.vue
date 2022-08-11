<template>
    <PasswordGenerator/>
</template>

<script setup>
import PasswordGenerator from '../components/PasswordGenerator'
import {useHead} from "nuxt/app";

useHead({
    title: `Password generator`
})
</script>

<style scoped>

</style>

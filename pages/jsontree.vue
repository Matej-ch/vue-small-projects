<template>
    <TreeJson/>
</template>

<script setup>
import {useHead} from "nuxt/app";
import TreeJson from '../components/TreeJson'

useHead({
    title: `Json tree`
})
</script>

<style scoped>

</style>
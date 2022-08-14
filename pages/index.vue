<template>
    <div class="px-4 py-8 text-white text-center">
        <h1 class="text-2xl font-bold">Welcome!!!</h1>
        <p class="text-base">Here lies Few simple vuejs 3 components</p>
        <ColorModePicker/>
    </div>

</template>

<script setup>
import {useHead} from "nuxt/app";
import ColorModePicker from "../components/ColorModePicker";

useHead({
    title: `Welcome`
})
</script>

<style>
</style>
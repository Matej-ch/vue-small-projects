<template>
    <div class="px-4 py-8 text-white text-center">
        <h1 class="text-2xl font-bold">Welcome!!!</h1>
        <p class="text-base">Here lies Few simple vuejs 3 components</p>
        <div>Color mode: {{$colorMode.value}}</div>
        <ColorModePicker/>
    </div>

</template>

<script setup>
import {useHead} from "nuxt/app";
import ColorModePicker from "../components/ColorModePicker";

const colorMode = useColorMode()
useHead({
    title: `Welcome`
})
</script>

<style>
body {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
}

.sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
}
</style>
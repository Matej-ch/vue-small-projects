<template>
    <div class="px-4 py-8 text-white text-center">
        <h1 class="text-2xl font-bold">Welcome!!!</h1>
        <p class="text-base">Here lies Few simple vuejs 3 components</p>

        <p>
            <ColorScheme placeholder="..." tag="span">
                Color mode: <b>{{$colorMode.preference}}</b>
                <span v-if="$colorMode.preference === 'system'">&nbsp;(<i>{{$colorMode.value}}</i> mode detected)</span>
            </ColorScheme>
        </p>
    </div>

</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
    title: `Welcome`
})
</script>

<style>
</style>
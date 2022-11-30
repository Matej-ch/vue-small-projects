<template>
    <div class="px-4 py-8 text-white text-center">
        <div class="max-w-5xl mx-auto rounded py-2 mb-8 bg-gradient-to-b from-blue-600 to-blue-400">
            <h1 class="text-2xl font-bold">Welcome!!!</h1>
            <p class="text-base">Here lies Few vuejs 3 components</p>

            <p>
                <ColorScheme placeholder="..." tag="span">
                    Color mode: <b>{{$colorMode.preference}}</b>
                    <span v-if="$colorMode.preference === 'system'">&nbsp;(<i>{{$colorMode.value}}</i> mode
                        detected)</span>
                </ColorScheme>
            </p>
        </div>

        <div class="grid gap-6 px-36" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
            <nuxt-link v-for="item in navbar.items" :to="{name: item.url}"
                       class="flex flex-row px-4 py-2 items-center rounded-sm text-slate-700 bg-slate-200 hover:bg-slate-600 rounded-md dark:bg-slate-700 dark:text-slate-200">
                <component :is="item.icon" markRaw></component>
                <span class="mx-2 font-medium">{{item.label}}</span>
            </nuxt-link>

        </div>

    </div>

</template>

<script setup>
import {useHead} from "nuxt/app";
import {useNavbarStore} from "../store/navbarStore";

useHead({
    title: `Welcome`
});

definePageMeta({
    layout: "index"
});


const navbar = useNavbarStore();

</script>

<style>
</style>
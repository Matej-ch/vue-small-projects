<template>
    <nav class="navbar">
        <h2>Vuejs 3 components</h2>
        <p class="hidden md:block text-xs md:text-sm text-white font-bold">Made by
            <a href="https://github.com/Matej-ch" class="text-blue-300 underline">matejch</a>
        </p>

        <div class="flex flex-col justify-between flex-1 md:mt-6 overflow-auto">
            <nav>
                <nuxt-link v-for="item in navbar.items" :to="{name: item.url}"
                           class="item">
                    <component :is="item.icon" markRaw></component>
                    <span class="mx-2 font-medium hidden md:inline-block">{{item.label}}</span>
                </nuxt-link>
            </nav>
        </div>

        <Time/>

    </nav>

</template>

<script setup>
import {useNavbarStore} from "~/store/navbarStore";
import Time from "./Time";

const navbar = useNavbarStore();

</script>

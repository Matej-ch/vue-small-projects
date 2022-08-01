<template>
    <nav class="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-slate-800 dark:border-slate-600">
        <h2 class="text-3xl font-semibold text-slate-800 dark:text-white">Tier 1 projects</h2>

        <div class="flex flex-col justify-between flex-1 mt-6 overflow-auto">
            <nav>
                <nuxt-link v-for="item in navbar.items" :to="{name: item.url}"
                           class="flex my-2 items-center px-4 py-2 text-slate-700 bg-slate-200 hover:bg-slate-600 rounded-md dark:bg-slate-700 dark:text-slate-200">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <span class="mx-4 font-medium">{{item.label}}</span>
                </nuxt-link>
            </nav>
        </div>
    </nav>

</template>

<script setup>
import {useNavbarStore} from "../store/navbarStore";

const navbar = useNavbarStore();

</script>

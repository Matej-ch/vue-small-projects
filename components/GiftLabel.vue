<template>
    <div class="w-full h-full flex justify-center items-center">
        <div>
            <div class="w-full max-w-2xl p-4 rounded bg-red-400 text-white">
                <div class="border-2 rounded flex flex-col md:flex-row md:items-center md:gap-8 p-4">
                    <img :src="SantaUrl" class="max-w-[12em]">
                    <div>
                        <h1 class="font-serif text-4xl">Happy Holidays!</h1>
                        <div class="mt-4 bg-white text-black p-2 rounded">TO: {{to}}</div>
                        <div class="mt-2 bg-white text-black p-2 rounded">FROM: {{from}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-2 items-center">
        <div class="flex flex-col w-full max-w-2xl">
            <label for="">To:</label>
            <input type="text" v-model="to">
        </div>

        <div class="flex flex-col w-full max-w-2xl">
            <label for="">From:</label>
            <input type="text" v-model="from">
        </div>

    </div>
</template>

<script setup>
import {ref} from "vue";
import SantaUrl from '~/assets/img/santa.svg?url'

const to = ref('')
const from = ref('')
</script>

<style scoped>

</style>
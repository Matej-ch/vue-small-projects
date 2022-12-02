<template>
    <div class="w-full h-full flex flex-col justify-center items-center">

        <div class="py-4">{{jokeSetup}}</div>

        <div class="py-4" v-show="showDelivery === true">{{jokeDelivery}}</div>

        <div class="py-4">
            <button class="btn btn-green" @click="showDelivery = true">Tell me</button>
        </div>

        <button class="btn btn-orange" v-show="showDelivery === true" @click="anotherOne">Another one</button>
    </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import {useFetch} from "nuxt/app";

const jokeSetup = ref('');
const jokeDelivery = ref('');
const showDelivery = ref(false);

onMounted(async () => {

    const {data} = await useFetch('https://v2.jokeapi.dev/joke/christmas')
    jokeSetup.value = data.value.setup;
    jokeDelivery.value = data.value.delivery;
})

async function anotherOne() {
    showDelivery.value = false;
    const {data} = await useFetch('https://v2.jokeapi.dev/joke/christmas')
    jokeSetup.value = data.value.setup;
    jokeDelivery.value = data.value.delivery;
}

</script>

<style scoped>

</style>
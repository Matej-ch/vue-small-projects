<template>
    <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
        <input type="text" class="p-2 border-2 border-gray-dark" v-model="searchTerm" placeholder="Start typing..."/>
        <div v-if="pending">Loading data...</div>
        <ul class="list-disc">
            <li v-for="product in products">{{product.title}} - {{product.price}}</li>
        </ul>
    </div>
</template>

<script setup>
import {ref, watch} from 'vue'
import {useFetch} from "nuxt/app";

const searchTerm = ref('')
const products = ref([])
const pending = ref(false);

let timeoutId = null;

const findProducts = async term => {

    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    pending.value = true;

    if (!searchTerm.value.length) {
        products.value = [];
        pending.value = false;
        return;
    }

    timeoutId = setTimeout(async () => {
        try {

            const {data} = await useFetch(`https://dummyjson.com/products/search?q=${term}`)
            products.value = data.value.products;
            pending.value = false;
        } catch (error) {
            alert(error);
            pending.value = false;
        }
    }, 300);
}

watch(searchTerm, newTerm => findProducts(newTerm))

/*
function checkString() {
    if (!searchTerm.value.length) {
        products.value = [];
    }
}
*/

</script>

<style scoped>

</style>
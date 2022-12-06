<template>
    <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
        <h1 class="text-4xl font-bold">Select items to compare</h1>
        <div class="flex flex-col gap-5 justify-center">
            <ItemSelect :products="dropdown" @select="selectFirst"/>
            <ItemSelect :products="dropdown" @select="selectSecond"/>
        </div>
        <ComparisonSummary v-if="firstItem && secondItem" :first="firstItem" :second="secondItem"/>
    </div>
</template>

<script setup>
import ItemSelect from "~/components/ItemSelect.vue";
import ComparisonSummary from "~/components/ComparisonSummary.vue";
import {ref, onMounted} from 'vue';
import {useFetch} from "nuxt/app";

const firstItem = ref('');
const secondItem = ref('');

const dropdown = ref([])

onMounted(async () => {
    try {
        const {data} = await useFetch(`https://dummyjson.com/products`)
        dropdown.value = data.value.products;
    } catch (error) {
        alert(error);
    }
})

function selectFirst(product) {
    firstItem.value = product;
}

function selectSecond(product) {
    secondItem.value = product;
}
</script>

<style scoped>

</style>
<template>
    <div class="w-full h-full p-4 flex justify-center items-center">
        <div class="max-w-md text-center">
            <div>
                <img :src="TreeSvg" alt="Christmas tree"/>
            </div>
            <div class="mt-2 flex justify-center items-center">
                <component v-for="present in presents.items" :is="present.src" markRaw/>
            </div>
            <div class="mt-16">
                <button @click="sortPresents" class="btn btn-orange">Sort</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import TreeSvg from '~/assets/img/presents/tree.svg?url'
import {usePresentStore} from "~/store/presentStore";

const presents = usePresentStore();
const isSorted = ref(false);

function sortPresents() {
    if (isSorted.value) {
        presents.$reset()
        isSorted.value = false;
    } else {
        presents.sorted;
        isSorted.value = true;
    }

}
</script>

<style scoped>

</style>
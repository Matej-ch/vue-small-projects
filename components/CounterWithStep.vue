<template>
    <div class="w-full text-center font-bold text-6xl">
        {{value}}
    </div>
    <div class="w-full gap-4 flex justify-center mt-8">
        <button @click="add()" class="btn btn-green">+</button>
        <button @click="subtract()" class="btn btn-green">-</button>
    </div>
    <div class="max-w-lg grid grid-cols-2 items-end">
        <div>
            Increment by <input type="number" step="1" v-model="increment">
        </div>
        <div>
            <button @click="reset" class="btn btn-red">Reset</button>
        </div>
    </div>


</template>

<script setup>
import {ref} from "vue";

const value = ref(0);
const increment = ref(1);

function reset() {
    value.value = 0;
}

function subtract() {
    value.value -= increment.value
}

function add() {
    value.value += increment.value
}
</script>

<style scoped>

</style>
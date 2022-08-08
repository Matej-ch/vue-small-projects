<template>
    <div>
        <div class="component-header">
            <h2>Random number generator</h2>
        </div>

        <div class="px-4 py-5">
            <div class="flex flex-col text-white">
                <div class="flex items-center justify-between mb-5">
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1">MIN</label>

                        <input v-model="min" type="text"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600"
                        >
                    </div>
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1">MAX</label>

                        <input v-model="max" type="text"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                    </div>
                </div>

                <div class="flex items-center justify-between mb-5">
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1">Include decimal values:

                            <input v-model="isDecimal" type="checkbox"
                                   class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                        </label>
                    </div>

                    <div class="flex flex-col text-center w-3/6 px-2">
                        <button @click="generate"
                                class="btn btn-green">
                            Generate
                        </button>
                    </div>

                </div>

                <div class="flex mb-5 font-bold justify-center text-center">
                    {{randomNumber}}
                </div>

            </div>
        </div>
    </div>

</template>

<script setup>
import {ref} from 'vue';

const min = ref(1);
const max = ref(5);
const isDecimal = ref(false);
const randomNumber = ref()

function generate() {

    let number = Math.random() * (max.value - min.value) + min.value;
    if (isDecimal.value === false) {
        number = Math.floor(number);
    }

    randomNumber.value = number;
}

</script>

<style scoped>

</style>
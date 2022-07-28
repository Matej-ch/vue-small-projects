<template>
    <div class="rounded-xl bg-gradient-to-b from-blue-600 to-blue-400 mr-3">
        <div class="flex flex-col">
            <div class="flex flex-col items-center justify-center text-white py-4 bg-blue-800">
                <div class="text-center uppercase text-2xl">Random number generator</div>
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
                                    class="bg-green-600 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-green-700 transition duration-300">
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
    </div>
</template>

<script setup>
import {computed, ref} from 'vue';

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
<template>
    <div class="rounded-xl bg-gradient-to-b from-blue-600 to-blue-400 mr-3">
        <div class="flex flex-col">

            <div class="flex flex-col items-center justify-center text-white py-4 px-4 bg-blue-800">
                <div class="text-center uppercase text-2xl">Random meal</div>
            </div>

            <div class="px-4 py-5">
                <div class="flex flex-col text-white">
                    <div class="flex items-end justify-between mb-5">

                        <div class="flex flex-col text-center px-2">
                            <button @click="getMeal"
                                    class="bg-orange-400 text-white px-4 py-2 rounded-md text-1xl font-bold hover:bg-orange-700 transition duration-300">
                                Get meal
                            </button>
                        </div>

                    </div>

                    <div v-show="Object.keys(meal).length !== 0">
                        test
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

import {ref} from "vue";

const meal = ref({})
const config = useRuntimeConfig();

function getMeal() {
    //const randomNumber = Math.floor(Math.random() * 52772);
    fetch(`${config.mealApiBase}${52772}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        }).catch(err => console.error(err))
}
</script>

<style scoped>

</style>
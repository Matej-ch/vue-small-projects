<template>
    <div class="flex items-end justify-center mb-5">

        <div class="flex flex-col text-center px-2">
            <button @click="getMeal"
                    class="btn btn-orange">
                Get meal
            </button>
        </div>

    </div>

    <div v-show="meals.length">
        <div v-for="meal in meals">
            <div class="flex flex-row gap-2 items-center mb-4">
                <img :src=meal.strMealThumb :alt=meal.strMeal style="max-width: 100px;">
                <h2 class="font-bold">{{meal.strMeal}}</h2>
            </div>

            <div class="text-left">
                <p class="font-bold py-2">
                    Ingredients
                </p>

                <ul>
                    <li v-for="(attr, index) in meal">
                        <span v-if="index.includes('strIngredient')">
                            {{attr}} {{meal['strMeasure' + index.replace(/^\D+/g, '')]}}
                        </span>

                    </li>
                </ul>

            </div>

            <div class="text-left">
                <p class="font-bold py-2">Instructions</p>
                {{meal.strInstructions}}
            </div>

            <div class="text-left py-4" v-if="meal.strYoutube.length">
                <iframe width="560" height="315" :src=getVideoUrl(meal.strYoutube)
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
            </div>

        </div>
    </div>
</template>

<script setup>

import {ref} from "vue";
import {useFetch, useRuntimeConfig} from "nuxt/app";

const meals = ref([])
const config = useRuntimeConfig();

const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

async function getMeal() {
    const {data} = await useFetch(`${config.mealApiBase}${52772}`)
    meals.value = data.value.meals;
}

function getVideoUrl(url) {
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}`;
    }

    return '';
}
</script>

<style scoped>

</style>
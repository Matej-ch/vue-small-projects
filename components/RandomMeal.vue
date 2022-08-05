<template>
    <div>
        <div class="flex flex-col items-center justify-center text-white py-4 px-4 bg-blue-800">
            <div class="text-center uppercase text-2xl">Random meal</div>
        </div>

        <div class="px-4 py-5">
            <div class="flex flex-col text-white">
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
                        <div class="flex flex-row gap-2">
                            <h2 class="font-bold">{{meal.strMeal}}</h2>
                            <img :src=meal.strMealThumb :alt=meal.strMeal style="max-width: 100px;">
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

            </div>
        </div>
    </div>
</template>

<script setup>

import {ref} from "vue";

const meals = ref([])
const config = useRuntimeConfig();

const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

function getMeal() {
    //const randomNumber = Math.floor(Math.random() * 52772);
    fetch(`${config.mealApiBase}${52772}`)
        .then(res => res.json())
        .then(data => {
            meals.value = data.meals;

        }).catch(err => console.error(err))
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
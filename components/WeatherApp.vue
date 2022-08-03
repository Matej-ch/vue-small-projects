<template>
    <div class="rounded-xl bg-gradient-to-b from-blue-600 to-blue-400 mr-3">
        <div class="flex flex-col">

            <div class="flex flex-col items-center justify-center text-white py-4 bg-blue-800">
                <div class="text-center uppercase text-2xl">Weather app</div>
            </div>

            <div class="px-4 py-5">
                <div class="flex flex-col text-white">
                    <div class="flex items-end justify-between mb-5">
                        <div class="flex flex-col text-center w-3/6 px-2">
                            <label class="mb-1">City</label>

                            <input v-model="city"
                                   type="text"
                                   @keyup.enter="checkWeather"
                                   class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                        </div>

                        <div class="flex flex-col text-center w-3/6 px-2">
                            <button @click="checkWeather"
                                    class="bg-red-600 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-red-700 transition duration-300">
                                Check weather
                            </button>
                        </div>

                    </div>

                    <div v-show="dataIsLoaded === true"
                         class="flex flex-col mb-5 font-bold justify-center text-center p-4  w-full">

                        <div>
                            Weather: {{weather.description}}
                        </div>
                        <div>
                            Temperature: {{main.temp}}
                        </div>
                        <div>
                            Humidity: {{main.humidity}}
                        </div>
                        <div>
                            Pressure: {{main.pressure}}
                        </div>
                    </div>

                    <div v-show="dataIsLoaded === true">
                        <span v-if="isNight" class="text-4xl">
                            &#127765;
                        </span>
                        <span v-else class="text-4xl">
                            &#127774;
                        </span>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const config = useRuntimeConfig();
const city = ref('');
const weather = ref({});
const main = ref({});
const sys = ref({});
const isNight = ref(false);
const dataIsLoaded = ref(false)

let apiKey = '';
let apiBase = '';

onMounted(() => {
    apiKey = config.apiSecret;
    apiBase = config.apiBase;

    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
        checkWeather();
    }
})

function checkWeather() {
    const url = `${apiBase}?q=${city.value}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            weather.value = data?.weather[0];
            main.value = data.main;
            sys.value = data.sys;

            const now = Date.now();

            if (now > sys.value.sunrise && now < sys.value.sunset) {
                isNight.value = true;
            }
            dataIsLoaded.value = true;
            localStorage.setItem('city', city.value)
        }).catch(err => console.error(err))
}
</script>

<style scoped>

</style>
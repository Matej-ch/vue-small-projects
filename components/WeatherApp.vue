<template>
    <div>
        <div class="component-header">
            <h2>Weather app</h2>
        </div>

        <div class="px-4 py-5">
            <div class="flex flex-col text-white">
                <div class="flex items-end justify-between mb-5">
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1">City</label>

                        <input v-model="city"
                               type="text"
                               @keyup.enter="checkWeather">
                    </div>

                    <div class="flex flex-col text-center w-3/6 px-2">
                        <button @click="checkWeather"
                                class="btn btn-red">
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

                <div v-show="dataIsLoaded === true" class="text-center">
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
</template>

<script setup>
import {onMounted, ref} from "vue";

const config = useRuntimeConfig();
const city = ref('');
const weather = ref({});
const main = ref({});
const sys = ref({});
const isNight = ref(true);
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
            if (now > (sys.value.sunrise * 1000) && now < (sys.value.sunset * 1000)) {
                isNight.value = false;
            }
            dataIsLoaded.value = true;
            localStorage.setItem('city', city.value)
        }).catch(err => console.error(err))
}
</script>

<style scoped>

</style>
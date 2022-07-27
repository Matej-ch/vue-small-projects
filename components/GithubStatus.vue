<template>
    <div class="container">
        <div>

            <div class="flex flex-col justify-center items-center w-full">
                <button @click="getStatus"
                        class="bg-green-600 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-green-700 transition duration-300">
                    Get status
                </button>
            </div>
            <hr>
            <div v-show="currentStatus" style="width: 100%; text-align: center;">
                <div>
                    {{currentStatus}}
                </div>
                <hr>
            </div>


        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {useFetch} from "nuxt/app";

const currentStatus = ref('');

async function getStatus() {
    const response = await useFetch('https://www.githubstatus.com/api/v2/status.json')

    currentStatus.value = response.data.value.status.description
}

</script>

<style scoped>

</style>

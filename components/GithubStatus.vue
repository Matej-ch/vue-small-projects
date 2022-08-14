<template>

    <div class="flex flex-col w-full">
        <div class="flex flex-col justify-center items-center w-full p-4">
            <button @click="getStatus"
                    class="btn btn-green">
                Get status
            </button>
        </div>

        <div v-show="currentStatus" class="py-2" style="width: 100%; text-align: center;">
            <div class="font-bold">
                {{currentStatus}}
            </div>
        </div>

        <div v-for="operation in githubOperations" class="py-2 flex flex-row justify-between w-full flex-wrap px-4"
             :class="operation.status === 'operational' ? 'bg-emerald-600' : 'bg-orange-600'">
            <div class="flex w-1/2 flex-col font-bold">
                {{operation.name}}
                <span class="text-[.65rem]">{{operation.description}}</span>
            </div>
            {{operation.status === 'operational' ? '&#9989;' : '&#128721;'}}
            <hr class="w-full">
        </div>
    </div>

</template>

<script setup>
import {ref, onMounted} from 'vue';
import {useFetch} from "nuxt/app";

const currentStatus = ref('');
const githubOperations = ref([]);

onMounted(() => {
    fetch('https://www.githubstatus.com/api/v2/summary.json')
        .then(res => res.json())
        .then(data => {
            githubOperations.value = data.components;
        })
})

async function getStatus() {
    const response = await useFetch('https://www.githubstatus.com/api/v2/status.json')

    currentStatus.value = response.data.value.status.description
}

</script>

<style scoped>

</style>

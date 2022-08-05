<template>

    <div class="flex flex-col w-full">
        <div class="flex flex-col justify-center items-center w-full">
            <button @click="getStatus"
                    class="btn btn-green">
                Get status
            </button>
        </div>

        <div v-show="currentStatus" class="pt-4" style="width: 100%; text-align: center;">
            <div>
                {{currentStatus}}
            </div>
        </div>

        <div v-for="operation in githubOperations" class="py-2 flex flex-row justify-between w-full flex-wrap">
            <div class="flex w-1/2">
                {{operation.name}}
                {{operation.status === 'operational' ? '&#9989;' : '&#128721;'}}
            </div>
            {{operation.description}}
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

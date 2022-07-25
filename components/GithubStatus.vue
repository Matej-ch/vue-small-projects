<template>
    <div class="container">
        <div>

            <div class="flex flex-col justify-center items-center w-full">
                <button @click="getStatus">
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

const currentStatus = ref(undefined);

onMounted(() => {
    githubStatus();
});

async function githubStatus() {
    await useFetch('https://www.githubstatus.com', {
        method: 'get',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
}

async function getStatus() {
    const page = await useFetch('https://www.githubstatus.com/api/v2/status.json', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    currentStatus.value = page.status.description
}

</script>

<style scoped>

</style>

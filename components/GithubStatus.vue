<template>
  <div>
    <div class="center grid">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" style="flex-direction: column;">
          <vs-button color="dark" @click="getStatus">
            Get status
          </vs-button>
        </vs-col>
        <vs-divider />

        <div v-show="currentStatus" style="width: 100%; text-align: center;">
          <div>
            {{ currentStatus }}
          </div>
          <vs-divider />
        </div>

        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" style="flex-direction: column;" />
      </vs-row>
    </div>
  </div>
</template>

<script setup>
import {ref,onMounted} from 'vue';
import {useFetch} from "nuxt/app";

const currentStatus = ref(undefined);

onMounted(() => {
    githubStatus();
});

async function githubStatus() {
    await useFetch('https://www.githubstatus.com',{
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

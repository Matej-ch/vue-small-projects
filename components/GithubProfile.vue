<template>
    <div class="flex justify-between mb-3 w-full flex-col">
        <label class="mb-1 font-bold text-white">Github username</label>
        <input v-model="username" placeholder="Github username" @keyup.enter="search"
               class="w-full">
    </div>

    <div>
        <button @click="search"
                class="btn btn-green">
            Search
        </button>
    </div>

    <div v-show="message.length" class="p-4 text-white font-bold my-2"
         :class="isFound ? 'bg-green-500' : 'bg-red-500'">
        {{message}}
    </div>

    <div class="flex text-base font-bold gap-2 mb-3 w-full flex-row" v-show="isFound">
        <img :src=avatar :alt=foundUserName class="object-contain h-24">
        User {{foundUserName}} has {{followers}} followers and {{repoCount}} repositories
    </div>

    <div v-show="topRepos.length">
        <div v-for="repo in topRepos" class="flex justify-between pb-4">
            <div>
                <div class="font-bold flex gap-4"> {{repo.full_name}}
                    <a :href=repo.html_url class="text-slate-900 flex flex-row gap-1 items-center"
                       target="_blank"
                       rel="noreferrer nofollow">
                        <BaselineInsertLink/>
                        Repository
                    </a>
                </div>
                <div> {{repo.description}}</div>
            </div>

            <span>

            </span>
            <span class="font-bold"> {{repo.language}} </span>
        </div>
    </div>
</template>

<script setup>
import BaselineInsertLink from '~icons/ic/baseline-insert-link'
import {ref} from "vue";
import {useFetch} from "nuxt/app";

const username = ref('')
const foundUserName = ref('')
const message = ref('')
const isFound = ref(false)

const avatar = ref('');
const followers = ref('0')
const repoCount = ref('0')
const topRepos = ref([]);

function search() {

    if (!username.value.length) {
        return;
    }

    topRepos.value = [];

    fetch(`https://api.github.com/users/${username.value}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw Error(`${username.value} not found`);
        })
        .catch(err => {
            message.value = err;
            isFound.value = false;
            return err;
        })
        .then(data => {
            isFound.value = true;
            repoCount.value = data.public_repos;
            followers.value = data.followers;
            avatar.value = data.avatar_url;
            foundUserName.value = data.login;
            message.value = 'User found';

            if (foundUserName.value.length) {
                getRepos(data.repos_url);
            }


        })
}

async function getRepos(url) {
    const {data} = await useFetch(url)
    topRepos.value = data.value.slice(0, 5);
}
</script>

<style scoped>

</style>
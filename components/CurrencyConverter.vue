<template>
    <div class="flex items-end justify-between mb-5">
        <div class="flex flex-col w-3/6 px-2">
            <label class="mb-1">From</label>
            <select v-model="from" name="currency-from">
                <option :value="name" v-for="(value, name, index) in currencyOptions">
                    {{value}}
                </option>
            </select>
        </div>

        <div class="flex flex-col w-3/6 px-2">
            <label class="mb-1">To</label>
            <select v-model="to" name="currency-to">
                <option :value="name" v-for="(value, name, index) in currencyOptions">
                    {{value}}
                </option>
            </select>
        </div>
    </div>

    <div class="flex items-end justify-between mb-5">
        <div class="flex flex-col w-3/6 px-2">
            <label class="mb-1">Amount</label>

            <input v-model="amount" step="0.01"
                   type="number">
        </div>

        <div class="flex flex-col w-3/6 px-2">
            <button @click="convert"
                    class="btn btn-red">
                Convert
            </button>
        </div>
    </div>

    <div v-show="msg.length" class="bg-blue-900 text-white rounded p-4 font-bold">
        {{msg}}
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useFetch, useRuntimeConfig} from "nuxt/app";

const config = useRuntimeConfig();
const amount = ref(0)
const msg = ref('')
const from = ref('')
const to = ref('')

const currencyOptions = ref({});

let apiKey = '';
let apiBase = '';

onMounted(() => {
    apiKey = config.currencyApiKey;
    apiBase = config.currencyApiBase;

    getCountries();

})

function convert() {
    if (isNaN(amount.value)) {
        msg.value = 'Is not a number';
        return;
    }
    const myHeaders = new Headers();
    myHeaders.append("apikey", apiKey);

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    let url = apiBase.replace('{to}', to.value).replace('{from}', from.value).replace('{amount}', amount.value);

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.success === true) {
                msg.value = `${amount.value} ${from.value} -> ${result.result} ${to.value}`;
            } else {
                msg.value = `Cannot convert: ${result.message}`;
            }

        })
        .catch(error => console.log('error', error));
}

async function getCountries() {
    const {data} = await useFetch(() => "https://api.apilayer.com/exchangerates_data/symbols", {
        onRequest({request, options}) {
            options.headers = options.headers || {}
            options.headers.apikey = apiKey
        }
    })

    currencyOptions.value = data.value.symbols;
}

</script>

<style scoped>

</style>
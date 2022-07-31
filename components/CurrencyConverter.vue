<template>
    <div class="rounded-xl bg-gradient-to-b from-blue-600 to-blue-400 mr-3">
        <div class="flex flex-col">

            <div class="flex flex-col items-center justify-center text-white py-4 bg-blue-800">
                <div class="text-center uppercase text-2xl">Currency converter</div>
            </div>

            <div class="px-4 py-5">
                <div class="flex flex-col text-white">

                    <div class="flex items-end justify-between mb-5">
                        <div class="flex flex-col text-center w-3/6 px-2">
                            <label class="mb-1">From</label>

                            <input v-model="from"
                                   type="text"
                                   class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                        </div>

                        <div class="flex flex-col text-center w-3/6 px-2">
                            <label class="mb-1">To</label>

                            <input v-model="to"
                                   type="text"
                                   class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                        </div>

                    </div>


                    <div class="flex items-end justify-between mb-5">
                        <div class="flex flex-col text-center w-3/6 px-2">
                            <label class="mb-1">Amount</label>

                            <input v-model="amount"
                                   type="text"
                                   class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                        </div>

                        <div class="flex flex-col text-center w-3/6 px-2">
                            <button @click="convert"
                                    class="bg-red-600 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-red-700 transition duration-300">
                                Convert
                            </button>
                        </div>
                    </div>

                    <div v-show="msg.length" class="bg-blue-900 text-white rounded-full px-4 font-bold">
                        {{msg}}
                    </div>

                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const config = useRuntimeConfig();
const amount = ref(0)
const msg = ref('')
const from = ref('')
const to = ref('')

let apiKey = '';
let apiBase = '';

onMounted(() => {
    apiKey = config.currencyApiKey;
    apiBase = config.currencyApiBase;
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
                msg.value = `${amount.value}${from.value} -> ${result.result}${to.value}`;
            } else {
                msg.value = `Cannot convert: ${result.message}`;
            }

        })
        .catch(error => console.log('error', error));
}

function getCountries() {
    const myHeaders = new Headers();
    myHeaders.append("apikey", apiKey);

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

</script>

<style scoped>

</style>
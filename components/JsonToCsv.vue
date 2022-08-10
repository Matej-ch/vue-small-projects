<template>
    <div>
        <div class="component-header">
            <h2>Json to CSV converter</h2>
        </div>

        <div class="px-4 py-5">

            <div class="flex items-center justify-between mb-3 w-full flex-col">
                <label class="mb-1 font-bold text-white">Json to convert</label>
                <textarea v-model="json" cols="30" rows="10" placeholder="Json to convert"
                          @keyup="checkValidity(true)"
                          @paste="checkValidity(true)">
                </textarea>
            </div>

            <div>
                <button @click="convert"
                        class="btn btn-green">
                    Convert
                </button>
            </div>

            <div v-show="message.length" class="bg-red-300 text-red-500 p-4">
                {{message}}
            </div>

            <div class="flex items-center justify-between mb-3 w-full flex-col">
                <label class="mb-1 font-bold text-white">CSV result</label>
                <textarea v-model="csv" cols="30" rows="10" placeholder="CSV" disabled
                          class="pointer-events-none"></textarea>
            </div>

            <div class="p-4 flex gap-2">
                <button class="btn btn-slate" @click="json = ''">Clear Json</button>
                <button class="btn btn-orange" @click="csv = ''">Clear Csv</button>
                <button class="btn btn-red" @click="json = ''; csv = ''">Clear Both</button>
            </div>
        </div>

    </div>
</template>

<script setup>
import {ref} from "vue";
import _ from 'lodash';

const json = ref('');
const csv = ref('')
const message = ref('');

function convert() {

    if (!isJson()) {
        return;
    }

    const tempJson = JSON.parse(json.value);
    let header = Object.keys(tempJson);
    let content = Object.values(tempJson);

    csv.value = `${header}\n${content}`;
}

function checkValidity(withDelay = false) {
    if (withDelay) {
        _.delay(function () {

            if (!isJson()) {
                message.value = 'Json string is invalid';
            } else {
                message.value = '';
            }

        }, 2000);
    } else {
        if (!isJson()) {
            message.value = 'Json string is invalid';
        } else {
            message.value = '';
        }
    }
}

function isJson() {
    try {
        JSON.parse(json.value);
    } catch (e) {
        return false;
    }

    return true;
}

</script>

<style scoped>

</style>
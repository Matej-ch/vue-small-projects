<template>
    <div>
        <div class="component-header">
            <h2>CSV to Json converter</h2>
        </div>

        <div class="px-4 py-5">

            <div class="flex items-center justify-between mb-3 w-full flex-col">
                <label class="mb-1 font-bold text-white">Csv to convert</label>
                <textarea v-model="csv" cols="30" rows="10" placeholder="Csv to convert"
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
                <label class="mb-1 font-bold text-white">Json result</label>
                <textarea v-model="json" cols="30" rows="10" placeholder="Json" disabled
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

const json = ref('');
const csv = ref('')
const message = ref('');
const delimiter = ref(',');

function convert() {

    if (!csv.value.length) {
        return;
    }
    const csvParts = csv.value.split("\n");

    let header = csvParts[0].split(delimiter.value);
    let content = csvParts[1].split(delimiter.value);

    json.value = JSON.stringify(header.reduce((r, e, i) => (r[e] = content[i], r), {}));
}

function checkValidity(withDelay = false) {

}
</script>

<style scoped>

</style>
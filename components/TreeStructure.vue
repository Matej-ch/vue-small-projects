<template>
    <div>
        <div class="component-header">
            <h2>Tree structure from json</h2>
        </div>

        <div class="px-4 py-2">
            <div class="flex items-center justify-between mb-3 w-full flex-col">

                <div class="flex items-center justify-between mb-3 w-full flex-col">
                    <label class="mb-1 font-bold text-white">Json to convert</label>
                    <textarea v-model="jsonData" cols="30" rows="10" placeholder="Json to convert"></textarea>
                </div>

                <div>
                    <button @click="convert"
                            class="btn btn-green">
                        Show tree
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from "vue";

const jsonData = ref('')
const root = ref(true)
const filterKey = ref("")
const fullMarkup = ref(false)
const comma = ref(false)
const showObj = ref([]);

const theData = computed(() => {
    const filter = filterKey.value && filterKey.value.toLowerCase();
    if (filter) {
        let filteredData = {};
        const keys = Object.keys(jsonData.value);
        keys.forEach(key => {
            if (
                key.toLowerCase().includes(filter) ||
                JSON.stringify(jsonData.value[key]).includes(filter)
            ) {
                filteredData[key] = jsonData.value[key];
            }
        });
        return filteredData;
    } else {
        return jsonData.value;
    }
})

const last = computed(() => {
    return Object.keys(theData).length - 1;
})

function toggle(index) {
    showObj.value[index] = !showObj.value[index];
    showObj.value.splice(index, 1, showObj.value[index]);
}

function convert() {

    //console.log(JSON.parse(jsonData.value))

    showObj.value = Array.from({length: Object.keys(JSON.parse(jsonData.value)).length}, (_) => true);

    //console.log(showObj.value);
}
</script>

<style scoped>

</style>
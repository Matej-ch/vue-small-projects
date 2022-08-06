<template>
    <div>
        <div class="component-header">
            <h2>Color cycle</h2>
        </div>

        <div class="px-4 py-5">
            <div class="flex flex-col text-white">
                <div class="flex items-center justify-between mb-5">
                    <div class="flex flex-col text-center w-2/6 px-2">
                        <label class="mb-1">Red (RR)</label>

                        <input v-model="rr" type="text"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600"
                        >
                    </div>
                    <div class="flex flex-col text-center w-2/6 px-2">
                        <label class="mb-1">Green (GG)</label>

                        <input v-model="gg" type="text"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                    </div>

                    <div class="flex flex-col text-center w-2/6 px-2">
                        <label class="mb-1">Blue (BB)</label>

                        <input v-model="bb" type="text"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                    </div>
                </div>

                <div class="flex items-center justify-between mb-5">
                    <div class="flex flex-col text-center w-2/6 px-2">
                        <label class="mb-1">Red increment</label>

                        <input v-model="rrIncrement" type="text"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600"
                        >
                    </div>
                    <div class="flex flex-col text-center w-2/6 px-2">
                        <label class="mb-1">Green increment</label>

                        <input v-model="ggIncrement" type="text"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                    </div>

                    <div class="flex flex-col text-center w-2/6 px-2">
                        <label class="mb-1">Blue increment</label>

                        <input v-model="bbIncrement" type="text"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                    </div>
                </div>

                <div class="flex items-center justify-between mb-5">
                    <div class="flex flex-col text-center w-2/6 px-2">
                        <label class="mb-1">Interval</label>
                        <input v-model="interval" type="number" step="0.01"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600"
                        >
                    </div>
                </div>

                <div>
                    <button @click="startColorCycle"
                            class="btn btn-green">
                        Translate
                    </button>
                    <button @click="stopColorCycle"
                            class="btn btn-red">
                        Translate
                    </button>
                </div>

                <div class="p-8 rounded-sm" :style="backgroundObject">
                    Color block
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {ref, computed} from "vue";

const rr = ref('');
const bb = ref('');
const gg = ref('');

const rrIncrement = ref('');
const bbIncrement = ref('');
const ggIncrement = ref('');

const fillColor = ref('FFFFFF');

const interval = ref(0.25);


const backgroundObject = computed(() => {
    return {
        backgroundColor: `#${fillColor.value}`,
    }
})

function startColorCycle() {

}

function stopColorCycle() {

}
</script>

<style scoped>

</style>
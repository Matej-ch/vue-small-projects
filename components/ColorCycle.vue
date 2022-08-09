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
                    <button v-if="isRunning" @click="stopColorCycle"
                            class="btn btn-red">
                        Stop
                    </button>
                    <button v-else @click="startColorCycle"
                            class="btn btn-green">
                        Start
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

const rr = ref('FF');
const gg = ref('FF');
const bb = ref('FF');

const rrIncrement = ref(0x1);
const ggIncrement = ref(0x1);
const bbIncrement = ref(0x1);

const isRunning = ref(false)

const interval = ref(0.25);

let intervalID = null;

const backgroundObject = computed(() => {
    return {
        backgroundColor: `#${rr.value}${gg.value}${bb.value}`,
    }
})

function startColorCycle() {
    isRunning.value = !isRunning.value;

    if (!intervalID) {
        intervalID = setInterval(() => {

            rr.value;
            for (let i = 0x0; i <= 0xFF; rrIncrement.value++) {
                i.toString(16);
                //console.log("" + i.toString(16) + " = " + i)
            }

            for (let i = 0x0; i <= 0xFF; ggIncrement.value++) {
                i.toString(16);
                //console.log("" + i.toString(16) + " = " + i)
            }


            for (let i = 0x0; i <= 0xFF; bbIncrement.value++) {
                i.toString(16);
                //console.log("" + i.toString(16) + " = " + i)
            }


        }, interval.value * 1000)

    }


}

function stopColorCycle() {
    isRunning.value = !isRunning.value;

    clearInterval(intervalID);
    intervalID = null;
}
</script>

<style scoped>

</style>
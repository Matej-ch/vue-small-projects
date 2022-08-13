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
                        <input v-model="animationDelay" type="number" step="0.01"
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

                <div class="p-8 rounded-sm color-cycle"
                     :style="{'animation-duration': animationDuration,'animation-delay':animationDelay/*,'animation-name': animationName */}">
                    &nbsp;
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

const animationDuration = ref('11s')
const animationDelay = ref(0.25)
const animationName = ref('colorchange');

const rrIncrement = ref(0x1);
const ggIncrement = ref(0x1);
const bbIncrement = ref(0x1);

const isRunning = ref(false)
const backgroundObject = computed(() => {
    return {
        backgroundColor: `#${rr.value}${gg.value}${bb.value}`,
    }
})

function startColorCycle() {
    isRunning.value = !isRunning.value;

    rr.value;
    for (let i = 0x0; i <= 0xFF; rrIncrement.value++) {
        i.toString(16);
        //console.log("" + i.toString(16) + " = " + i)
    }

    /*for (let i = 0x0; i <= 0xFF; ggIncrement.value++) {
        i.toString(16);
        //console.log("" + i.toString(16) + " = " + i)
    }


    for (let i = 0x0; i <= 0xFF; bbIncrement.value++) {
        i.toString(16);
        //console.log("" + i.toString(16) + " = " + i)
    }*/
}

let dynamicStyles = null;

function addAnimation(body) {
    if (!dynamicStyles) {
        dynamicStyles = document.createElement('style');
        dynamicStyles.type = 'text/css';
        document.head.appendChild(dynamicStyles);
    }

    dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}

addAnimation(`
      @keyframes move-eye {
         from {
           margin-left: -20%;
         }
        to {
          margin-left: 100%;
        }
      }
    `);


function stopColorCycle() {
    isRunning.value = !isRunning.value;
}
</script>

<style scoped>
.color-cycle {
    background-color: rgb(255, 255, 255);
    animation-name: colorchange;
    animation-iteration-count: infinite;
}

@keyframes colorchange {
    0% {
        background-color: #f4e749;
    }
    10% {
        background-color: #60bbf4;
    }
    20% {
        background-color: aqua;
    }
    30% {
        background-color: #7d42dd;
    }
    40% {
        background-color: #e5903a;
    }
    50% {
        background-color: #a58828;
    }
    60% {
        background-color: #bc3bbc;
    }
    70% {
        background-color: #164a16;
    }
    80% {
        background-color: #d94646;
    }
    90% {
        background-color: #b96c52;
    }
    100% {
        background-color: #bcef32;
    }
}
</style>
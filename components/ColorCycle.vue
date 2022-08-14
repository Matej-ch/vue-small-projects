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

                        <input v-model="rr" type="text">
                    </div>
                    <div class="flex flex-col text-center w-2/6 px-2">
                        <label class="mb-1">Green (GG)</label>

                        <input v-model="gg" type="text">
                    </div>

                    <div class="flex flex-col text-center w-2/6 px-2">
                        <label class="mb-1">Blue (BB)</label>

                        <input v-model="bb" type="text">
                    </div>
                </div>

                <div class="flex items-center justify-between mb-5">
                    <div class="flex flex-col text-center w-2/6 px-2">
                        <label class="mb-1">Red increment</label>

                        <input v-model="rrIncrement" type="number" step="1">
                    </div>
                    <div class="flex flex-col text-center w-2/6 px-2">
                        <label class="mb-1">Green increment</label>

                        <input v-model="ggIncrement" type="number" step="1">
                    </div>

                    <div class="flex flex-col text-center w-2/6 px-2">
                        <label class="mb-1">Blue increment</label>

                        <input v-model="bbIncrement" type="number" step="1">
                    </div>
                </div>

                <div class="flex items-center justify-between mb-5">
                    <div class="flex flex-col text-center w-2/6 px-2">
                        <label class="mb-1">Interval</label>
                        <input v-model="animationDelay" type="number" step="0.01">
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

                <div class="p-8 rounded-sm"
                     style="transition-property: background-color;transition-timing-function: ease-in-out;"
                     :style="{'transition-duration': `${animationDelay}s`,'background-color': bcColor}">
                    &nbsp;
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {ref, computed} from "vue";
import _ from 'lodash';

const rr = ref('FF');
const gg = ref('FF');
const bb = ref('FF');

//const animationDuration = ref('11s')
const animationDelay = ref(0.25)
//const animationName = ref('colorchange');

const bcColor = ref('');

const rrIncrement = ref(2);
const ggIncrement = ref(2);
const bbIncrement = ref(2);

const isRunning = ref(false)
let intervalID = null;
let colorArray = [];

function startColorCycle() {
    isRunning.value = !isRunning.value;

    const colors = generateColorArray();

    _.each(colors, function (color, i) {
        setTimeout(function () {
            bcColor.value = color;
        }, 1000 * i);
    });


}

function generateColorArray() {
    const rrIncrementHex = parseInt(rrIncrement.value.toString(16), 16);
    let rrArray = [];
    let bbArray = [];
    let ggArray = [];

    let zip = (a1, a2, a3) => a1.map((x, i) => `#${x}${a2[i]}${a3[i]}`);

    for (let i = 0x0; i <= 0xFF; i += rrIncrementHex) {
        rrArray.push(i.toString(16));
    }

    const ggIncrementHex = parseInt(ggIncrement.value.toString(16), 16);
    for (let i = 0x0; i <= 0xFF; i += ggIncrementHex) {
        ggArray.push(i.toString(16));
    }

    const bbIncrementHex = parseInt(bbIncrement.value.toString(16), 16);
    for (let i = 0x0; i <= 0xFF; i += bbIncrementHex) {
        bbArray.push(i.toString(16));
    }

    return zip(rrArray, ggArray, bbArray);
}

//let dynamicStyles = null;

/*function addAnimation(body) {
    if (!dynamicStyles) {
        dynamicStyles = document.createElement('style');
        dynamicStyles.type = 'text/css';
        document.head.appendChild(dynamicStyles);
    }

    dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}*/

/*
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
*/


function stopColorCycle() {
    isRunning.value = !isRunning.value;

    clearInterval(intervalID);
    // release our intervalID from the variable
    intervalID = null;
}
</script>

<style scoped>
/*.color-cycle {
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
}*/
</style>
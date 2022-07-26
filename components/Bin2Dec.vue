<template>

    <div class="rounded-xl bg-gradient-to-b from-blue-600 to-blue-400 mr-3">
        <div class="flex flex-col">
            <div class="flex flex-col items-center justify-center text-white py-4 bg-blue-800">
                <div class="text-center uppercase text-2xl">Binary to deca convertor</div>
            </div>

            <div class="px-4 py-5">
                <div class="flex flex-col text-white">

                    <div class="flex items-end justify-between mb-5">
                        <div class="flex flex-col text-center w-3/6 px-2">
                            <label class="mb-1" for="weight-kilograms">Binary number</label>

                            <input v-model="binaryNumber" @keyup="checkBinary"
                                   class="py-3 px-5 rounded focus:outline-none text-slate-600 focus:text-slate-600"
                            >
                        </div>
                        <div class="flex flex-col text-center w-3/6 px-2">
                            <button v-show="!errorMessage" @click="convertBinary"
                                    class="bg-green-600 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-green-700 transition duration-300">
                                Show Decimal
                            </button>
                        </div>
                    </div>

                </div>

                <div class="flex items-center justify-between mb-3 w-full flex-col">
                    <div class="flex flex-col text-right px-2 font-bold text-xl">
                        {{decimal}}
                    </div>
                    <div v-show="errorMessage" class="bg-red-500 flex flex-col text-center px-2 font-bold"
                         style="margin-bottom: 15px;margin-top: 15px;">
                        {{errorMessage}}
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script setup>
import {ref} from 'vue';

const binaryNumber = ref('');
const decimal = ref('');
const errorMessage = ref('');

function checkBinary() {
    for (const char of binaryNumber.value) {
        if (char !== '0' && char !== '1') {
            errorMessage.value = 'Binary number can only contain 0 a 1'
        } else {
            errorMessage.value = ''
        }
    }
}

function convertBinary() {
    let dec = 0
    for (let i = binaryNumber.value.length - 1; i >= 0; i--) {
        dec += parseInt(binaryNumber.value[i]) * Math.pow(2, binaryNumber.value.length - 1 - i)
    }

    decimal.value = dec;
}

</script>

<style scoped lang="scss">
.btn-wrapper {
    padding-bottom: 15px;
    padding-top: 15px;
    display: flex;
    justify-content: center;
}

.output {
    padding: 15px;
}
</style>

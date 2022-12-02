<template>
    <div class="flex flex-col text-white">

        <div class="flex items-end justify-between mb-5">
            <div class="flex flex-col font-bold w-3/6 px-2">
                <label class="mb-1" for="weight-kilograms">Binary number</label>

                <input v-model="binaryNumber" @input="checkBinary" @keyup="convertBinary">
            </div>
            <div class="flex flex-col text-center w-3/6 px-2">
                <button v-show="!errorMessage" @click="convertBinary"
                        class="btn btn-green">
                    Show Decimal
                </button>
            </div>
        </div>

    </div>

    <div class="flex items-center justify-between mb-3 w-full flex-col">
        <div class="flex flex-col text-right px-2 font-bold text-xl">
            {{decimal}}
        </div>
        <div v-show="errorMessage" class="bg-red-500 flex flex-col text-center px-2 font-bold my-4">
            {{errorMessage}}
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const binaryNumber = ref('');
const decimal = ref(0);
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
</style>

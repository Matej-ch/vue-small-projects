<template>
    <div>
        <label for="">Binary number
            <input v-model="binaryNumber" @keyup="checkBinary">
        </label>

        <div v-show="errorMessage" title="Danger" class="bg-red-500" style="margin-bottom: 15px;margin-top: 15px;">
            {{errorMessage}}
        </div>

        <div v-show="!errorMessage" class="btn-wrapper">
            <button @click="convertBinary">
                Show Decimal
            </button>
        </div>

        <div class="output">
            {{decimal}}
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

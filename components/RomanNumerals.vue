<template>
    <div class="rounded-xl bg-gradient-to-b from-blue-600 to-blue-400 mr-3">
        <div class="flex flex-col">

            <div class="flex flex-col items-center justify-center text-white py-4 bg-blue-800">
                <div class="text-center uppercase text-2xl">Roman numerals</div>
            </div>

            <div class="px-4 py-5">
                <div class="flex flex-col text-white">
                    <div class="flex items-center justify-between mb-5">
                        <div class="flex flex-col text-center w-3/6 px-2">
                            <label class="mb-1">Roman numeral</label>

                            <input v-model="roman" type="text" @keyup="generateNumber"
                                   class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600"
                            >
                        </div>
                        <div class="flex flex-col text-center w-3/6 px-2">
                            <label class="mb-1">Decimal</label>

                            <input v-model="decimal" type="text" @keyup="generateRoman"
                                   class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                        </div>
                    </div>

                    <div v-show="msg.length"
                         class="flex mb-5 font-bold justify-center text-center p-4 bg-red-300 bg-red-600">
                        {{msg}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";

const numerals = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
};

const roman = ref('');
const decimal = ref(0);
const msg = ref('')

function generateNumber() {

    let result = 0;
    let tempRomanValue = roman.value;
    for (const [romanNum, number] of Object.entries(numerals)) {
        while (tempRomanValue.indexOf(romanNum) !== -1) {
            result += number;
            tempRomanValue = tempRomanValue.substring(romanNum.length);
        }
    }

    decimal.value = result;
}

function generateRoman() {
    if (decimal.value < 1 || decimal.value > 3999) {
        msg.value = 'Cannot convert number';
        return;
    }

    let result = '';
    let tempDecimalValue = decimal.value;
    for (const [numeral, arabic] of Object.entries(numerals)) {
        while (tempDecimalValue >= arabic) {
            result += numeral;
            tempDecimalValue -= arabic;
        }
    }

    roman.value = result;
}

</script>

<style scoped>

</style>
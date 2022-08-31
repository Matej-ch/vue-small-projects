<template>
    <div>
        <div class="component-header">
            <h2>Roman numerals</h2>
        </div>

        <div class="px-4 py-5">
            <div class="flex flex-col text-white">
                <div class="flex items-center justify-between mb-5">
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1">Roman numeral</label>

                        <input v-model="roman" type="text" @keyup="generateDecimal">
                    </div>
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1">Decimal</label>

                        <input v-model="decimal" type="text" @keyup="generateRoman">
                    </div>
                </div>

                <div v-show="msg.length"
                     class="flex mb-5 font-bold justify-center text-center p-4 bg-red-300 text-red-600">
                    {{msg}}
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
    'XL': 40,
    'L': 50,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
};

const roman = ref('');
const decimal = ref(0);
const msg = ref('')

function generateDecimal() {
    let sum = 0;
    for (let i = 0; i < roman.value.length; i++) {
        const current = numerals[roman.value[i]];
        const next = numerals[roman.value[i + 1]];
        if (next === undefined) {
            sum += current;
            continue;
        }
        if (current >= next) {
            sum += current;
            continue;
        }
        sum -= current;
    }

    decimal.value = sum;
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
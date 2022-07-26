<template>

    <div class="rounded-xl bg-gradient-to-b from-blue-600 to-blue-400 mr-3">
        <div class="flex flex-col">
            <div class="flex flex-col items-center justify-center text-white py-4 bg-blue-800">
                <div class="text-center uppercase text-2xl">True or false</div>
            </div>

            <div class="px-4 py-5">
                <div class="flex flex-col text-white">
                    <div class="flex items-center justify-between mb-5">
                        <div class="flex flex-col text-center w-3/6 px-2">
                            <label class="mb-1">First value</label>

                            <input v-model="firstOperand" @keyup="compareValues"
                                   class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                        </div>
                        <div class="flex flex-col text-center w-3/6 px-2">
                            <label class="mb-1">Second value</label>

                            <input v-model="secondOperand" @keyup="compareValues"
                                   class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                        </div>
                    </div>

                    <div class="flex items-center justify-between mb-5 text-right">
                        <div class="flex flex-col text-right w-3/6 px-2">
                            <label for="decimals" class="mr-3">Comparison operator</label>
                        </div>
                        <div class="flex flex-col text-center w-3/6 px-2">

                            <select v-model="comparator" @change="compareValues"
                                    class="appearance-none border-none text-gray-600 py-3 pl-3 pr-8 rounded leading-tight w-32">
                                <option value=">">&gt;</option>
                                <option value=">=">&gt;=</option>
                                <option value="<">&lt;</option>
                                <option value="<=">&lt;=</option>
                                <option value="==">==</option>
                                <option value="===">===</option>
                                <option value="!=">!=</option>
                                <option value="!==">!==</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex items-center justify-between mb-5 text-right">

                        <label for="">
                            Number
                            <input v-model="forceType" type="radio" value="number">
                        </label>
                        <label for="">
                            String
                            <input v-model="forceType" type="radio" value="string">
                        </label>
                        <label for="">
                            Boolean
                            <input v-model="forceType" type="radio" value="bool">
                        </label>
                    </div>

                    <div class="flex items-center justify-between mb-5 text-right">
                        <div v-show="result" class="result" :class="result === 'True' ? 'bg-green-500' : 'bg-red-500' ">
                            {{result}}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import {ref} from 'vue';

const firstOperand = ref('');
const secondOperand = ref('');
const comparator = ref('>');
const result = ref(undefined);
const forceType = ref(undefined);
const operatorTable = ref(operatorLookup());

function operatorLookup() {
    return {
        '>'(a, b) {
            return a > b
        },
        '>='(a, b) {
            return a >= b
        },
        '<'(a, b) {
            return a < b
        },
        '<='(a, b) {
            return a <= b
        },
        '=='(a, b) {
            return a == b
        },
        '==='(a, b) {
            return a === b
        },
        '!='(a, b) {
            return a != b
        },
        '!=='(a, b) {
            return a !== b
        }
    }
}

function compareValues() {
    let firstOperand = firstOperand.value
    let secondOperand = secondOperand.value

    if (forceType.value === 'number') {
        firstOperand = Number(firstOperand)
        secondOperand = Number(secondOperand)
    }

    if (forceType.value === 'string') {
        firstOperand = firstOperand.toString()
        secondOperand = secondOperand.toString()
    }

    if (forceType.value === 'string') {
        firstOperand = Boolean(firstOperand)
        secondOperand = Boolean(secondOperand)
    }

    if (operatorTable.value[comparator.value](firstOperand, secondOperand)) {
        result.value = 'True'
    } else {
        result.value = 'False'
    }
}
</script>

<style scoped>
.result {
    padding: 15px;
    font-size: 2em;
}
</style>

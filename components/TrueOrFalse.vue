<template>
    <div>
        <div class="component-header">
            <h2>True or false</h2>
        </div>

        <div class="px-4 py-5">
            <div class="flex flex-col text-white">
                <div class="flex items-center justify-between mb-5">
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1">First value</label>

                        <input v-model="firstOperand" @change="compareValues"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                    </div>
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1">Second value</label>

                        <input v-model="secondOperand" @change="compareValues"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                    </div>
                </div>

                <div class="flex items-center justify-between mb-5 text-right">
                    <div class="flex flex-col text-right w-3/6 px-2">
                        <label for="decimals" class="mr-3">Comparison operator</label>
                    </div>
                    <div class="flex flex-col text-center px-2 w-3/6 ">

                        <select v-model="comparator" @change="compareValues"
                                class="appearance-none border-none text-gray-600 py-3 pl-3 pr-8 rounded leading-tight">
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

                <div class="flex items-center justify-between mb-5">

                    <label>
                        Number
                        <input v-model="forceType" type="radio" value="number">
                    </label>
                    <label>
                        String
                        <input v-model="forceType" type="radio" value="string">
                    </label>
                    <label>
                        Boolean
                        <input v-model="forceType" type="radio" value="bool">
                    </label>
                </div>

                <div class="flex items-center justify-between mb-5">
                    <div v-show="result" class="result" :class="result === 'True' ? 'bg-green-500' : 'bg-red-500' ">
                        {{result}}
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
const forceType = ref('string');
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
    let firstOp = firstOperand.value
    let secondOp = secondOperand.value

    if (forceType.value === 'number') {
        firstOp = Number(firstOp)
        secondOp = Number(secondOp)
    }

    if (forceType.value === 'string') {
        firstOp = firstOp.toString()
        secondOp = secondOp.toString()
    }

    if (forceType.value === 'bool') {
        firstOp = Boolean(firstOp)
        secondOp = Boolean(secondOp)
    }

    if (operatorTable.value[comparator.value](firstOp, secondOp)) {
        result.value = 'True'
    } else {
        result.value = 'False'
    }
}
</script>

<style scoped>
.result {
    padding: 10px;
    font-size: 1.5em;
    width: 100%;
}
</style>

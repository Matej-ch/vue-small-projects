<template>

    <div class="flex items-center justify-between mb-5">
        <div class="flex flex-col font-bold w-3/6 px-2">
            <label class="mb-1">First value</label>

            <input v-model="firstOperand" @change="compareValues">
        </div>
        <div class="flex flex-col font-bold w-3/6 px-2">
            <label class="mb-1">Second value</label>

            <input v-model="secondOperand" @change="compareValues">
        </div>
    </div>

    <div class="flex items-center justify-between mb-5">

        <div class="flex flex-col w-3/6 px-2 justify-between">
            <label class="mr-3 font-bold">Compare as</label>

            <div class="flex items-center gap-4 font-bold">
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
        </div>

        <div class="flex flex-col px-2 w-3/6 ">
            <label for="decimals-comparison" class="mr-3 font-bold">Comparison operator</label>
            <select v-model="comparator" @change="compareValues" id="decimals-comparison">
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
        <div v-show="result" class="w-full text-xl p-4 font-bold rounded-sm"
             :class="result === 'True' ? 'bg-green-500' : 'bg-red-500' ">
            {{result}}
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

</style>

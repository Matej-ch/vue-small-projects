<template>
    <div>
        <div class="flex justify-center items-center w-12 flex-col">
            <div>

                <label for="">First value
                    <input v-model="firstOperand" @keyup="compareValues">
                </label>
            </div>

            <div style="margin-top: 17px;">

                <label for="">Comparison operator</label>
                <select v-model="comparator" @change="compareValues">
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

            <div>
                <label for="">Second value
                    <input v-model="secondOperand" @keyup="compareValues">
                </label>
            </div>

            <div style="margin-top: 17px;">

                <input v-model="forceType" type="radio" value="number">
                <input v-model="forceType" type="radio" value="string">
                <input v-model="forceType" type="radio" value="bool">
            </div>

            <hr>

            <div v-show="result" class="result" :class="result === 'True' ? 'bg-green-500' : 'bg-red-500' ">
                {{result}}
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
        firstOperand = firstOperand.value.toString()
        secondOperand = secondOperand.value.toString()
    }

    if (forceType.value === 'string') {
        firstOperand = Boolean(firstOperand.value)
        secondOperand = Boolean(secondOperand.value)
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

.colorsuccessx {
    background: rgb(70, 201, 58) !important;
    box-shadow: 0 15px 40px -10px rgba(70, 201, 58, 0.9);
}

.colordangerx {
    background: rgb(255, 71, 87) !important;
    box-shadow: 0 15px 40px -10px rgba(255, 71, 87, 0.9);
}
</style>

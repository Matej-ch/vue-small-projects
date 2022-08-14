<template>

    <div class="w-full mx-auto rounded-xl bg-slate-100 shadow-xl text-slate-800 relative overflow-hidden"
         style="max-width:300px">
        <div class="w-full h-40 bg-gradient-to-b from-slate-800 to-slate-700 flex items-end text-right flex-col">
            <div class="w-full pt-4 px-6 text-3xl text-white font-thin">{{operation}}</div>
            <div class="w-full py-5 px-6 text-6xl text-white font-thin mt-auto">{{result}}</div>
        </div>

        <div class="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">

            <div class="flex w-full">
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="clear"
                            class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">
                        C
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button
                        class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">
                        +/-
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendOperation('%')"
                            class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">
                        %
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendOperation('/')"
                            class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-2xl font-light">
                        ÷
                    </button>
                </div>
            </div>

            <div class="flex w-full">
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendNumber(7)"
                            class="calc-btn">
                        7
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendNumber(8)"
                            class="calc-btn">
                        8
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendNumber(9)"
                            class="calc-btn">
                        9
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendOperation('*')"
                            class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">
                        ⨉
                    </button>
                </div>
            </div>

            <div class="flex w-full">
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendNumber(4)"
                            class="calc-btn">
                        4
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendNumber(5)"
                            class="calc-btn">
                        5
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendNumber(6)"
                            class="calc-btn">
                        6
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendOperation('-')"
                            class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">
                        -
                    </button>
                </div>
            </div>
            <div class="flex w-full">
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendNumber(1)"
                            class="calc-btn">
                        1
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendNumber(2)"
                            class="calc-btn">
                        2
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendNumber(3)"
                            class="calc-btn">
                        3
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button
                        @click="appendOperation('+')"
                        class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">
                        +
                    </button>
                </div>
            </div>
            <div class="flex w-full">
                <div class="w-1/4 border-r border-indigo-400">
                    <button @click="appendNumber(0)"
                            class="calc-btn">
                        0
                    </button>
                </div>
                <div class="w-1/4 border-r border-indigo-400">
                    <button @click="appendNumber('.')"
                            class="calc-btn">
                        .
                    </button>
                </div>
                <div class="w-2/4 border-r border-indigo-400">
                    <button @click="compute"
                            class="calc-equals">
                        =
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {ref, computed} from "vue";

const previousOperand = ref('')
const currentOperand = ref('')
const operation = ref('')
const result = ref(0)

function clear() {
    previousOperand.value = '';
    currentOperand.value = '';
    operation.value = '';
}

/*
const result = computed(() => {
    return currentOperand.value
})
*/

function appendNumber(number) {
    if (number === '.' && currentOperand.value.includes('.')) return
    currentOperand.value = currentOperand.value.toString() + number.toString()
    result.value = currentOperand.value;
}

function appendOperation(op) {
    operation.value = op;
    previousOperand.value = currentOperand.value;
    currentOperand.value = '';
}

function compute() {

    if (!previousOperand.value.length || !currentOperand.value.length) {
        return;
    }

    switch (operation.value) {
        case '+':
            result.value = parseFloat(previousOperand.value) + parseFloat(currentOperand.value);
            break;
        case '-':
            result.value = previousOperand.value - currentOperand.value;
            break;
        case '*':
            result.value = previousOperand.value * currentOperand.value;
            break;
        case '/':
            result.value = previousOperand.value / currentOperand.value;
            break;
        case '%':
            result.value = previousOperand.value % currentOperand.value;
            break;
    }
}

</script>

<style scoped>
.calc-btn {
    @apply w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light;
}

.calc-equals {
    @apply w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light
}
</style>

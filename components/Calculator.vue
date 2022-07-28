<template>

    <div class="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden"
         style="max-width:300px">
        <div class="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right flex-col">
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
                            class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        7
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendNumber(8)"
                            class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        8
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendNumber(9)"
                            class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
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
                            class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        4
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendNumber(5)"
                            class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        5
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendNumber(6)"
                            class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
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
                            class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        1
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendNumber(2)"
                            class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        2
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="appendNumber(3)"
                            class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
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
                            class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        0
                    </button>
                </div>
                <div class="w-1/4 border-r border-indigo-400">
                    <button @click="appendNumber('.')"
                            class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        .
                    </button>
                </div>
                <div class="w-2/4 border-r border-indigo-400">
                    <button @click="compute"
                            class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light">
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

</style>

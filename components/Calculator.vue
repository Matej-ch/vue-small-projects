<template>

    <div class="w-full mx-auto rounded-xl bg-slate-100 shadow-xl text-slate-800 relative overflow-hidden"
         style="max-width:300px">
        <div class="w-full h-40 bg-gradient-to-b from-slate-800 to-slate-700 flex items-end text-right flex-col">
            <div class="w-full pt-4 px-6 text-3xl text-white font-thin">{{operation}}</div>
            <div class="w-full py-5 px-6 text-6xl text-white font-thin mt-auto">{{currentOperand || 0}}</div>
        </div>

        <div class="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">

            <div class="flex w-full">
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="action('C')"
                            class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">
                        C
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="action('+-')"
                            class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">
                        +/-
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="action('%')"
                            class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">
                        %
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="action('/')"
                            class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-2xl font-light">
                        ÷
                    </button>
                </div>
            </div>

            <div class="flex w-full">
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="action(7)"
                            class="calc-btn">
                        7
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="action(8)"
                            class="calc-btn">
                        8
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="action(9)"
                            class="calc-btn">
                        9
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="action('*')"
                            class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">
                        ⨉
                    </button>
                </div>
            </div>

            <div class="flex w-full">
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="action(4)"
                            class="calc-btn">
                        4
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="action(5)"
                            class="calc-btn">
                        5
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="action(6)"
                            class="calc-btn">
                        6
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="action('-')"
                            class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">
                        -
                    </button>
                </div>
            </div>
            <div class="flex w-full">
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="action(1)"
                            class="calc-btn">
                        1
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="action(2)"
                            class="calc-btn">
                        2
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button @click="action(3)"
                            class="calc-btn">
                        3
                    </button>
                </div>
                <div class="w-1/4 border-r border-b border-indigo-400">
                    <button
                        @click="action('+')"
                        class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">
                        +
                    </button>
                </div>
            </div>
            <div class="flex w-full">
                <div class="w-1/4 border-r border-indigo-400">
                    <button @click="action(0)"
                            class="calc-btn">
                        0
                    </button>
                </div>
                <div class="w-1/4 border-r border-indigo-400">
                    <button @click="action('.')"
                            class="calc-btn">
                        .
                    </button>
                </div>
                <div class="w-2/4 border-r border-indigo-400">
                    <button @click="action('=')"
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

function action(n) {
    if (!isNaN(n) || n === '.') {
        currentOperand.value += n + '';
    }

    if (n === 'C') {
        currentOperand.value = '';
    }

    if (n === '+-') {
        currentOperand.value = `${currentOperand.value * -1}`
    }

    if (['/', '*', '-', '+', '%'].includes(n)) {
        operation.value = n;
        previousOperand.value = currentOperand.value;
        currentOperand.value = '';
    }

    if (n === '=') {

        switch (operation.value) {
            case '+':
                currentOperand.value = `${parseFloat(previousOperand.value) + parseFloat(currentOperand.value)}`;
                break;
            case '-':
                currentOperand.value = `${previousOperand.value - currentOperand.value}`;
                break;
            case '*':
                currentOperand.value = `${previousOperand.value * currentOperand.value}`;
                break;
            case '/':
                currentOperand.value = `${previousOperand.value / currentOperand.value}`;
                break;
            case '%':
                currentOperand.value = `${previousOperand.value % currentOperand.value}`;
                break;
        }

        previousOperand.value = '';
        operation.value = null;
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

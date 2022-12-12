<template>
    <div class="flex items-center gap-2">
        <span>Pick a number from 2 to 30:</span>
        <input type="range" min="2" max="30" v-model.number="numOfGifts">
    </div>

    <div class="flex flex-row gap-2 py-8">
        <button @click="fastBackward" class="btn btn-slate disabled:opacity-40" :disabled="currentStep === 1">
            ❰❰
        </button>
        <button @click="stepBack" class="btn btn-slate disabled:opacity-40" :disabled="currentStep === 1">
            ❰
        </button>
        <button @click="stepForward" class="btn btn-slate disabled:opacity-40" :disabled="currentStep === numSteps">
            ❱
        </button>
        <button @click="fastForward" class="btn btn-slate disabled:opacity-40" :disabled="currentStep === numSteps">
            ❱❱
        </button>
    </div>

    <div class="grid grid-cols-5 auto-rows-auto gap-5" style="justify-items: center">
        <div v-for="n in numOfGifts"
             :key="n"
             class="border-2 p-2 leading-5 w-10 h-10 text-center"
             :class="{ 'opacity-40': eliminatedAfterCurrentStep.includes(n) }"
        >{{n}}
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue';

const numOfGifts = ref(2)
const currentStep = ref(1)

const eliminationOrder = computed(() => {
    const gifts = [...Array(numOfGifts.value + 1).keys()].slice(1)
    let indexToEliminate = 0
    let moveBy = 1
    const result = []

    while (gifts.length > 1) {
        indexToEliminate = (indexToEliminate + moveBy) % gifts.length
        result.push(gifts[indexToEliminate])
        gifts.splice(indexToEliminate, 1)
    }
    return result
})

const numSteps = computed(() => {
    return eliminationOrder.value.length;
})

const eliminatedAfterCurrentStep = computed(() => {
    return eliminationOrder.value.slice(0, currentStep.value);
})

watch(numOfGifts, () => currentStep.value = 1)

function fastBackward() {
    currentStep.value = 1;
}

function stepBack() {
    currentStep.value -= 1;
}

function stepForward() {
    currentStep.value += 1;
}

function fastForward() {
    currentStep.value = numSteps.value;
}

</script>

<style scoped>

</style>
<template>

    <div class="flex items-center justify-between mb-5">
        <div class="flex flex-col font-bold w-3/6 px-2">
            <label class="mb-1">Top left 1:</label>

            <input v-model="topLeftOne" type="range" min="0" max="500"
                   class="py-3 px-5 rounded slider"
                   :step="unit!=='px' ? 0.1 : 1">
        </div>
        <div class="flex flex-col font-bold w-3/6 px-2">
            <label class="mb-1">Top left 2:</label>

            <input v-model="topLeftTwo" type="range" min="0" max="500"
                   :step="unit!=='px' ? 0.1 : 1"
                   class="py-3 px-5 rounded slider">
        </div>
    </div>

    <div class="flex items-center justify-between mb-5">
        <div class="flex flex-col font-bold w-3/6 px-2">
            <label class="mb-1">Top right 1:</label>

            <input v-model="topRightOne" type="range" min="0" max="500"
                   class="py-3 px-5 rounded slider"
                   :step="unit!=='px' ? 0.1 : 1">
        </div>
        <div class="flex flex-col font-bold w-3/6 px-2">
            <label class="mb-1">Top right 2:</label>

            <input v-model="topRightTwo" type="range" min="0" max="500"
                   :step="unit!=='px' ? 0.1 : 1"
                   class="py-3 px-5 rounded slider">
        </div>
    </div>

    <div class="flex items-center justify-between mb-5">
        <div class="flex flex-col font-bold w-3/6 px-2">
            <label class="mb-1">Bottom right 1:</label>

            <input v-model="bottomRightOne" type="range" min="0" max="500"
                   class="py-3 px-5 rounded slider"
                   :step="unit!=='px' ? 0.1 : 1">
        </div>
        <div class="flex flex-col font-bold w-3/6 px-2">
            <label class="mb-1">Bottom right 2:</label>

            <input v-model="bottomRightTwo" type="range" min="0" max="500"
                   :step="unit!=='px' ? 0.1 : 1"
                   class="py-3 px-5 rounded slider">
        </div>
    </div>

    <div class="flex items-center justify-between mb-5">
        <div class="flex flex-col font-bold w-3/6 px-2">
            <label class="mb-1">Bottom right 1:</label>

            <input v-model="bottomLeftOne" type="range" min="0" max="500"
                   class="py-3 px-5 rounded slider"
                   :step="unit!=='px' ? 0.1 : 1">
        </div>
        <div class="flex flex-col font-bold w-3/6 px-2">
            <label class="mb-1">Bottom right 2:</label>

            <input v-model="bottomLeftTwo" type="range" min="0" max="500"
                   :step="unit!=='px' ? 0.1 : 1"
                   class="py-3 px-5 rounded slider">
        </div>
    </div>

    <div class="flex items-center justify-between mb-5">
        <div class="flex flex-col font-bold w-3/6 px-2">
            <label class="mb-1">Border height</label>
            <input v-model="borderWidth" type="range" min="1" max="500" :step="1"
                   class="py-3 px-5 rounded slider">
        </div>

        <div class="flex flex-col w-3/6 px-2">
            <label for="decimals" class="mr-3 font-bold">Units:</label>

            <select v-model="unit">
                <option value="px">px</option>
                <option value="em">em</option>
            </select>
        </div>
    </div>

    <div class="block p-8 mx-2 my-6" :style="styleObject">
        &nbsp;
    </div>

    <div class="relative">
        <div class="copy mx-2 font-bold bg-slate-600 rounded-sm"
             v-html="'.border-class ' + styleForCopy"></div>
        <div class="absolute right-4 top-2">
            <ClipboardBtn :text="'.border-class ' + styleForCopy.replaceAll('<br>','')"
                          :btnClass="'btn-orange'"></ClipboardBtn>
        </div>

    </div>

</template>

<script setup>

import {computed, ref} from 'vue';
import ClipboardBtn from "./ClipboardBtn";

const topLeftOne = ref(5);
const topLeftTwo = ref(5);
const topRightOne = ref(5);
const topRightTwo = ref(5);
const bottomLeftOne = ref(5);
const bottomLeftTwo = ref(5);
const bottomRightOne = ref(5);
const bottomRightTwo = ref(5);
const borderWidth = ref(2)
const unit = ref('px');

const styleObject = computed(() => {
    return {
        borderTopLeftRadius: `${topLeftOne.value}${unit.value} ${topLeftTwo.value}${unit.value}`,
        borderTopRightRadius: `${topRightOne.value}${unit.value} ${topRightTwo.value}${unit.value}`,
        borderBottomRightRadius: `${bottomRightOne.value}${unit.value} ${bottomRightTwo.value}${unit.value}`,
        borderBottomLeftRadius: `${bottomLeftOne.value}${unit.value} ${bottomLeftTwo.value}${unit.value}`,
        border: `${borderWidth.value}px solid black`,
    }
})

const styleForCopy = computed(() => {

    return JSON.stringify({
        'border-top-left-radius': `${topLeftOne.value}${unit.value} ${topLeftTwo.value}${unit.value}`,
        'border-top-right-radius': `${topRightOne.value}${unit.value} ${topRightTwo.value}${unit.value}`,
        'border-bottom-right-radius': `${bottomRightOne.value}${unit.value} ${bottomRightTwo.value}${unit.value}`,
        'border-bottom-left-radius': `${bottomLeftOne.value}${unit.value} ${bottomLeftTwo.value}${unit.value}`,
        border: `${borderWidth.value}px solid black`,
    }).replace(/,/gi, ";<br>").replace(/"/gi, '')
})
</script>

<style scoped lang="scss">

.copy {
    padding: 15px;
    text-align: left;

    div {
        padding-top: 5px;
        padding-bottom: 15px;
    }
}
</style>

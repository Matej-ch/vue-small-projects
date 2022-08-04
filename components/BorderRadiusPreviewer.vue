<template>
    <div>
        <div class="flex flex-col items-center justify-center text-white py-4 bg-blue-800">
            <div class="text-center uppercase text-2xl">Border radius settings!</div>
        </div>

        <div class="px-4 py-5">
            <div class="flex flex-col text-white">
                <div class="flex items-center justify-between mb-5">
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1">Top left 1:</label>

                        <input v-model="topLeftOne" type="range" min="0" max="500"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600"
                               :step="unit!=='px' ? 0.1 : 1">
                    </div>
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1">Top left 2:</label>

                        <input v-model="topLeftTwo" type="range" min="0" max="500"
                               :step="unit!=='px' ? 0.1 : 1"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                    </div>
                </div>

                <div class="flex items-center justify-between mb-5">
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1">Top right 1:</label>

                        <input v-model="topRightOne" type="range" min="0" max="500"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600"
                               :step="unit!=='px' ? 0.1 : 1">
                    </div>
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1">Top right 2:</label>

                        <input v-model="topRightTwo" type="range" min="0" max="500"
                               :step="unit!=='px' ? 0.1 : 1"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                    </div>
                </div>

                <div class="flex items-center justify-between mb-5">
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1">Bottom right 1:</label>

                        <input v-model="bottomRightOne" type="range" min="0" max="500"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600"
                               :step="unit!=='px' ? 0.1 : 1">
                    </div>
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1">Bottom right 2:</label>

                        <input v-model="bottomRightTwo" type="range" min="0" max="500"
                               :step="unit!=='px' ? 0.1 : 1"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                    </div>
                </div>

                <div class="flex items-center justify-between mb-5">
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1">Bottom right 1:</label>

                        <input v-model="bottomLeftOne" type="range" min="0" max="500"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600"
                               :step="unit!=='px' ? 0.1 : 1">
                    </div>
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1">Bottom right 2:</label>

                        <input v-model="bottomLeftTwo" type="range" min="0" max="500"
                               :step="unit!=='px' ? 0.1 : 1"
                               class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600">
                    </div>
                </div>


                <div class="flex items-center justify-between mb-5 text-right">
                    <div class="flex flex-col text-right w-3/6 px-2">
                        <label for="decimals" class="mr-3">Unit:</label>
                    </div>
                    <div class="flex flex-col text-center w-3/6 px-2">

                        <select v-model="unit"
                                class="appearance-none border-none text-gray-600 py-3 pl-3 pr-8 rounded leading-tight w-32">
                            <option value="px">px</option>
                            <option value="em">em</option>
                        </select>
                    </div>
                </div>

                <div class="block" :style="styleObject">
                    DIV
                </div>

                <div class="copy">
                    <div>border-top-left-radius: {{styleObject.borderTopLeftRadius}};</div>
                    <div> border-top-right-radius: {{styleObject.borderTopRightRadius}};</div>
                    <div>border-bottom-right-radius: {{styleObject.borderBottomRightRadius}};</div>
                    <div>border-bottom-left-radius: {{styleObject.borderBottomLeftRadius}};</div>
                </div>


            </div>
        </div>
    </div>
</template>

<script setup>

import {computed, ref} from 'vue';

const topLeftOne = ref(5);
const topLeftTwo = ref(5);
const topRightOne = ref(5);
const topRightTwo = ref(5);
const bottomLeftOne = ref(5);
const bottomLeftTwo = ref(5);
const bottomRightOne = ref(5);
const bottomRightTwo = ref(5);
const unit = ref('px');

const styleObject = computed(() => {
    return {
        borderTopLeftRadius: `${topLeftOne.value}${unit.value} ${topLeftTwo.value}${unit.value}`,
        borderTopRightRadius: `${topRightOne.value}${unit.value} ${topRightTwo.value}${unit.value}`,
        borderBottomRightRadius: `${bottomRightOne.value}${unit.value} ${bottomRightTwo.value}${unit.value}`,
        borderBottomLeftRadius: `${bottomLeftOne.value}${unit.value} ${bottomLeftTwo.value}${unit.value}`
    }
})
</script>

<style scoped lang="scss">
.block {
    padding: 30px;
    margin: 30px;
    border: 2px solid black;
}

.copy {
    background-color: #b4b6bb;
    padding: 15px;
    text-align: left;

    div {
        padding-top: 5px;
        padding-bottom: 15px;
    }
}
</style>

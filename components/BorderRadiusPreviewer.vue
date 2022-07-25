<template>
    <div class="container">
        <div class="settings">
            <h4>Settings</h4>

            <div>
                <label for="">Unit</label>
                <select v-model="unit">
                    <option value="px">px</option>
                    <option value="em">em</option>
                </select>
            </div>

            <div class="settings-wrapper">
                <div style="max-width: 300px;">
                    <label>Top left 1:</label>
                    <input v-model="topLeftOne" type="range" id="volume" name="volume" min="0" max="500"
                           :step="unit!=='px' ? 0.1 : 1">
                    <label>Top left 2:</label>
                    <input v-model="topLeftTwo" type="range" id="volume" name="volume" min="0" max="500"
                           :step="unit!=='px' ? 0.1 : 1">
                </div>

                <div style="max-width: 300px;">
                    <label>Top right 1:</label>
                    <input v-model="topRightOne" type="range" id="volume" name="volume" min="0" max="500"
                           :step="unit!=='px' ? 0.1 : 1">
                    <label>Top right 2:</label>
                    <input v-model="topRightTwo" type="range" id="volume" name="volume" min="0" max="500"
                           :step="unit!=='px' ? 0.1 : 1">
                </div>

                <div style="max-width: 300px;">
                    <label>Bottom right 1:</label>
                    <input v-model="bottomRightOne" type="range" id="volume" name="volume" min="0" max="500"
                           :step="unit!=='px' ? 0.1 : 1">
                    <label>Bottom right 2:</label>
                    <input v-model="bottomRightTwo" type="range" id="volume" name="volume" min="0" max="500"
                           :step="unit!=='px' ? 0.1 : 1">
                </div>

                <div style="max-width: 300px;">
                    <label>Bottom left 1:</label>
                    <input v-model="bottomLeftOne" type="range" id="volume" name="volume" min="0" max="500"
                           :step="unit!=='px' ? 0.1 : 1">
                    <label>Bottom left 2:</label>
                    <input v-model="bottomLeftTwo" type="range" id="volume" name="volume" min="0" max="500"
                           :step="unit!=='px' ? 0.1 : 1">
                </div>
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
        borderBottomRightRadius: `${bottomRightOne.value}${unit} ${bottomRightTwo.value}${unit.value}`,
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

.settings {
    display: flex;
    flex-flow: wrap;
    flex-direction: column;

    h4 {
        margin-bottom: 10px;
    }
}

.settings-wrapper {
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    flex-flow: wrap;
    flex-direction: row;
}
</style>

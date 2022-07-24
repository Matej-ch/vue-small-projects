<template>
  <div>
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
          <vs-slider v-model="topLeftOne" color="success" max="500" step="0.1" :step-decimals="unit!=='px'" />
          <label>Top left 2:</label>
          <vs-slider v-model="topLeftTwo" color="success" max="500" step="0.1" :step-decimals="unit!=='px'" />
        </div>

        <div style="max-width: 300px;">
          <label>Top right 1:</label>
          <vs-slider v-model="topRightOne" color="primary" max="500" step="0.1" :step-decimals="unit!=='px'" />
          <label>Top right 2:</label>
          <vs-slider v-model="topRightTwo" color="primary" max="500" step="0.1" :step-decimals="unit!=='px'" />
        </div>

        <div style="max-width: 300px;">
          <label>Bottom right 1:</label>
          <vs-slider v-model="bottomRightOne" color="dark" max="500" step="0.1" :step-decimals="unit!=='px'" />
          <label>Bottom right 2:</label>
          <vs-slider v-model="bottomRightTwo" color="dark" max="500" step="0.1" :step-decimals="unit!=='px'" />
        </div>

        <div style="max-width: 300px;">
          <label>Bottom left 1:</label>
          <vs-slider v-model="bottomLeftOne" color="danger" max="500" step="0.1" :step-decimals="unit!=='px'" />
          <label>Bottom left 2:</label>
          <vs-slider v-model="bottomLeftTwo" color="danger" max="500" step="0.1" :step-decimals="unit!=='px'" />
        </div>
      </div>
    </div>

    <div class="block" :style="styleObject">
      DIV
    </div>

    <div class="copy">
      <div>border-top-left-radius: {{ styleObject.borderTopLeftRadius }}; </div>
      <div> border-top-right-radius:    {{ styleObject.borderTopRightRadius }};</div>
      <div>border-bottom-right-radius: {{ styleObject.borderBottomRightRadius }};</div>
      <div>border-bottom-left-radius:  {{ styleObject.borderBottomLeftRadius }};</div>
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

<template>
  <div>
    <div class="settings">
      <h4>Settings</h4>

      <div>
        <vs-select
          v-model="unit"
          label-placeholder="Unit"
        >
          <vs-select-item value="px" text="px" />
          <vs-select-item value="em" text="em" />
        </vs-select>
      </div>

      <div class="settings-wrapper">
        <div style="max-width: 300px;">
          <label>Top left 1:</label>
          <vs-slider v-model="topLeftOne" color="success" max="500" />
          <label>Top left 2:</label>
          <vs-slider v-model="topLeftTwo" color="success" max="500" />
        </div>

        <div style="max-width: 300px;">
          <label>Top right 1:</label>
          <vs-slider v-model="topRightOne" color="primary" max="500" />
          <label>Top right 2:</label>
          <vs-slider v-model="topRightTwo" color="primary" max="500" />
        </div>

        <div style="max-width: 300px;">
          <label>Bottom right 1:</label>
          <vs-slider v-model="bottomRightOne" color="dark" max="500" />
          <label>Bottom right 2:</label>
          <vs-slider v-model="bottomRightTwo" color="dark" max="500" />
        </div>

        <div style="max-width: 300px;">
          <label>Bottom left 1:</label>
          <vs-slider v-model="bottomLeftOne" color="danger" max="500" />
          <label>Bottom left 2:</label>
          <vs-slider v-model="bottomLeftTwo" color="danger" max="500" />
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

<script>
export default {
  name: 'BorderRadiusPreviewer',
  data () {
    return {
      topLeftOne: 5,
      topLeftTwo: 5,
      topRightOne: 5,
      topRightTwo: 5,
      bottomLeftOne: 5,
      bottomLeftTwo: 5,
      bottomRightOne: 5,
      bottomRightTwo: 5,
      unit: 'px'
    }
  },
  computed: {
    styleObject () {
      return {
        borderTopLeftRadius: `${this.topLeftOne}${this.unit} ${this.topLeftTwo}${this.unit}`,
        borderTopRightRadius: `${this.topRightOne}${this.unit} ${this.topRightTwo}${this.unit}`,
        borderBottomRightRadius: `${this.bottomRightOne}${this.unit} ${this.bottomRightTwo}${this.unit}`,
        borderBottomLeftRadius: `${this.bottomLeftOne}${this.unit} ${this.bottomLeftTwo}${this.unit}`
      }
    }
  }
}
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

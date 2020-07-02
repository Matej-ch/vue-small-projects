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

      <div>
        <vs-input
          v-model="topLeftOne"
          label-placeholder="Top left radius one"
          state="dark"
          color="success"
          type="number"
          shadow
        />
        <vs-input
          v-model="topLeftTwo"
          label-placeholder="Top left radius two"
          state="dark"
          color="success"
          type="number"
          shadow
        />
      </div>

      <div>
        <vs-input
          v-model="topRightOne"
          label-placeholder="Top right radius one"
          state="dark"
          color="primary"
          type="number"
          shadow
        />
        <vs-input
          v-model="topRightTwo"
          label-placeholder="Top right radius two"
          state="dark"
          color="primary"
          type="number"
          shadow
        />
      </div>

      <div>
        <vs-input
          v-model="bottomRightOne"
          label-placeholder="Bottom right radius one"
          state="dark"
          color="warn"
          type="number"
          shadow
        />
        <vs-input
          v-model="bottomRightTwo"
          label-placeholder="Bottom right radius two"
          state="dark"
          color="warn"
          type="number"
          shadow
        />
      </div>

      <div>
        <vs-input
          v-model="bottomLeftOne"
          label-placeholder="Bottom left radius one"
          state="dark"
          color="danger"
          type="number"
          shadow
        />
        <vs-input
          v-model="bottomLeftTwo"
          label-placeholder="Bottom left radius two"
          state="dark"
          color="danger"
          type="number"
          shadow
        />
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
    padding: 15px;
    margin: 15px;
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
    h4 {
      margin-bottom: 10px;
    }

    div {
      padding: 15px;
      display: flex;
      flex-direction: row;
    }
  }
</style>

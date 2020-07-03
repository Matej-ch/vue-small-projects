<template>
  <div class="center grid">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" style="flex-direction: column;">
        <vs-input
          v-model="firstOperand"
          label-placeholder="First value"
          state="dark"
          color="success"
          shadow
          @keyup="compareValues"
        />

        <div style="margin-top: 17px;">
          <vs-select
            v-model="comparator"
            label-placeholder="Operator"
            label="Comparison operator"
            @change="compareValues"
          >
            <vs-select-item value=">" text=">" />
            <vs-select-item value=">=" text=">=" />
            <vs-select-item value="<" text="<" />
            <vs-select-item value="<=" text="<=" />
            <vs-select-item value="==" text="==" />
            <vs-select-item value="===" text="===" />
            <vs-select-item value="!=" text="!=" />
            <vs-select-item value="!==" text="!==" />
          </vs-select>
        </div>

        <vs-input
          v-model="secondOperand"
          label-placeholder="Second value"
          state="dark"
          color="success"
          shadow
          @keyup="compareValues"
        />
        <vs-divider />

        <div v-show="result" class="result" :class="result === 'True' ? 'colorsuccessx' : 'colordangerx' ">
          {{ result }}
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'TrueOrFalse',
  data () {
    return {
      firstOperand: '',
      secondOperand: '',
      comparator: '>',
      result: undefined,
      operatorTable: this.operatorLookup()
    }
  },
  methods: {
    operatorLookup () {
      return {
        '>' (a, b) { return a > b },
        '>=' (a, b) { return a >= b },
        '<' (a, b) { return a < b },
        '<=' (a, b) { return a <= b },
        '==' (a, b) { return a == b },
        '===' (a, b) { return a === b },
        '!=' (a, b) { return a != b },
        '!==' (a, b) { return a !== b }
      }
    },
    compareValues () {
      console.log(this.firstOperand)
      console.log(this.secondOperand)
      if (this.operatorTable[this.comparator](this.firstOperand, this.secondOperand)) {
        this.result = 'True'
      } else {
        this.result = 'False'
      }
    }
  }
}
</script>

<style scoped>
  .result {
    padding: 15px;
    font-size: 2em;
  }

  .colorsuccessx {
    background: rgb(70, 201, 58) !important;
    box-shadow: 0 15px 40px -10px rgba(70, 201, 58, 0.9);
  }

  .colordangerx {
    background: rgb(255, 71, 87) !important;
    box-shadow: 0 15px 40px -10px rgba(255, 71, 87, 0.9);
  }
</style>

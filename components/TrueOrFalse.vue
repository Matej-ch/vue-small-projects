<template>
  <div class="center grid">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" style="flex-direction: column;">
        <div>
          <vs-input
            v-model="firstOperand"
            label-placeholder="First value"
            state="dark"
            color="success"
            shadow
            @keyup="compareValues"
          />
        </div>

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

        <div>
          <vs-input
            v-model="secondOperand"
            label-placeholder="Second value"
            state="dark"
            color="success"
            shadow
            @keyup="compareValues"
          />
        </div>

        <div style="margin-top: 17px;">
          <vs-radio v-model="forceType" vs-value="number">
            Force number
          </vs-radio>
          <vs-radio v-model="forceType" color="success" vs-value="string">
            Force String
          </vs-radio>
          <vs-radio v-model="forceType" color="danger" vs-value="bool">
            Force boolean
          </vs-radio>
        </div>

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
      forceType: undefined,
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
      let firstOperand = this.firstOperand
      let secondOperand = this.secondOperand

      if (this.forceType === 'number') {
        firstOperand = Number(firstOperand)
        secondOperand = Number(secondOperand)
      }

      if (this.forceType === 'string') {
        firstOperand = this.firstOperand.toString()
        secondOperand = this.secondOperand.toString()
      }

      if (this.forceType === 'string') {
        firstOperand = Boolean(this.firstOperand)
        secondOperand = Boolean(this.secondOperand)
      }

      if (this.operatorTable[this.comparator](firstOperand, secondOperand)) {
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

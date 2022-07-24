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

            <label for="">Comparison operator</label>
            <select v-model="comparator" @change="compareValues">
                <option value=">">></option>
                <option value=">=">>=</option>
                <option value="<"><</option>
                <option value="<="><=</option>
                <option value="==">==</option>
                <option value="===">===</option>
                <option value="!=">!=</option>
                <option value="!==">!==</option>
            </select>
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

<script setup>
import {ref} from 'vue';
const firstOperand= ref('');
const secondOperand= ref('');
const comparator= ref('>');
const result= ref(undefined);
const forceType= ref(undefined);
const operatorTable = ref(operatorLookup());

function operatorLookup()
{
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
}
function compareValues()
{
    let firstOperand = firstOperand.value
    let secondOperand = secondOperand.value

    if (forceType.value === 'number') {
        firstOperand = Number(firstOperand)
        secondOperand = Number(secondOperand)
    }

    if (forceType.value === 'string') {
        firstOperand = firstOperand.value.toString()
        secondOperand = secondOperand.value.toString()
    }

    if (forceType.value === 'string') {
        firstOperand = Boolean(firstOperand.value)
        secondOperand = Boolean(secondOperand.value)
    }

    if (operatorTable.value[comparator.value](firstOperand, secondOperand)) {
        result.value = 'True'
    } else {
        result.value = 'False'
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

<template>
  <div>
    <vs-input
      v-model="binaryNumber"
      label-placeholder="Binary number"
      state="dark"
      color="dark"
      shadow
      @keyup="checkBinary"
    />

    <vs-alert
      v-show="errorMessage"
      title="Danger"
      color="danger"
      style="margin-bottom: 15px;
    margin-top: 15px;"
    >
      {{ errorMessage }}
    </vs-alert>

    <div v-show="!errorMessage" class="btn-wrapper">
      <vs-button color="dark" type="filled" size="large" @click="convertBinary">
        Show Decimal
      </vs-button>
    </div>

    <div class="output">
      {{ decimal }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bin2Dec',
  data () {
    return {
      binaryNumber: '',
      decimal: '',
      errorMessage: ''
    }
  },
  methods: {
    checkBinary () {
      for (const char of this.binaryNumber) {
        if (char !== '0' && char !== '1') {
          this.errorMessage = 'Binary number can only contain 0 a 1'
        } else {
          this.errorMessage = ''
        }
      }
    },
    convertBinary () {
      let decimal = 0
      for (let i = this.binaryNumber.length - 1; i >= 0; i--) {
        decimal += parseInt(this.binaryNumber[i]) * Math.pow(2, this.binaryNumber.length - 1 - i)
      }

      this.decimal = decimal
    }
  }
}
</script>

<style scoped lang="scss">
.btn-wrapper {
  padding-bottom: 15px;
  padding-top: 15px;
  display: flex;
  justify-content: center;
}

.output {
  padding: 15px;
}
</style>

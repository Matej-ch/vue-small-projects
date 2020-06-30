<template>
  <div>
    <vs-input
      v-model="binaryNumber"
      label-placeholder="Binary number"
      state="dark"
      color="dark"
      shadow
      @keyup="convertBinary"
    />
  </div>
</template>

<script>
export default {
  name: 'Bin2Dec',
  data () {
    return {
      binaryNumber: ''
    }
  },
  methods: {
    convertBinary () {

    }
  }
}
</script>

<style scoped>

</style>

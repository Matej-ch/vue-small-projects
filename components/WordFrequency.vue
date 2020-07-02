<template>
  <div class="center grid">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12" class="column">
        <div>
          <vs-textarea v-model="textarea" />
        </div>
      </vs-col>
    </vs-row>

    <vs-row>
      <vs-col
        v-for="index in 2"
        :key="index"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="6"
        class="column"
      >
        <div>
          50
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'WordFrequency',
  data () {
    return {
      textarea: ''
    }
  }
}
</script>

<style scoped lang="scss">
</style>

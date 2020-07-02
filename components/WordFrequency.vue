<template>
  <div class="center grid">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" style="flex-direction: column;">
        <vs-textarea v-model="textarea" label="Text to analyze" width="500px" rows="10" counter="2048" />
        <vs-button color="dark" type="filled" @click="translate">
          Translate
        </vs-button>
      </vs-col>
    </vs-row>

    <vs-row>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        style="flex-direction: column;"
        vs-w="6"
      >
        <div v-for="(wordObj,index) in wordCounts" :key="index" class="word-wrapper">
          <span style="font-weight: bold;">{{ index }}: </span>
          <span>{{ wordObj }}</span>
          <span />
        </div>
      </vs-col>

      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="6"
      />
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'WordFrequency',
  data () {
    return {
      textarea: '',
      wordCounts: {}
    }
  },
  methods: {
    translate () {
      this.wordCounts = []
      const wordArray = this.textarea.split(' ')
      this.wordCounts = wordArray.reduce((prev, nxt) => {
        prev[nxt] = (prev[nxt] + 1) || 1
        return prev
      }, {})
    }
  }
}
</script>

<style scoped lang="scss">
  .word-wrapper {
    display: block;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 5px;
  }
</style>

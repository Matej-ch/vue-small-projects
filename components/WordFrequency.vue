<template>
  <div class="center grid">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" style="flex-direction: column;">
        <vs-textarea v-model="textarea" label="Text to analyze" width="500px" rows="10" counter="2048" />
        <vs-button color="dark" type="filled" @click="translate">
          Translate
        </vs-button>
        <vs-divider />
        <vs-alert v-show="message" title="Alert" color="rgb(231, 154, 23)" style="padding: 15px; height: 100px;">
          {{ message }}
        </vs-alert>
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
        <div v-for="(wordCount,word) in wordCounts" :key="word" class="word-wrapper">
          <span style="font-weight: bold;">{{ word }}: </span>
          <span>{{ wordCount }}</span>
          <span />
        </div>
      </vs-col>

      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-w="6"
        style="flex-flow: wrap;"
      >
        <div class="word-map">
          <span v-for="(wordCount,word) in wordCounts" :key="word" :style="'font-size:' + (parseInt(fontSize) + parseInt(wordCount)) + 'px'">
            {{ word }}
          </span>
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
      textarea: null,
      wordCounts: {},
      message: '',
      fontSize: '18'
    }
  },
  methods: {
    translate () {
      if (!this.textarea) {
        this.message = 'Textarea empty'
        return
      }
      this.message = null
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

  .word-map {
    padding-top: 30px;

    span {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
</style>

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
        <table v-show="wordCounts" class="resp-table">
          <thead>
            <tr>
              <th>Word</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(wordCount,word) in wordCounts" :key="word">
              <td>{{ word }}</td>
              <td>{{ wordCount }}</td>
            </tr>
          </tbody>
        </table>
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

<script setup>
import {ref} from 'vue';

const textarea = ref(null);
const wordCounts = ref(null);
const message = ref('');
const fontSize = ref('18');

function translate()
{
    if (!textarea.value) {
        message.value = 'Textarea empty'
        return
    }
    message.value = null
    wordCounts.value = []
    textarea.value = textarea.value.replace(/[.,;:!]/gi, '')
    const wordArray = textarea.value.split(' ')
    wordCounts.value = wordArray.reduce((prev, nxt) => {
        prev[nxt] = (prev[nxt] + 1) || 1
        return prev
    }, {})
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

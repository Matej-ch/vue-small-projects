<template>

    <div class="flex mb-3 w-full flex-col">
        <label class="mb-1 font-bold text-white">Text to analyze</label>
        <textarea v-model="textarea" cols="30" rows="10" placeholder="Input text to analyze"></textarea>
    </div>

    <div>
        <button @click="translate"
                class="btn btn-green">
            Translate
        </button>
    </div>


    <div v-show="message" class="bg-red-300 text-red-700 my-2 p-4 font-bold">
        {{message}}
    </div>

    <div class="flex flex-row items-start">
        <div class="flex flex-col pt-4">
            <table v-show="wordCounts" class="resp-table">
                <thead>
                <tr>
                    <th>Word</th>
                    <th>Count</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(wordCount,word) in wordCounts" :key="word">
                    <td>{{word}}</td>
                    <td>{{wordCount}}</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="word-map flex flex-wrap bg-slate-100 mx-2 mt-4 rounded-sm">

            <span v-for="(wordCount,word) in wordCounts" :key="word"
                  :style="'font-size:' + (parseInt(fontSize) + parseInt(wordCount)) + 'px'">
                {{word}}
            </span>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const textarea = ref(null);
const wordCounts = ref(null);
const message = ref('');
const fontSize = ref('18');

function translate() {
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
    span {
        padding-left: 10px;
        padding-right: 10px;
    }
}
</style>

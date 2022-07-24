<template>
    <div class="center grid">
        <div>
            <div class="flex flex-col justify-center items-center w-12">
                <label for="">Text to analyze</label>
                <textarea v-model="textarea" name="" id="" cols="30" rows="10"></textarea>

                <button @click="translate">
                    Translate
                </button>

                <hr>

                <div v-show="message" title="Alert" class="bg-red-500"
                     style="color: rgb(231, 154, 23);padding: 15px; height: 100px;">
                    {{message}}
                </div>
            </div>
        </div>

        <div>
            <div class="flex flex-col justify-center items-center w-6/12">
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

            <div class="flex flex-col justify-center items-center w-6/12 flex-wrap">
                <div class="word-map">
                    <span v-for="(wordCount,word) in wordCounts" :key="word"
                          :style="'font-size:' + (parseInt(fontSize) + parseInt(wordCount)) + 'px'">
                        {{word}}
                    </span>
                </div>
            </div>
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
    padding-top: 30px;

    span {
        padding-left: 10px;
        padding-right: 10px;
    }
}
</style>

<template>
    <div>
        <div class="flex flex-col items-center justify-center text-white py-4 bg-blue-800">
            <div class="text-center uppercase text-2xl">Word frequency</div>
        </div>

        <div class="px-4 py-5">

            <div class="flex items-center justify-between mb-3 w-full flex-col">
                <label class="mb-1">Text to analyze</label>
                <textarea v-model="textarea" cols="30" rows="10"
                          class="block p-2.5 w-full text-sm text-slate-900 bg-slate-50 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Text to analyze"></textarea>
            </div>

            <div>
                <button @click="translate"
                        class="bg-green-600 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-green-700 transition duration-300">
                    Translate
                </button>
            </div>


            <div v-show="message" class="bg-red-300 text-red-500 p-4">
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

                <div class="word-map flex flex-wrap">

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

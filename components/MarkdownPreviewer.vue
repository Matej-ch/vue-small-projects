<template>
    <div>
        <div class="component-header">
            <h2>Markdown preview</h2>
        </div>

        <div class="px-4 py-2">
            <div class="flex items-center justify-between mb-3 w-full flex-col">
                <label class="mb-1">Text with markdown</label>
                <textarea v-model="textarea" cols="30" rows="10"
                          placeholder="Text with markdown"></textarea>
            </div>
        </div>
        <div class="px-4 flex">
            <button @click="preview"
                    class="btn btn-green">
                Preview
            </button>

            <ClipboardBtn :text="markdown" v-show="markdown.length"></ClipboardBtn>

        </div>

        <div class="px-4 py-5">
            <div class="mb-3 w-full bg-white js-markdown" v-show="markdown.length" v-html="markdown">
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {marked} from 'marked';
import DOMPurify from 'dompurify';
import ClipboardBtn from "./ClipboardBtn";

const textarea = ref(null);
const markdown = ref('');

onMounted(() => {
    if (localStorage.getItem('markdown')) {
        textarea.value = localStorage.getItem('markdown');
        preview();
    }
})

function preview() {
    localStorage.setItem('markdown', textarea.value);
    markdown.value = DOMPurify.sanitize(marked.parse(textarea.value));
}
</script>

<style scoped lang="scss">

</style>
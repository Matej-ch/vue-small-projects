<template>
    <TagInput v-model="tags">

        <template #tag="tagProps">
            <span class="tag-input-tag">
                <span>{{tagProps.tag}} </span>
                <button type="button" class="tags-input-remove" @click="tagProps.removeTag(tagProps.tag)">&times;
                </button>
            </span>
        </template>

        <template #input="inputProps">
            <input class="tags-input-text" placeholder="Add tag..."
                   v-on="inputProps.eventHandlers" v-bind="inputProps.bindings">
        </template>

    </TagInput>
</template>

<script setup>
import TagInput from '../components/TagInput'
import {useHead} from "nuxt/app";
import {ref} from "vue";

const tags = ref(['hello', 'test', 'foo']);

useHead({
    title: `Multi tags input`
})
</script>

<style scoped>
.tag-input-tag {
    background-color: #60a5fa;
    color: #0047e1;
    border: 1px solid #0047e1;
    padding: 0.25rem;
    border-radius: 5px;
}


.tag-input-tag button {
    color: darkred;
    font-weight: bold;
    margin-left: 0.25rem;
}
</style>

<template>
    <TagInput v-model="tags">

        <template #tag="tagProps">
            <span class="tag-input-tag">
                <span>{{tagProps.tag}} </span>
                <button type="button" class="tags-input-remove" @click="removeTag(slotProps.tag)">&times;</button>
            </span>
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

</style>

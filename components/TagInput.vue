<template>

    <div>
        <div class="component-header">
            <h2>Multi input</h2>
        </div>

        <div class="px-4 py-5">
            <div class="tags-input">
                <slot name="tag" v-for="tag in props.modelValue" :tag="tag">
                </slot>

                <input class="tags-input-text" placeholder="Add tag..."
                       @keydown.delete="handleTagBackspace"
                       @keydown.enter.prevent="addTag"
                       v-model="newTag">
            </div>
        </div>
    </div>


</template>

<script setup>

import {ref} from "vue";

const props = defineProps({
    modelValue: Array,
})

defineEmits(['update:modelValue'])

const newTag = ref('');

function handleTagBackspace() {

}

function addTag() {

}

</script>

<style scoped>

</style>
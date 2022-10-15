<template>

    <div>
        <div class="component-header">
            <h2>Multi input</h2>
        </div>

        <div class="px-4 py-5">
            <div class="tags-input">
                <slot name="tag" v-for="tag in props.modelValue" :tag="tag" :remove-tag="removeTag">
                </slot>

                <slot name="input" :new-tag="newTag"
                      :bindings="{
                            value: newTag.value
                      }"
                      :event-handlers="{
                          input: (e) => {newTag.value = e.target.value},
                          keydown: (e) => {
                              if(e.keyCode === 8) {
                                  handleTagBackspace();
                              }

                              if(e.keyCode === 13) {
                                  e.preventDefault();
                                  addTag();
                              }
                          }
                      }"></slot>

                <!--                <input class="tags-input-text" placeholder="Add tag..."
                                       @keydown.delete="handleTagBackspace"
                                       @keydown.enter.prevent="addTag"
                                       v-model="newTag">-->
            </div>
        </div>
    </div>


</template>

<script setup>

import {ref} from "vue";

const props = defineProps({
    modelValue: Array,
})

const emit = defineEmits(['update:modelValue'])

const newTag = ref('');


function handleTagBackspace() {

}

function addTag() {
    if (newTag.value.length === 0 || props.modelValue.includes(newTag.value)) {
        return;
    }

    emit('update:modelValue', [...props.modelValue, newTag.value]);

    newTag.value = '';
}

function removeTag(tag) {
    emit('update:modelValue', props.modelValue.filter(t => t !== tag))
}

</script>

<style scoped>
.tags-input {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

</style>
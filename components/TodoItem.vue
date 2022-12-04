<template>
    <div class="flex flex-row gap-4  py-2">
        <div v-if="item.isEditing === true">
            <input type="text" v-model="newName" @keyup.enter="updateItem">
        </div>
        <div v-else>{{item.name}}</div>
        <a href="#" @click="editItem" class="text-xl" style="color: unset">✏</a>
        <a href="#" @click="removeItem" class="text-xl" style="color: unset">🗑</a>
    </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps(
    {
        item: Object,
    }
)

const newName = ref(props.item.name)

const emit = defineEmits(['edit', 'remove', 'update'])

function editItem() {
    emit('edit', props.item)
}

function removeItem() {
    emit('remove', props.item)
}

function updateItem() {
    emit('update', props.item, newName)
}

</script>

<style scoped>

</style>
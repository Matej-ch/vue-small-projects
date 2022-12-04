<template>
    <div>
        <input type="text" v-model="newItem" placeholder="new item" @keyup.enter="add">
    </div>
    <div class="py-4">
        <TodoItem v-for="item in items" :item="item" @edit="edit" @remove="remove" @update="update"></TodoItem>
    </div>
</template>

<script setup>
import {ref} from "vue";

const items = ref([
    {name: 'HTML', id: 1, isEditing: false},
    {name: 'CSS', id: 2, isEditing: false},
    {name: 'Angular', id: 3, isEditing: false},
    {name: 'React', id: 4, isEditing: false},
    {name: 'Vue', id: 5, isEditing: false},
    {name: 'Typescript', id: 6, isEditing: false},
    {name: 'NextJS', id: 7, isEditing: false}
])
const newItem = ref('')

function edit(item) {
    item.isEditing = true;
}

function remove(item) {
    console.log(item);
    items.value = [...items.value.filter(it => {
        return it.id !== item.id;
    })]
}

function add() {
    items.value.push({
        name: newItem.value,
        id: items.value.length + 1,
        isEditing: false
    });
    newItem.value = '';
}

function update(item, newName) {
    item.name = newName;
    item.isEditing = false;
}

</script>

<style scoped>

</style>
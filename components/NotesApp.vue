<template>
    <div>
        <div class="component-header">
            <h2>Notes app</h2>
        </div>

        <div class="px-4 py-5">
            <div class="flex flex-col text-white">
                <div class="flex items-end justify-between mb-5">
                    <div class="flex flex-col px-2 w-full">
                        <label class="mb-1" for="weight-kilograms">Add Note (markdown available)</label>

                        <textarea v-model="note" @keyup.enter="saveNote" type="text" cols="30" rows="10"
                                  class="py-3 px-5 rounded focus:outline-none text-slate-600 focus:text-slate-600"
                        ></textarea>
                    </div>
                </div>
            </div>

            <div class="flex mb-3 w-full flex-col">
                <div v-for="note in notes" :key="note.id"
                     class="flex flex-row px-2 font-bold text-xl border-b border-b-slate-500 bg-slate-50 py-2 rounded">
                    <div class="flex flex-col">
                        <div class="flex flex-row">{{note.id}}.
                            <span v-show="note.isEditing === false" class="cursor-pointer js-markdown"
                                  @dblclick="note.isEditing = true"
                                  v-html="marked.parse(note.text)"></span>
                            <input type="text" v-show="note.isEditing === true" v-model="note.text"
                                   @keyup.enter="editNote(note)"
                                   class="border-sky-200 border px-1 rounded">
                        </div>
                        <span class="font-bold text-sm text-slate-700">Created at {{new Date(note.date)}}</span>
                    </div>
                    <div class="ml-auto">
                        <button class="" @click="deleteNote(note)">&#10060;</button>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {marked} from 'marked';
import DOMPurify from 'dompurify';

const note = ref('');
const notes = ref([]);

onMounted(() => {
    if (localStorage.getItem('notes')) {
        notes.value = JSON.parse(localStorage.getItem('notes'));
    }
})

function saveNote() {
    notes.value.push({
        id: notes.value.length + 1,
        text: note.value,
        date: Date.now(),
        isEditing: false
    });

    localStorage.setItem('notes', JSON.stringify(notes.value));

    note.value = '';
}

function deleteNote(note) {
    notes.value = notes.value.filter(n => n.id !== note.id);
    localStorage.setItem('notes', JSON.stringify(notes.value));
}

function editNote(note) {
    note.isEditing = false;
    note.date = Date.now();
    localStorage.setItem('notes', JSON.stringify(notes.value));
}

</script>

<style scoped>

</style>
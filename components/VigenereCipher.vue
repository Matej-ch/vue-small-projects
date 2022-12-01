<template>
    <div class="px-4 py-2">
        <div class="flex items-center justify-between mb-3 w-full flex-col">
            <label class="mb-1">Text to encrypt</label>
            <textarea v-model="textarea" cols="30" rows="10"
                      placeholder="Text to encrypt"></textarea>
        </div>

        <div class="flex items-center justify-between mb-3 w-full flex-col">
            <label class="mb-1">Encryption keyword</label>

            <input v-model="keyword" type="text" placeholder="Encryption key" @keyup="generateKey"
                   class="w-full">

        </div>
    </div>

    <div class="px-4 flex gap-2 py-2">
        <button @click="encrypt"
                :class="keyword.length ? '' : 'pointer-events-none opacity-25'"
                class="btn btn-green">
            Encrypt
        </button>

        <button @click="decrypt"
                class="btn"
                :class="encryptedText.length ? 'btn-orange' : ' btn-slate pointer-events-none opacity-25' ">
            Decrypt
        </button>

    </div>

    <div class="px-4 flex gap-2 py-2" v-show="encryptedText.length">
            <textarea v-model="encryptedText" cols="30" rows="10"
                      placeholder="Encrypted text"></textarea>
    </div>
</template>

<script setup>

import {ref} from 'vue';

const textarea = ref(null);
const keyword = ref('');
const key = ref('');
const encryptedText = ref('');
const decryptedText = ref('');

function encrypt() {
    let result = '';
    for (let i = 0; i < textarea.value.length; i++) {
        let x = (textarea.value[i].charCodeAt(0) + key.value[i].charCodeAt(0)) % 26;

        x += 'A'.charCodeAt(0);
        result += String.fromCharCode(x);
    }

    encryptedText.value = result;
}

function decrypt() {
    let result = '';
    for (let i = 0; i < encryptedText.value.length; i++) {
        let x = (encryptedText.value[i].charCodeAt(0) - key.value[i].charCodeAt(0) + 26) % 26;

        x += 'A'.charCodeAt(0);
        result += String.fromCharCode(x);
    }
    decryptedText.value = result;
}

function generateKey() {
    let tempKey = keyword.value.split("");

    if (textarea.value.length === 0) {
        return;
    }

    if (textarea.value.length === tempKey.length) {
        key.value = tempKey.join("");
    } else {
        let temp = tempKey.length;
        for (let i = 0; i < (textarea.value.length - temp); i++) {

            tempKey.push(tempKey[i % ((tempKey).length)])
        }
    }

    key.value = tempKey.join("");
}
</script>

<style scoped>

</style>
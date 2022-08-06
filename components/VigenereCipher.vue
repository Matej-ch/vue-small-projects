<template>
    <div>
        <div class="component-header">
            <h2>Vigenere Cipher</h2>
        </div>

        <div class="px-4 py-2">
            <div class="flex items-center justify-between mb-3 w-full flex-col">
                <label class="mb-1">Text to encrypt</label>
                <textarea v-model="textarea" cols="30" rows="10"
                          class="block p-2.5 w-full text-sm text-slate-900 bg-slate-50 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Text to encrypt"></textarea>
            </div>

            <div class="flex items-center justify-between mb-3 w-full flex-col">
                <label class="mb-1">Encryption keyword</label>

                <input v-model="keyword" type="text" placeholder="Encryption key" @keyup="generateKey"
                       class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600 w-full">

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
                      class="block p-2.5 w-full text-sm text-slate-900 bg-slate-50 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Encrypted text"></textarea>
        </div>

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
        console.log(textarea.value);
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
        //return tempKey.join("");
    } else {
        let temp = tempKey.length;
        for (let i = 0; i < (textarea.value.length - temp); i++) {

            tempKey.push(tempKey[i % ((tempKey).length)])
        }
    }

    key.value = tempKey.join("");
    console.log(key.value);
    //return tempKey.join("");
}
</script>

<style scoped>

</style>
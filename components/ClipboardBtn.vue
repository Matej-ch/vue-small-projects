<template>
    <button @click="copy"
            class="btn" :class="props.btnClass">
        <svg v-show="copyState === 0" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clipboard"
             width="28"
             height="28"
             viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round"
             stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/>
            <rect x="9" y="3" width="6" height="4" rx="2"/>
        </svg>

        <svg v-show="copyState === 1" xmlns="http://www.w3.org/2000/svg"
             class="icon icon-tabler icon-tabler-clipboard-check" width="28"
             height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round"
             stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/>
            <rect x="9" y="3" width="6" height="4" rx="2"/>
            <path d="M9 14l2 2l4 -4"/>
        </svg>

        <svg v-show="copyState === 2" xmlns="http://www.w3.org/2000/svg"
             class="icon icon-tabler icon-tabler-clipboard-x" width="28" height="28"
             viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round"
             stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/>
            <rect x="9" y="3" width="6" height="4" rx="2"/>
            <path d="M10 12l4 4m0 -4l-4 4"/>
        </svg>
    </button>
</template>

<script setup>

import {ref} from "vue";
import {useToast} from "vue-toastification";


const toast = useToast();

const props = defineProps({
    text: String,
    btnClass: {type: String, default: 'btn-slate'}
})

const copyState = ref(0);

function copy() {
    navigator.clipboard.writeText(props.text).then(function () {
        copyState.value = 1;

        toast.success("Password copied to clipboard");

    }, function () {
        copyState.value = 2;

        toast.error("Copy failed", {
            timeout: 2000
        });
    });
}
</script>

<style scoped>

</style>
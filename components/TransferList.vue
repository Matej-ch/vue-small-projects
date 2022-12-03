<template>
    <div class="border rounded-sm flex flex-row justify-between">
        <div class="flex flex-col gap-2 grow items-center justify-center">
            <span v-for="(item,index) in leftSideList">
                <label>
                    <input type="checkbox" :value="index" name="selected" v-model="checkedLeft">
                    {{item}}
                </label>
            </span>
        </div>
        <div class="max-w-sm flex flex-col gap-4 p-2 grow-0">
            <button class="btn btn-slate" @click="moveToLeftAll"> &#60;&#60;</button>
            <button class="btn btn-slate" @click="moveSelectedToLeft"> &#60;</button>
            <button class="btn btn-slate" @click="moveSelectedToRight"> &#62;</button>
            <button class="btn btn-slate" @click="moveToRightAll"> &#62;&#62;</button>
        </div>
        <div class="flex flex-col gap-2 grow items-center justify-center">
            <span v-for="(item,index) in rightSideList">
                <label>
                    <input type="checkbox" name="selected" :value="index" v-model="checkedRight">
                    {{item}}
                </label>
            </span>
        </div>
    </div>
</template>

<script setup>

import {ref} from "vue";

const leftSideList = ref(['JS', 'HTML', 'CSS', 'TS']);

const rightSideList = ref(['React', 'Angular', 'Vue', 'Svelte']);

const checkedLeft = ref([]);
const checkedRight = ref([]);

function moveToRightAll() {
    rightSideList.value = [...rightSideList.value, ...leftSideList.value];
    leftSideList.value = [];
}

function moveToLeftAll() {
    leftSideList.value = [...leftSideList.value, ...rightSideList.value];
    rightSideList.value = [];
}

function moveSelectedToRight() {
    rightSideList.value = [
        ...rightSideList.value,
        ...leftSideList.value.filter((_, index) => {
            return checkedLeft.value.includes(index)
        })];

    leftSideList.value = [...leftSideList.value.filter((_, index) => {
        return !checkedLeft.value.includes(index)
    })];

    checkedLeft.value = [];
}

function moveSelectedToLeft() {

    leftSideList.value = [
        ...leftSideList.value,
        ...rightSideList.value.filter((_, index) => {
            return checkedRight.value.includes(index)
        })];


    rightSideList.value = [...rightSideList.value.filter((_, index) => {
        return !checkedRight.value.includes(index)
    })];

    checkedRight.value = [];
}

</script>

<style scoped>

</style>
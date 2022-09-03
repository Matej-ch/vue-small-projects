<template>
    <div class="flex flex-row font-bold text-xs md:text-base justify-center items-center text-slate-300">
        <div class="hour">{{hours}}</div>
        <div class="dots">:</div>
        <div class="min">{{minutes}}</div>
        <div class="dots">:</div>
        <div class="secs">{{seconds}}</div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

onMounted(() => {
    setTime();
})

const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

function setTime() {
    setInterval(() => {
        const date = new Date()
        hours.value = date.getHours()
        minutes.value = checkSingleDigit(date.getMinutes())
        seconds.value = checkSingleDigit(date.getSeconds())
    }, 1000)
}

function checkSingleDigit(digit) {
    return ('0' + digit).slice(-2)
}
</script>

<style scoped>

</style>
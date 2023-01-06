<template>
    <div class="text-center gap-2 flex flex-col">
        <div class="progress-bar">
            <div ref="progress" class="progress" id="progress"></div>
        </div>

        <div class="grid gap-2 grid-cols-3">
            <button @click="onStart" class="btn btn-green" :disabled="isInProgress === true">Start</button>
            <button @click="onStop" class="btn btn-green" :disabled="isInProgress === false">Stop</button>
            <button @click="onReset" class="btn btn-green">Reset</button>
        </div>
    </div>

</template>

<script setup>

const progress = ref(null);
const isInProgress = ref(false);
let reqAniFrameId = null;

const onStart = () => {
    isInProgress.value = true;
    startProgress();
}

const onStop = () => {
    isInProgress.value = false;
    stopProgress();
}

const onReset = () => {
    onStop();
    setProgressWidth(0);
}

const startProgress = () => {
    let progressPercent = 0.1 + getProgressWidth();

    if (progressPercent <= 100) {
        setProgressWidth(progressPercent);
        reqAniFrameId = requestAnimationFrame(startProgress);
    }
}

const stopProgress = () => {
    cancelAnimationFrame(reqAniFrameId);
}

function getProgressWidth() {
    return +progress.value.style.width.split('%')[0];
}

function setProgressWidth(progressPercent) {
    progress.value.style.width = progressPercent + '%';
}

</script>

<style scoped>
.progress-bar {
    height: 10px;
    background-color: #ececec;
}

.progress {
    width: 0%;
    height: 100%;
    background-color: rgb(79, 79, 241);
}
</style>
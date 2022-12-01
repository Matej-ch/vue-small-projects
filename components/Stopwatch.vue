<template>
    <div class="flex flex-col mb-5">
        <div class="flex flex-row font-bold text-2xl justify-center items-center text-slate-300">
            <div class="hour">{{hours}}</div>
            <div class="dots">:</div>
            <div class="min">{{minutes}}</div>
            <div class="dots">:</div>
            <div class="secs">{{seconds}}</div>
        </div>

        <div class="flex gap-2 justify-center mt-8">
            <button @click="startStop" v-if="stopTimer"
                    class="btn btn-green">
                Start
            </button>
            <button @click="startStop" v-else class="btn btn-orange">
                Stop
            </button>

            <button @click="restart" class="btn btn-red">
                Restart
            </button>

            <button class="btn btn-slate" @click="addLap">
                Lap
            </button>
        </div>

        <div class="flex flex-col gap-2" v-show="laps.length">
            <div v-for="lap in reversedLaps" class="flex flex-row gap-4">
                <span class="text-xl">{{lap.id}}</span>
                <span class="text-xl">{{lap.time}}</span>
                <span class="text-base text-slate-500">{{lap.duration}}</span>
            </div>
        </div>
    </div>
</template>

<script setup>

import {computed, ref} from "vue";

const hours = ref(checkSingleDigit(0));
const minutes = ref(checkSingleDigit(0));
const seconds = ref(checkSingleDigit(0));
const stopTimer = ref(true);
let stopwatchInterval = null;
let intervalCounter = 0;
let currentTime = 0;

const laps = ref([]);

const reversedLaps = computed(() => {
    let tempLaps = laps.value;

    tempLaps.sort(function (a, b) {
        let keyA = a.id,
            keyB = b.id;
        // Compare the 2 dates
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
    });

    return tempLaps
})

function startStop() {
    stopTimer.value = !stopTimer.value;
    if (!stopTimer.value) {

        if (!intervalCounter) {
            timer();
        }
    }
}

function timer() {
    let interval = 10;

    stopwatchInterval = setInterval(function () {

        intervalCounter += interval;

        if (!stopTimer.value) {
            if ((intervalCounter % 1000) === 0) {
                currentTime += 1000;
                let appendHour = currentTime / (1000 * 60 * 60) | 0;
                let appendMinute = currentTime % (1000 * 60 * 60) / (1000 * 60) | 0;
                let appendSecond = currentTime % (1000 * 60) / 1000 | 0;

                hours.value = checkSingleDigit(appendHour);
                minutes.value = checkSingleDigit(appendMinute);
                seconds.value = checkSingleDigit(appendSecond);
            }
        }

    }, 10)
}

function addLap() {
    laps.value.push({
        id: laps.value.length + 1,
        time: `${hours.value}:${minutes.value}:${seconds.value}`,
        duration: '',
    });
}

function restart() {
    if (!stopTimer.value) {
        stopTimer.value = !stopTimer.value;
    }

    clearInterval(stopwatchInterval);

    if (intervalCounter) {
        currentTime = 0;
        intervalCounter = 0;
        hours.value = checkSingleDigit(0);
        minutes.value = checkSingleDigit(0);
        seconds.value = checkSingleDigit(0);
    }

    laps.value = [];
}

function checkSingleDigit(digit) {
    return ('0' + digit).slice(-2)
}
</script>

<style scoped>

</style>
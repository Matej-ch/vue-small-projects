<template>
    <div class="w-full h-full flex justify-center items-center p-10">
        <div class="shadow-md relative bg-white p-5 rounded-lg border-slate-100 border-[1px] w-full">
            <CountdownHeader/>
            <main class="flex justify-center">
                <CountdownSegment label="days" :number="daysRounded"/>
                <CountdownSegment label="hours" :number="hoursRounded"/>
                <CountdownSegment label="minutes" :number="minutesRounded"/>
                <CountdownSegment label="seconds" :number="secondsRounded"/>
            </main>
        </div>
    </div>
</template>

<script setup>
import {useNow} from '@vueuse/core'
import {computed, ref} from 'vue';

const props = defineProps({
    year: Number,
})

const now = useNow();

const christmas = new Date(`12/25/${props.year} 00:00:00`);

const seconds = computed(() => {
    return 60 * (minutes.value - minutesRounded.value)
});

const secondsRounded = computed(() => {
    return Math.floor(seconds.value);
});

const minutes = computed(() => {
    return 60 * (hours.value - hoursRounded.value)
});

const minutesRounded = computed(() => {
    return Math.floor(minutes.value);
})

const hours = computed(() => {
    return 24 * (days.value - daysRounded.value);
});

const hoursRounded = computed(() => {
    return Math.floor(hours.value);
});

const days = computed(() => {
    const dayInMiliseconds = 1000 * 60 * 60 * 24;

    return (christmas.getTime() - now.value.getTime()) / dayInMiliseconds;
});

const daysRounded = computed(() => {
    return Math.floor(days.value)
})

</script>
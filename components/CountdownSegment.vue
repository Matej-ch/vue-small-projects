<template>
    <div class="segment text-center">
        <div class="pt-10 overflow-hidden relative">
            <transition>
                <span :key="number" class="numbers text-emerald-700 absolute top-0 left-[50%]">{{number}}</span>
            </transition>
        </div>

        <span class="label block pt-2 text-emerald-700">{{label}}</span>
    </div>
</template>

<script setup>
const props = defineProps({
    label: String,
    number: Number,
})
</script>

<style>
.segment {
    width: 80px;
}

.numbers {
    transform: translateX(-50%);
    font-size: 32px;
}

.label {
    font-size: 16px;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from {
    transform: translateY(-100%) translateX(-50%);
}

.v-leave-to {
    transform: translateY(100%) translateX(-50%);
}

.v-enter-to,
.v-leave-from {
    transform: translateY(0px) translateX(-50%);
}

.v-enter-from,
.v-leave-to {
    /* opacity: 0; */
}
</style>
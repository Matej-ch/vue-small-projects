<template>
    <div class="px-4">
        <h2>Example 1</h2>
        <NorthPoleDistance v-slot="{distance, toggleUnit, unit}">
            You are currently {{distance}} {{unit}} away from north pole.
            <button class="btn btn-green" @click="toggleUnit">Toggle unit</button>
        </NorthPoleDistance>

        <h2 class="mt-16">Example 2</h2>
        <NorthPoleDistance v-slot="{distance, toggleUnit, unit}">
            <div class="p-10 border rounded-sm">
                Current distance to north pole: {{distance}} {{unit}}
                <button class="btn btn-red" @click="toggleUnit">Switch to {{unit}}</button>
            </div>

        </NorthPoleDistance>
    </div>
</template>

<script setup>

import NorthPoleDistance from "~/components/NorthPoleDistance.vue";
</script>

<style scoped>

</style>
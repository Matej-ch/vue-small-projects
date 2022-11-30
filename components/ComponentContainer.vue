<template>
    <div>
        <div class="component-header">
            <h2>
                <slot name="header">Component Header</slot>
            </h2>
        </div>

        <div class="px-4 py-5">
            <div class="flex flex-col text-white">
                <slot name="body">Component Body</slot>
            </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped>

</style>
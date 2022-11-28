<template>
    <div class="flex flex-row">
        <div class="w-full m-auto">
            <slot/>
        </div>

        <div class="absolute top-2 right-2">
            <ColorModePicker/>
        </div>

    </div>
</template>

<script setup>

import ColorModePicker from "../components/ColorModePicker.vue";

</script>

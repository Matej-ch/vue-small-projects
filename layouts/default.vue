<template>
    <div class="flex flex-row">
        <Navbar/>

        <div class="w-full max-w-5xl m-auto">
            <div class="rounded-xl bg-gradient-to-b from-blue-600 to-blue-400 mr-3">
                <div class="flex flex-col">
                    <slot/>
                </div>
            </div>
        </div>

        <div class="absolute top-2 right-2">
            <ColorModePicker/>
        </div>
    </div>
</template>

<script setup>

import Navbar from '../components/Navbar.vue'
import ColorModePicker from "../components/ColorModePicker.vue";

</script>

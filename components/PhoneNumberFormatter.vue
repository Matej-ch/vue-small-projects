<template>
    <div>
        <input type="text" v-model="phoneNumber" @input="formatNumber">
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const phoneNumber = ref('123456789');

onMounted(() => {
    formatNumber();
})

function formatNumber() {
    const numbers = [...phoneNumber.value].filter(v => Number.isInteger(+v) && v !== ' ').join('');
    phoneNumber.value = numbers.length > 3 ? '+(' + numbers.substring(0, 3) + ') - ' + numbers.substring(3) : numbers;
}
</script>

<style scoped>

</style>
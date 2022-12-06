<template>
    <select v-model="selected" class="p-2 border-2 border-gray-dark" @change="selectProduct">
        <option disabled value="default">Select an item</option>
        <option v-for="(product,index) in products" :value="index">{{product.title}} - &dollar;{{product.price}}
        </option>
    </select>
</template>

<script setup>
import {ref} from 'vue'

const emit = defineEmits(['select'])

const props = defineProps({
    products: Array,
})

const selected = ref()

function selectProduct() {
    emit('select', props.products[selected.value])
}
</script>

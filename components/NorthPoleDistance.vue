<template>
    <!-- this should only render a slot -->
    <slot v-bind="{ unit, distance, toggleUnit }"/>
</template>

<script setup>
import {ref, computed} from 'vue'
import {getDistanceKm, getDistanceMiles} from "~/helpers/distance";
// hint: coords.latitude + cords.latitude
const {coords} = useGeolocation()
const unit = ref('mile')
const toggleUnit = () => {
    if (unit.value === 'km') {
        unit.value = 'mile'
    } else {
        unit.value = 'km'
    }
}


const distance = computed(() => {
    return unit.value === 'km'
        ? getDistanceKm(coords.value.latitude, coords.value.longitude)
        : getDistanceMiles(coords.value.latitude, coords.value.longitude)
})

</script>

<style scoped>

</style>
<template>
    <div class="flex flex-col items-center mt-24 w-full">
        <h1 class="mt-8 text-xl font-bold">Drag the presents under the tree!</h1>
        <!-- TODO: make ChristmasTree our drop zone! -->
        <ChristmasTree :presents="underTheTree" class="mt-16"
                       @drop="onDrop($event)"
                       @dragenter.prevent
                       @dragover.prevent/>
        <div class="pt-32 mt-32 bg-gray-100 w-full justify-center flex-1">
            <div class="flex items-end justify-center" ref="parent">
                <!-- TODO: make each present draggable -->
                <ChristmasPresent v-for="(p, index) in presents" :key="p" :name="p"
                                  @dragstart="startDrag($event,index)"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useAutoAnimate} from '@formkit/auto-animate/vue'

const presents = ref(['small-red-gift', 'blue-gift', 'tall-red-gift'])
const underTheTree = ref([])

const [parent] = useAutoAnimate()

const startDrag = (evt, index) => {
    evt.dataTransfer.dropEffect = 'move';
    evt.dataTransfer.effectAllowed = 'move';
    evt.dataTransfer.setData('itemID', index);
}
const onDrop = evt => {
    const itemIndex = evt.dataTransfer.getData('itemID');
    const present = presents.value[itemIndex];

    underTheTree.value.push(present);
    presents.value.splice(itemIndex, 1);
}
</script>

<style scoped>

</style>
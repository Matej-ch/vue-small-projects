<template>
    <ComponentContainer>
        <template v-slot:header>Tree structure from json</template>

        <template v-slot:body>
            <div class="px-4 py-2">
                <div class="flex items-center justify-between mb-3 w-full flex-col">

                    <div class="flex items-center justify-between mb-3 w-full flex-col">
                        <label class="mb-1 font-bold text-white">Json to convert</label>
                        <textarea v-model="jsonData" cols="30" rows="10" placeholder="Json to convert"></textarea>
                    </div>
                </div>
            </div>
            <div class="px-4 bg-blue-400 py-2">
                <TreeStructure :jsonData="JSON.parse(jsonData)"/>
            </div>
        </template>

    </ComponentContainer>


</template>

<script setup>
import {useHead} from "nuxt/app";
import TreeStructure from "../components/TreeStructure";
import {ref} from "vue";

const jsonData = ref('{"id":"0001","type":"donut","name":"Cake","ppu":0.55,"batters":{"batter":[{"id":"1001","type":"Regular"},{"id":"1002","type":"Chocolate"},{"id":"1003","type":"Blueberry"},{"id":"1004","type":"Devil\'s Food"}]},"topping":[{"id":"5001","type":"None"},{"id":"5002","type":"Glazed"},{"id":"5005","type":"Sugar"},{"id":"5007","type":"Powdered Sugar"},{"id":"5006","type":"Chocolate with Sprinkles"},{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}]}')

useHead({
    title: `Tree structure`
})
</script>

<style scoped>

</style>
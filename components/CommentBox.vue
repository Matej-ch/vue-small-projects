<template>
    <Comment v-for="comment in comments" :comment="comment"></Comment>
</template>

<script setup>

import {ref} from "vue";

const comments = ref([
    {
        name: 'Name of commenter',
        text: 'Hello, world',
        children: [{
            name: 'Name of commenter 2.1',
            text: 'Hello, world 2.1',
            children: [{
                name: 'Name of commenter 2.1.1',
                text: 'Hello, world 2.1.1',
            }, {
                name: 'Name of commenter 2.1.2',
                text: 'Hello, world 2.1.2',
            }]
        }, {
            name: 'Name of commenter 2.2',
            text: 'Hello, world 2.2',
        }]
    }
])
</script>

<style scoped>

</style>
<template>
    <Comment v-for="comment in comments" :comment="comment" :handle-remove="handleRemove"
             :handle-post="handlePost"></Comment>
</template>

<script setup>

import {ref} from "vue";

const comments = ref([
    {
        id: getID(),
        name: 'Name of commenter',
        text: 'Hello, world',
        children: [{
            name: 'Name of commenter 2.1',
            text: 'Hello, world 2.1',
            id: getID(),
            children: [{
                id: getID(),
                name: 'Name of commenter 2.1.1',
                text: 'Hello, world 2.1.1',
                children: [],
            }, {
                id: getID(),
                name: 'Name of commenter 2.1.2',
                text: 'Hello, world 2.1.2',
                children: [],
            }]
        }, {
            id: getID(),
            name: 'Name of commenter 2.2',
            text: 'Hello, world 2.2',
            children: [],
        }]
    }
])

function handleRemove(comment) {

    removeRecursive(comments.value, comment.id);
}

function handlePost(post) {

    if (!post.name.length || !post.reply.length) {
        return;
    }

    post.comment.children.push({
        id: getID(),
        name: post.name,
        text: post.reply,
        children: [],
    });
}

function removeRecursive(comments, commentID) {

    for (let c in comments) {
        if (comments[c].id === commentID) {

            return;
        } else {
            if (comments[c].children !== undefined && comments[c].children.length > 1) {
                console.log('before recursion');
                removeRecursive(comments[c].children, commentID)
            }
        }
    }
}

function getID() {
    return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
}
</script>

<style scoped>

</style>
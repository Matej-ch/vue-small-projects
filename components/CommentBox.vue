<template>
    <Comment v-for="(comment,index) in comments"
             :key="index"
             :comment="comment"
             :replies="comment.replies"
             :handle-remove="handleRemove"
             :handle-post="handlePost"></Comment>
</template>

<script setup>

import {ref} from "vue";

const comments = ref([
    {
        id: getID(),
        name: 'Josh',
        text: 'Hello, world',
        replies: [{
            name: 'Jeff',
            text: 'This is bad',
            id: getID(),
            replies: [{
                id: getID(),
                name: 'Feff',
                text: 'its pretty good',
                replies: [],
            }, {
                id: getID(),
                name: 'Cleff',
                text: 'Cloom',
                replies: [],
            }]
        }, {
            id: getID(),
            name: 'Clint',
            text: 'Goodbye world',
            replies: [],
        }]
    },
])

function handleRemove(comment) {

    //comment.replies = [];
    removeRecursive(comments.value, comment.id);
}

function handlePost(comment, name, myResponse) {

    if (!name.length || !myResponse.length) {
        return;
    }

    comment.replies.push({
        id: getID(),
        name: name,
        text: myResponse,
        replies: [],
    })
}

function removeRecursive(comments, commentID, parentComment = null) {

    for (let c in comments) {
        if (comments[c].id === commentID) {
            comments[c].replies = [];

            if (parentComment !== null) {
                parentComment.replies = [...parentComment.replies.filter(rep => {
                    return rep.id !== commentID;
                })]
            }
            return;
        } else {
            removeRecursive(comments[c].replies, commentID, comments[c])
        }
    }
}

function getID() {
    return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
}
</script>

<style scoped>

</style>
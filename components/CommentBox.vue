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

    //let test = removeRecursive(comments.value, comment.id);
    comment.replies = [];
    //console.log();
    //comments.value = test;
    //console.log(test);
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

function removeRecursive(comments, commentID) {

    return comments.map(item => {
        return {...item}
    }).filter(item => {
        if ('replies' in item) {
            item.replies = removeRecursive(item.replies, commentID);
        }
        return item.id !== commentID;
    });

    /*for (let c in comments) {
        if (comments[c].id === commentID) {
            console.log(commentID);
            //console.log(comments[c]);
            //comments.splice(c, 1);
            //delete comments[c];
            //comments.value = comments.slice(c, 1);
            return;
        } else {
            if (comments[c].replies !== undefined && comments[c].replies.length > 1) {
                removeRecursive(comments[c].replies, commentID)
            }
        }
    }*/
}

function getID() {
    return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
}
</script>

<style scoped>

</style>
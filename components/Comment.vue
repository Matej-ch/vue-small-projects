<template>
    <div class="border bg-white text-slate-900 rounded p-4">
        <div class="font-bold text-xl">{{comment.name}}</div>

        <div v-if="isEditing">
            <input type="text" v-model="newCommentText" class="border rounded border-slate-400"
                   @keyup.enter="finishEdit">
        </div>
        <div v-else>{{newCommentText}}</div>

        <div class="flex flex-row gap-2">
            <div>
                <button @click="openReply" class="btn btn-green">Reply</button>
            </div>

            <div v-if="canEdit">
                <button v-if="!isEditing" @click="edit" class="btn btn-green">Edit</button>
                <button v-else @click="finishEdit" class="btn btn-orange">Save</button>
            </div>

            <div v-if="canDelete">
                <button @click="handleRemove(comment)" class="btn btn-green">Delete</button>
            </div>
        </div>

    </div>

    <div class="pl-4" v-if="replies.length">
        <Comment
            v-for="(reply,index) in replies"
            :key="index"
            :comment="reply"
            :replies="reply.replies"
            :can-edit="true"
            :can-delete="true"
            :handle-remove="handleRemove"
            :handle-post="handlePost">

        </Comment>
    </div>

    <div v-if="isReplying" class="py-2">
        <input v-model="name" type="text" placeholder="Your name">
        <textarea v-model="myResponse" placeholder="comment"></textarea>
        <div class="flex gap-2">
            <button class="btn btn-orange"
                    @click="postReply">
                Post
            </button>
            <button class="btn btn-orange" @click="closeReply">Cancel</button>
        </div>
    </div>


</template>

<script setup>
const props = defineProps({
    comment: Object,
    replies: Array,
    canEdit: {type: Boolean, default: false},
    canDelete: {type: Boolean, default: false},
    handleRemove: Function,
    handlePost: Function
})

const isReplying = ref(false);
const name = ref('');
const myResponse = ref('');
const isEditing = ref('');
const newCommentText = ref(props.comment.text);

function openReply() {
    isReplying.value = true;
}

function closeReply() {
    isReplying.value = false;
}

function postReply() {
    props.handlePost(props.comment, name.value, myResponse.value);
    name.value = '';
    myResponse.value = '';
    isReplying.value = false;
}

function edit() {
    isEditing.value = true;
}

function finishEdit() {
    props.comment.text = newCommentText;
    isEditing.value = false;
}
</script>

<style scoped>

</style>
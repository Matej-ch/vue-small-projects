<template>
    <div class="border bg-white text-slate-900 rounded p-4">
        <div class="font-bold text-xl">{{comment.name}}</div>
        <div>{{comment.text}}</div>

        <div class="flex flex-row gap-2">
            <div>
                <button @click="isReplying = true" class="btn btn-green">Reply</button>
            </div>

            <div v-if="canEdit">
                <button @click="edit" class="btn btn-green">Edit</button>
            </div>

            <div v-if="canDelete">
                <button @click="handleRemove(comment)" class="btn btn-green">Delete</button>
            </div>
        </div>

    </div>

    <div class="pl-4">
        <Comment v-if="comment.children !== undefined && comment.children.length > 1"
                 v-for="child in comment.children"
                 :comment="child"
                 :can-edit="true"
                 :can-delete="true" :handle-remove="handleRemove" :handle-post="handlePost">

        </Comment>
    </div>

    <div v-if="isReplying" class="py-2">
        <input v-model="name" type="text" placeholder="Your name">
        <textarea v-model="reply" placeholder="comment"></textarea>
        <div class="flex gap-2">
            <button class="btn btn-orange"
                    @click="() => { handlePost({comment:comment,name,reply});name = '';reply = '';isReplying = false; }">
                Post
            </button>
            <button class="btn btn-orange" @click="isReplying=false">Cancel</button>
        </div>
    </div>


</template>

<script setup>
const props = defineProps({
    comment: Object,
    canEdit: {type: Boolean, default: false},
    canDelete: {type: Boolean, default: false},
    handleRemove: Function,
    handlePost: Function
})

const emit = defineEmits(['post', 'edit'])
const isReplying = ref(false);
const name = ref('');
const reply = ref('');

function edit() {
    emit('edit', props.comment)
}

</script>

<style scoped>

</style>
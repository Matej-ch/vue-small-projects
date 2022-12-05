<template>
    <div class="border bg-white text-slate-900 rounded p-4">
        <div class="font-bold text-xl">{{comment.name}}</div>
        <div>{{comment.text}}</div>

        <div class="flex flex-row gap-2">
            <div>
                <button @click="reply" class="btn btn-green">Reply</button>
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
                 :can-delete="true" :handle-remove="handleRemove">

        </Comment>
    </div>


</template>

<script setup>
const props = defineProps({
    comment: Object,
    canEdit: {type: Boolean, default: false},
    canDelete: {type: Boolean, default: false},
    handleRemove: Function
})

const emit = defineEmits(['post', 'edit'/*, 'remove'*/])

function reply() {

}

function post() {
    emit('post', props.comment)
}

function edit() {
    emit('edit', props.comment)
}

/*function remove() {
    emit('remove', props.comment)
}*/
</script>

<style scoped>

</style>
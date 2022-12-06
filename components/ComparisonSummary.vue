<template>
    <p class="mx-5 text-center">
        <span v-if="first.id === second.id">These are the same items</span>
        <span v-else>

            <span v-if="first.price === second.price">
                You can get <strong>1</strong> <em>{{first.title}}</em> for about the same price as a single
                <em>{{second.title}}</em>
            </span>

            <span v-if="first.price > second.price">
                You can get <strong>{{Math.floor(first.price / second.price)}}</strong> <em>{{second.title}}</em> for
                about the same price as a single
                <em>{{first.title}}</em>
            </span>

            <span v-if="first.price < second.price">
                You can get <strong>{{Math.floor(second.price / first.price)}}</strong> <em>{{first.title}}</em> for
                about the same price as a single
                <em>{{second.title}}</em>
            </span>
        </span>
    </p>
</template>

<script setup>
const props = defineProps({
    first: Object,
    second: Object
})
</script>
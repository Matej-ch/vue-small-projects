<script setup>

import {useList} from "~/store/secretSanta";
import ListItem from "~/components/ListItem.vue";

const store = useList()
</script>
<template>
    <div class="list w-full">
        <ListItem v-for="{ name, email } in store.list" :key="email" :name="name" :email="email"/>
    </div>
</template>

<style lang="scss" scoped></style>
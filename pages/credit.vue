<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <div class="py-8">
                <CreditCard/>
            </div>

        </template>

    </ComponentContainer>

</template>

<script setup>
import CreditCard from "../components/CreditCard";
import {useHead} from "nuxt/app";

const title = 'Credit card';
useHead({
    title: title
})
</script>

<style scoped>

</style>
<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}</template>

        <template v-slot:body>
            <OtpInput :length="6"/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import OtpInput from "../components/OtpInput";
import {useHead} from "nuxt/app";

const title = 'OTP Input';
useHead({
    title: title
})
</script>

<style scoped>

</style>
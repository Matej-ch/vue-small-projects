<template>
    <ComponentContainer>
        <template v-slot:header>{{title}}
        </template>

        <template v-slot:body>
            <QrCode/>
        </template>

    </ComponentContainer>

</template>

<script setup>
import QrCode from '../components/QrCode'
import {useHead} from "nuxt/app";

const title = 'QR code generator';
useHead({
    title: title,
    script: [
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
            //body: true,
            integrity: "sha512-CNgIRecGo7nphbeZ04Sc13ka07paqdeTu0WR1IM4kNcpmBAUSHSQX0FslNhTDadL4O5SAGapGt4FodqL8My0mA==",
            crossorigin: "anonymous",
            referrerpolicy: "no-referrer"
        }
    ]
})
</script>

<style scoped>

</style>
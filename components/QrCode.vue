<template>
    <div class="mb-5 flex flex-row items-center">

        <div class="flex flex-col text-center w-3/6 px-2">
            <label class="mb-1">Size</label>

            <select v-model="size">
                <option value="100">100x100</option>
                <option value="200">200x200</option>
                <option value="300">300x300</option>
                <option value="400">400x400</option>
                <option value="500">500x500</option>
                <option value="600">600x600</option>
                <option value="700">700x700</option>
            </select>
        </div>

        <div class="flex flex-col px-2 w-3/6">
            <label class="mb-1">Url</label>

            <input v-model="url" type="text" placeholder="Insert url for qr generation"
                   @keyup.enter="generateQr">
        </div>

    </div>

    <div class="flex items-center justify-between mb-5">
        <div id="qrcode" ref="qrImage"></div>
    </div>

    <div class="flex items-center justify-between mb-5" v-show="qrCode">
        <div>
            <button class="btn btn-red" @click="clearQr">Clear qr code</button>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";

const url = ref('')
const size = ref(200)
const qrCode = ref('');
const qrImage = ref(null)

function generateQr() {
    qrImage.value.innerHTML = '';

    qrCode.value = new QRCode('qrcode', {
        text: url.value,
        width: size.value,
        height: size.value,
        colorDark: "#000000",
        colorLight: "#ffffff",
    });
}

function clearQr() {
    if (qrCode.value) {
        qrCode.value = null;
        qrImage.value.innerHTML = '';
    }
}

</script>

<style scoped>

</style>
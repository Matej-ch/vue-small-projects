<template>
    <div>
        <div class="component-header">
            <h2>QR code generator</h2>
        </div>

        <div class="px-4 py-5">
            <div class="flex flex-col text-white">

                <div class="mb-5">
                    <div class="flex flex-col px-2 w-full">
                        <label class="mb-1">Url</label>

                        <input v-model="url" type="text" placeholder="Insert url for qr generation"
                               @keyup.enter="generateQr">
                    </div>
                </div>

                <div class="flex items-center justify-between mb-5">
                    <div id="qrcode"></div>
                </div>

                <div class="flex items-center justify-between mb-5" v-show="qrCode">
                    <div>
                        <button class="btn btn-red" @click="clearQr">Clear qr code</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";

const url = ref('')
const qrCode = ref('');

function generateQr() {
    qrCode.value = new QRCode('qrcode', {
        text: url.value,
        width: 260,
        height: 260,
        colorDark: "#000000",
        colorLight: "#ffffff",
    });
}

function clearQr() {
    if (qrCode.value) {
        qrCode.value.clear();
    }
}

</script>

<style scoped>

</style>
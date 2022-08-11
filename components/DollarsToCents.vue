<template>
    <div>
        <div class="component-header">
            <h2>Dollars to cents</h2>
        </div>

        <div class="px-4 py-5">
            <div class="flex flex-col text-white">
                <div class="flex items-end mb-5">
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1" for="weight-kilograms">Dollars</label>

                        <input v-model="dollars" @keyup="convert" type="number" step="0.01" min="0"
                               class="py-3 px-5 rounded focus:outline-none text-slate-600 focus:text-slate-600"
                        >
                    </div>

                    <div class="">
                        <button @click="convert"
                                class="btn btn-orange">
                            Convert
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-between mb-3 w-full flex-col">
                <div class="flex flex-row flex text-right px-2 font-bold text-xl gap-0.5">
                    You have {{pennies + nickel + dime + quarter}} coins:
                    {{quarter}} <span class="decoration-slate-600 decoration-2 underline">quarters</span>,
                    {{dime}} <span class="decoration-neutral-500 decoration-2 underline"> dimes</span>,
                    {{nickel}} <span class="decoration-yellow-400 decoration-2 underline"> nickel</span> and
                    {{pennies}} <span class="decoration-amber-600 decoration-2 underline"> pennies</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const dollars = ref(1);

const pennies = ref(0);
const nickel = ref(0);
const dime = ref(0);
const quarter = ref(0);

onMounted(() => {
    convert();
})

function convert() {

    let balance = formatDollarsToCents(dollars.value);

    quarter.value = Math.floor(balance / 25);
    balance = balance % 25;

    dime.value = Math.floor(balance / 10);
    balance = balance % 10;

    nickel.value = Math.floor(balance / 5);
    balance = balance % 5;

    pennies.value = Math.floor(balance);

}

function formatDollarsToCents(value) {
    value = (value + '').replace(/[^\d.-]/g, '');
    if (value && value.includes('.')) {
        value = value.substring(0, value.indexOf('.') + 3);
    }

    return value ? Math.round(parseFloat(value) * 100) : 0;
}
</script>

<style scoped>

</style>
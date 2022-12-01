<template>
    <div class="flex flex-col text-white">
        Base url {{baseUrl}}
    </div>

    <div>
        <label for="table-select">Table</label>
        <select v-model="table" id="table-select">
            <option v-for="table in tables" :value=table.name>
                {{table.label}}
            </option>
        </select>
    </div>

    <div class="flex flex-col my-2">
        <button @click="loadNasaData"
                class="btn btn-green">
            Load data from nasa
        </button>
    </div>

    <div class="flex flex-col my-2">
        <div v-for="planet in planetData">
            {{planet}}
        </div>
    </div>

</template>

<script setup>

import {onMounted, ref} from "vue";

const baseUrl = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?';

const table = ref('cumulative');

const planetData = ref([]);

const tables = [
    {name: 'cumulative', label: 'Cumulative', description: 'Kepler Objects of Interest'},
    {name: 'q1_q17_dr25_sup_koi', label: 'Q1 through Q17 DR25 Supplemental', description: 'Kepler Objects of Interest'},
    {name: 'q1_q17_dr25_koi', label: 'Q1 through Q17 DR25 KOI', description: 'Kepler Objects of Interest'},
    {name: 'q1_q17_dr24_koi', label: 'Q1 through Q17 DR24 KOI', description: 'Kepler Objects of Interest'},
    {name: 'q1_q16_koi', label: 'Q1 through Q16 KOI', description: 'Kepler Objects of Interest'},
    {name: 'q1_q12_koi', label: 'Q1 through Q12 KOI', description: 'Kepler Objects of Interest'},
    {name: 'q1_q8_koi', label: 'Q1 through Q8 KOI', description: 'Kepler Objects of Interest'},
    {name: 'q1_q6_koi', label: 'Q1 through Q6 KOI', description: 'Kepler Objects of Interest'},
    {name: 'q1_q17_dr25_tce', label: 'Q1 through Q17 DR25 TCE', description: 'Threshold-Crossing Events'},
    {name: 'q1_q17_dr24_tce', label: 'Q1 through Q17 DR24 TCE', description: 'Threshold-Crossing Events'},
    {name: 'q1_q16_tce', label: 'Q1 through Q16 TCE', description: 'Threshold-Crossing Events'},
    {name: 'q1_q12_tce', label: 'Q1 through Q12 TCE', description: 'Threshold-Crossing Events'},
    {name: 'keplerstellar', label: 'Q1 through Q12 TCE', description: 'Kepler Stellar Table'},
    {
        name: 'q1_q17_dr25_supp_stellar',
        label: 'Q1 through Q17 DR 25 Supplemental Stellar',
        description: 'Kepler Supplemental Stellar Table '
    },
    {name: 'q1_q17_dr25_stellar', label: 'Q1 through Q17 DR 25 Stellar', description: 'Kepler Stellar Table'},
    {name: 'q1_q17_dr24_stellar', label: 'Q1 through Q17 DR 24 Stellar', description: 'Kepler Stellar Table'},
    {name: 'q1_q16_stellar', label: 'Q1 through Q16 Stellar', description: 'Kepler Stellar Table'},
    {name: 'q1_q12_stellar', label: 'Q1 through Q12 Stellar', description: 'Kepler Stellar Table'},
    {name: 'keplertimeseries', label: 'Kepler Time Series', description: 'Kepler Time Series Table'},
];

function loadNasaData() {

    let url = `${baseUrl}table=${table.value}&where=koi_disposition%20like%20'CANDIDATE'%20and%20koi_period>300%20and%20koi_prad<2&format=json`;

    console.log(url);

    fetch(url, {method: 'GET'})
        .then(response => response.json())
        .then(data => {
            planetData.value = data;
        }).catch(error => console.error('error in loading nasa data', error));

}
</script>

<style scoped>

</style>
<template>
    <h2 class="text-center text-xl">Enter a guess between 0 and 100</h2>
    <input type="number" step="1" min="0" max="100" v-model="guess" placeholder="Enter a number"
           @keyup.enter="checkNumber()"/>
    <div class="flex flex-row justify-center gap-4 mt-4">
        <button class="btn btn-green disabled:opacity-75 disabled:pointer-events-none" @click="checkNumber()"
                :disabled="isGameOver === true">Submit
        </button>
        <button class="btn btn-green disabled:opacity-75 disabled:pointer-events-none" @click="newGame()"
                :disabled="isGameOver === false">
            Start Game
        </button>
    </div>
    <div class="text-center mt-4 pt-2 mb-2" v-show="message">{{message}}</div>
    <div class="text-center my-2" v-show="previousGuesses.length !== 0">Your guesses: {{previousGuesses.join(', ')}}
    </div>
</template>

<script setup>

import {ref, onMounted} from "vue";

const previousGuesses = ref([]);

const guess = ref('');

const message = ref('');

const correctNumber = ref(0)

const isGameOver = ref(false);

onMounted(() => {
    correctNumber.value = Math.floor(Math.random() * 100);
})

function checkNumber() {

    previousGuesses.value.push(guess.value);

    if (parseInt(guess.value) === parseInt(correctNumber.value)) {

        message.value = 'You won';
        isGameOver.value = true;
        return;
    }

    if (parseInt(guess.value) < parseInt(correctNumber.value)) {

        message.value = 'Your guess is too low';
        return;
    }

    message.value = 'Your guess is too high';
}

function newGame() {
    isGameOver.value = false;
    previousGuesses.value = [];
    guess.value = '';
    message.value = '';
    correctNumber.value = Math.random() * 100;
}

</script>

<style scoped>

</style>
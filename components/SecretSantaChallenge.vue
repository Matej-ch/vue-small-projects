<template>
    <h1 class="text-center">Welcome to your Secret Santa Clues</h1>
    <div class="w-full h-full flex justify-center items-center p-10">
        <div class="shadow-md relative py-5 rounded-lg px-36">

            <div class="font-bold my-6" v-show="!itsGuessTime">
                {{clues[currentClue].text}}
            </div>

            <div v-show="message.length > 0">
                {{message}}
            </div>

            <div v-show="itsGuessTime">
                <input v-model="userAnswer" type="text" placeholder="Place your guess">
            </div>

            <div>
                <button v-if="!itsGuessTime" @click="nextClue" class="btn btn-green">Next clue</button>
                <button v-else @click="guess" class="btn btn-green">Guess</button>
            </div>

        </div>
    </div>
</template>

<script setup>

const clues = ref([
    {'text': 'I am a human'},
    {'text': 'I code in my free time'},
    {'text': 'Who am i'}])

const currentClue = ref(0)
const userAnswer = ref('')
const correctAnswer = 'Matt'
const itsGuessTime = ref(false);
const message = ref('');

function nextClue() {
    if (currentClue.value === (clues.value.length - 1)) {
        itsGuessTime.value = true;
        return;
    }
    currentClue.value++;
}

function guess() {
    if (userAnswer.value.toLowerCase() === correctAnswer.toLowerCase()) {
        message.value = 'Correct answer'
    }
}

</script>

<style scoped>

</style>
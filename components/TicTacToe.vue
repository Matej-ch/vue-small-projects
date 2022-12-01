<template>
    <div class="board grid grid-cols-3 gap-0 mx-auto mb-4">
        <div class="h-16 w-16 border flex justify-center items-center font-bold cursor-pointer"
             @click="setShape(index)"
             v-for="(cell,index) in board">
            {{cell === 1 ? '❌' : (cell === 2 ? '⭕' : '')}}
        </div>
    </div>

    <div class="text-center" v-show="currentPlayer && !winner">
        {{currentPlayer === 1 ? 'It\'s ❌\'s turn' : 'It\'s ⭕\'s turn'}}
    </div>

    <div class="text-center" v-show="winner">
        {{winner === 1 ? '❌ has won' : (winner === 2 ? '⭕ has won' : 'It\'s draw')}}
    </div>

    <div class="text-center mt-4" v-show="winner">
        <button @click="restartGame" class="btn btn-green">Play again</button>
    </div>
</template>

<script setup>
import {ref} from "vue";

const currentPlayer = ref(null);

const winner = ref(null);

const board = ref(new Array(9).fill(0));

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function restartGame() {
    board.value = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    winner.value = null;
    currentPlayer.value = null;
}

function checkState(currentPlayer) {
    if (checkWin(currentPlayer)) {
        winner.value = currentPlayer;
        currentPlayer = null;
    } else if (isDraw()) {
        winner.value = 3;
        currentPlayer = null;
    }
}

function setShape(index) {
    if (board.value[index] !== 0) {
        return;
    }

    if (winner.value) {
        return;
    }

    if (!currentPlayer) {
        currentPlayer.value = 1;
    }

    if (currentPlayer.value === 1) {
        board.value[index] = 1;
        checkState(currentPlayer.value);
        currentPlayer.value = 2;
    } else {
        board.value[index] = 2;
        checkState(currentPlayer.value);
        currentPlayer.value = 1;
    }
}

function isDraw() {
    return board.value.every(cell => {
        return cell === 1 || cell === 2;
    })
}

function checkWin(currentPlayer) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return board.value[index] === currentPlayer;
        })
    })
}

</script>

<style scoped>
.board {
    max-width: 12rem;
    background-color: rgba(163, 165, 168, 0.5);
}
</style>
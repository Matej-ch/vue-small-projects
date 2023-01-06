<template>

    <input type="text" autocomplete="off" placeholder="Type & hit enter" v-model="chipInput"
           @keydown.enter="handleEnter">

    <div class="chips-display">
        <span v-for="chip in chips" class="chip">{{chip}} <span class="remove"
                                                                @click="handleRemove(chip)">x</span></span>
    </div>
</template>

<script setup>
const chipInput = ref('');
const chips = ref([])

const handleEnter = () => {
    chips.value.push(chipInput.value);
    chipInput.value = '';
}

const handleRemove = (chip) => {

    chips.value = chips.value.filter(ch => ch !== chip)
}

</script>

<style scoped>
.chips-display {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 1rem 0;
}

.chip {
    padding: 0.5em 0.75em;
    background-color: #102e46;
    border: 1px solid #041e33;
    border-radius: 8px;
}

.chip > span {
    margin-left: 0.5rem;
    color: red;
    font-weight: bold;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
}
</style>
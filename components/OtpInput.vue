<template>
    <div class="display"
         @keydown="handleKeyDown"
         @keyup="handleKeyUp"
         @input="handleInput"
         @paste="handlePaste">
        <input v-for="i in length" type="text" v-model="otpFields[i]" class="slot">
    </div>
</template>

<script setup>
const props = defineProps({
    length: Number
})

const otpFields = ref([])

const isDigit = value => {
    return /^\d+$/.test(value);
}

const handleKeyDown = (e) => {
    const target = e.target;
    if (isDigit(e.key)) {
        target.value = '';
        return;
    }

    if (e.key === 'ArrowLeft') {
        target.previousElementSibling?.focus();
        e.preventDefault();
        e.stopPropagation();
        return;
    }

    if (e.key === 'ArrowRight') {
        target.nextElementSibling?.focus();
        return;
    }
}

const handleKeyUp = (e) => {
    const target = e.target;
    if (e.key === 'Backspace' || e.key === 'Delete') {
        target.value = '';
        target.previousElementSibling?.focus();
        return;
    }
}

const handleInput = (e) => {
    const target = e.target;

    if (!isDigit(target.value)) {
        target.value = '';
        return;
    }

    if (target.value !== '') {
        const next = target.nextElementSibling;
        if (next) {
            next.focus();
        } else if (target.parentElement.firstChild.value === '') {
            target.parentElement.firstChild.focus();
        } else {
            target.blur();
        }
    }
}

const handlePaste = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData('Text');

    if (typeof pastedData === 'string' && pastedData.length === props.length && isDigit(pastedData)) {
        otpFields.forEach((field, i) => {
            field.value = pastedData.charAt(i);
        });
    }
}

</script>

<style scoped>
.display {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    font-size: 3rem;
}


.slot {
    width: 3.25rem;
    margin: 0;
    color: black;
    font-size: 2rem;
    text-align: center;
    border: none;
    border-bottom: 1px solid grey;
    border-radius: 4px;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0.5rem 0.75rem;
}
</style>
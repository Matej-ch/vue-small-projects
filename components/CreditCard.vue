<template>
    <form class="credit-card">
        <div class="front">
            <div class="card-data-row">
                <div class="brand-name">WDS Bank</div>
                <img :src="logUrl" class="logo">
            </div>

            <fieldset class="form-group">
                <legend>Card number</legend>
                <label for="cc-1">Card number</label>
                <div class="cc-inputs horizontal-input-stack">
                    <input type="tel" maxlength="4"
                           aria-label="Credit card first four digits" id="cc-1"
                           required
                           pattern="[0-9]{4}"
                           ref="firstCardNumberInput"
                           @keydown="handleCardNumber" @paste="handlePaste">
                    <input type="tel" maxlength="4"
                           aria-label="Credit card second four digits"
                           required
                           pattern="[0-9]{4}"
                           @keydown="handleCardNumber" @paste="handlePaste">
                    <input type="tel" maxlength="4"
                           aria-label="Credit card third four digits"
                           required
                           pattern="[0-9]{4}"
                           @keydown="handleCardNumber" @paste="handlePaste">
                    <input type="tel" maxlength="4"
                           aria-label="Credit card fourth four digits"
                           required
                           pattern="[0-9]{4}"
                           @keydown="handleCardNumber" @paste="handlePaste">
                </div>
            </fieldset>
            <div class="input-row">
                <div class="form-group name-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" required>
                </div>
                <fieldset class="form-group">
                    <legend>Expiration</legend>
                    <label for="expiration-month">Expiration</label>
                    <div class="horizontal-input-stack">
                        <select id="expiration-month" aria-label="Expiration Month" required>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                        <select v-model="year" id="expiration-year" aria-label="Expiration Year" required>
                            <option v-for="year in years">{{year}}</option>

                        </select>
                    </div>
                </fieldset>
            </div>

        </div>
        <div class="back">
            <div class="stripe"></div>
            <div class="form-group cvc-group">
                <label for="cvc">CVC</label>
                <input class="cvc-input" type="tel" maxlength="3" id="cvc" required>
            </div>
        </div>
    </form>
</template>

<script setup>
import VisaUrl from '~/assets/img/visa.svg?url'
import MasterCardUrl from '~/assets/img/mastercard.svg?url'

import {ref, onMounted} from "vue";

const year = ref('')
const years = ref([])
const logUrl = ref(VisaUrl);
const firstCardNumberInput = ref(null)

onMounted(() => {
    const currentYear = new Date().getFullYear();

    year.value = currentYear;
    for (let i = currentYear; i < currentYear + 10; i++) {
        years.value.push(i);
    }
})

function handlePaste(event) {
    const input = event.target;
    const data = event.clipboardData.getData('text');
    if (!data.match(/^[0-9]+$/)) {
        return event.preventDefault();
    }

    event.preventDefault();
    onInputChange(input, data);
}

function handleCardNumber(event) {
    const input = event.target;
    const key = event.key;

    switch (key) {
        case 'ArrowLeft': {
            if (input.selectionStart === 0 && input.selectionEnd === 0) {
                const prev = input.previousElementSibling;
                prev.focus();
                prev.selectionStart = prev.value.length - 1;
                prev.selectionEnd = prev.value.length - 1;
                event.preventDefault();
            }
            break;
        }
        case 'ArrowRight': {
            if (input.selectionStart === input.value.length && input.selectionEnd === input.value.length) {
                const next = input.nextElementSibling;
                next.focus();
                next.selectionStart = 1;
                next.selectionEnd = 1;
                event.preventDefault();
            }
            break;
        }
        case "Delete": {
            if (input.selectionStart === input.value.length && input.selectionEnd === input.value.length) {
                const next = input.nextElementSibling;
                next.value = next.value.substring(1, next.value.length);
                next.focus();
                next.selectionStart = 1;
                next.selectionEnd = 1;
                event.preventDefault();
            }
            break;
        }
        case "Backspace": {
            if (input.selectionStart === 0 && input.selectionEnd === 0) {
                const prev = input.previousElementSibling;
                prev.value = prev.value.substring(0, prev.value.length - 1)
                prev.focus();
                prev.selectionStart = prev.value.length - 1;
                prev.selectionEnd = prev.value.length - 1;
                event.preventDefault();
            }
            break;
        }
        default : {
            if (event.ctrlKey || event.altKey) {
                return;
            }

            if (key.length > 1) {
                return;
            }

            if (key.match(/^[^0-9]$/)) {
                return event.preventDefault();
            }

            event.preventDefault();
            onInputChange(input, key)
        }
    }
}

function onInputChange(input, newValue) {
    const start = input.selectionStart;
    const end = input.selectionEnd;

    if (firstCardNumberInput.value.value.startsWith('5')) {
        logUrl.value = MasterCardUrl;
    }
    if (firstCardNumberInput.value.value.startsWith('4')) {
        logUrl.value = VisaUrl;
    }

    updateInputValue(input, newValue, start, end);
    focusInput(input, newValue.length + start);
}

function updateInputValue(input, extraValue, start = 0, end = 0) {
    const newValue = `${input.value.substring(0, start)}${extraValue}${input.value.substring(end, 4)}`;
    input.value = newValue.substring(0, 4)
    if (newValue > 4) {
        const next = input.nextElementSibling;
        if (next == null) {
            return;
        }
        updateInputValue(next, newValue.substring(4))
    }
}

function focusInput(input, dataLength) {
    let addedChars = dataLength;
    let currentInput = input;
    while (addedChars > 4 && currentInput.nextElementSibling != null) {
        addedChars -= 4;
        currentInput = currentInput.nextElementSibling;
    }
    if (addedChars > 4) {
        addedChars = 4;
    }
    currentInput.focus();
    currentInput.selectionStart = addedChars
    currentInput.selectionEnd = addedChars;
}

</script>

<style scoped>
.credit-card {
    color: white;
    font-family: Arial, serif;
    position: relative;
}

.credit-card .front, .credit-card .back {
    background-color: hsl(200, 80%, 30%);
    border: 1px solid hsl(200, 80%, 10%);
    border-radius: 0.5rem;
    width: 325px;
    height: 175px;
    padding: 0.75rem 1rem 1.25rem 1rem;
}

.credit-card .front {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 1;
    overflow: hidden;
    position: relative;
}

.credit-card .card-data-row {
    display: flex;
    margin-bottom: auto;
}

.credit-card .logo {
    width: 50px;
    height: 40px;
    flex-grow: 0;
}

.credit-card .brand-name {
    flex-grow: 1;
    font-size: 1.25rem;
    font-weight: bold;
}

.credit-card .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.credit-card fieldset {
    border: none;
    padding: 0;
    margin: 0;
}

.credit-card fieldset legend {
    visibility: hidden;
    height: 0;
    width: 0;
    position: absolute;
    top: -200vh;
}

.credit-card .horizontal-input-stack {
    display: flex;
    gap: 0.5rem;
}

.credit-card .cc-inputs input {
    width: 4ch;
    font-family: monospace;
    padding: initial;
}

.credit-card input, .credit-card select {
    padding: .025em 0.25em;
    border: none;
    border-radius: 0.25em;
    appearance: none;
    width: initial;
    line-height: unset;
}

.credit-card label {
    font-size: 0.65rem;
    text-transform: uppercase;
}

.credit-card .input-row {
    display: flex;
    gap: 2rem;
}

.credit-card .name-group {
    flex-grow: 1;
}

.credit-card .front::before {
    content: "";
    position: absolute;
    height: 400px;
    width: 400px;
    border-radius: 100%;
    background-color: hsl(0, 0%, 100%, 0.15);
    top: -250px;
    left: -150px;
    z-index: -1;
}

.credit-card .front::after {
    content: "";
    position: absolute;
    height: 600px;
    width: 600px;
    border-radius: 100%;
    background-color: hsl(0, 0%, 100%, 0.075);
    bottom: -475px;
    left: -150px;
    z-index: -1;
}

.credit-card .back {
    position: absolute;
    top: 2rem;
    left: 4.25rem;
}

.credit-card .stripe {
    background-color: hsl(200, 80%, 10%);
    height: 35px;
    position: absolute;
    left: 0;
    right: 0;
    top: 1.5rem;
}

.credit-card .cvc-group {
    position: absolute;
    bottom: 3.25rem;
    right: 0.5rem;
}

.credit-card .cvc-input {
    width: 4ch;
    font-family: monospace;
    padding: initial;
}
</style>
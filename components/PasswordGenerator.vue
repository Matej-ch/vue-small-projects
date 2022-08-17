<template>
    <div>
        <div class="component-header">
            <h2>Password generator</h2>
        </div>

        <div class="px-4 py-5">
            <div class="flex flex-col text-white">

                <div class="flex items-end justify-between mb-5">
                    <div class="flex flex-col text-center w-3/6 px-2">
                        <label class="mb-1">Password Length</label>

                        <input v-model="passwordLength"
                               type="number"
                               step="1"
                               min="1">
                    </div>

                    <div class="flex flex-col text-center w-3/6 px-2">
                        <button @click="generate"
                                class="btn btn-red">
                            Generate
                        </button>
                    </div>
                </div>


                <div class="flex items-end justify-between mb-5">
                    <div class="flex flex-col px-2 justify-start">
                        <label class="mb-1 flex justify-between">Include uppercase letters:

                            <input v-model="hasUpperCase" type="checkbox">
                        </label>

                        <label class="mb-1 flex justify-between">Include lowercase letters:

                            <input v-model="hasLowerCase" type="checkbox">
                        </label>

                        <label class="mb-1 flex justify-between">Include numbers:

                            <input v-model="hasNumbers" type="checkbox">
                        </label>

                        <label class="mb-1 flex justify-between">Include symbols:

                            <input v-model="hasSymbols" type="checkbox">
                        </label>
                    </div>
                </div>

                <div v-show="password.length" class="w-full flex flex-col">
                    <span>Password Strength</span>
                    <progress id="strength" max="100" :value=strength> {{strength}}%</progress>
                </div>

                <div v-show="password.length"
                     class="bg-blue-900 text-white rounded-sm px-4 py-6 font-bold flex flex-col relative">
                    <div>{{password}}</div>
                    <div class="absolute right-4 top-2">
                        <ClipboardBtn :text="password"></ClipboardBtn>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script setup>
import {ref} from "vue";
import ClipboardBtn from "./ClipboardBtn";

const password = ref('')
const passwordLength = ref(1)

const hasUpperCase = ref(true)
const hasLowerCase = ref(false)
const hasNumbers = ref(false)
const hasSymbols = ref(false)
const strength = ref(0)

function generate() {
    if (!hasUpperCase.value && !hasLowerCase.value && !hasNumbers.value && !hasSymbols.value) {
        alert('At least one checkbox must be set');
        return;
    }

    const typesCount = hasUpperCase.value + hasLowerCase.value + hasNumbers.value + hasSymbols.value;
    let typesArr = [];
    let generatedPassword = '';
    if (hasUpperCase.value) {
        typesArr.push('upper');
    }
    if (hasLowerCase.value) {
        typesArr.push('lower');
    }
    if (hasNumbers.value) {
        typesArr.push('numbers');
    }
    if (hasSymbols.value) {
        typesArr.push('symbols');
    }

    const functionLookup = {
        lower: getRandomLower,
        upper: getRandomUpper,
        numbers: getRandomNumber,
        symbols: getRandomSymbol,
    };

    for (let i = 0; i < passwordLength.value; i += typesCount) {
        typesArr.forEach(funcName => {
            generatedPassword += functionLookup[funcName]();
        })
    }

    password.value = generatedPassword.slice(0, passwordLength.value);
    checkStrength(password.value);
}

function getRandomLower() {
    //26 letters in alphabet + starting position, Position of `a` is 97
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    //26 letters in alphabet + starting position, Position of `A` is 65
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.-\\;`~'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function checkStrength(password) {
    let localStrength = 0;

    //If password contains both lower and uppercase characters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        localStrength += 1;
    }
    //If it has numbers and characters
    if (password.match(/([0-9])/)) {
        localStrength += 1;
    }
    //If it has one special character
    if (password.match(/([!@#$%^&*(){}\[\]=<>,.-;`~])/)) {
        localStrength += 1;
    }
    //If password is greater than 7
    if (password.length > 7) {
        localStrength += 1;
    }

    // If value is less than 2
    if (localStrength < 2) {
        strength.value = 10;
    } else if (localStrength === 3) {

        strength.value = 60;
    } else if (localStrength === 4) {
        strength.value = 100;
    }
}
</script>

<style scoped>

</style>
<template>
    <form class="credit-card">
        <div class="front">
            <div class="card-data-row">
                <div class="brand-name">WDS Bank</div>
                <img :src="VisaUrl" class="logo">
            </div>

            <fieldset class="form-group">
                <legend>Card number</legend>
                <label for="cc-1">Card number</label>
                <div class="cc-inputs horizontal-input-stack">
                    <input type="tel" maxlength="4"
                           aria-label="Credit card first four digits" id="cc-1"
                           required
                           pattern="[0-9]{4}">
                    <input type="tel" maxlength="4"
                           aria-label="Credit card second four digits"
                           required
                           pattern="[0-9]{4}">
                    <input type="tel" maxlength="4"
                           aria-label="Credit card third four digits"
                           required
                           pattern="[0-9]{4}">
                    <input type="tel" maxlength="4"
                           aria-label="Credit card fourth four digits"
                           required
                           pattern="[0-9]{4}">
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
                        <select id="expiration-year" aria-label="Expiration Year" required>
                            <option>2022</option>
                            <option>2023</option>

                        </select>
                    </div>
                </fieldset>
            </div>

        </div>
        <div class="back">
            <div class="stripe"></div>
            <div class="from-group cvc-group">
                <label for="cvc">CVC</label>
                <input type="tel" maxlength="3" id="cvc" required>
            </div>
        </div>
    </form>
</template>

<script setup>
import VisaUrl from '~/assets/img/visa.svg?url'
</script>

<style scoped>
.credit-card {
    color: white;
    font-family: Arial, serif;
    position: relative;
}

.credit-card .front, .credit-card .back {
    background-color: hsl(200, 80%, 30%);
}
</style>
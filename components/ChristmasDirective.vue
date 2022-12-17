<template>
    <div class="w-full h-full flex flex-col justify-center items-center text-center gap-12">
        <p v-christmas>Red + Green (default)</p>
        <p v-christmas:red>Red only</p>
        <p v-christmas:green>Green only</p>
        <p v-christmas="5">Slower Animation</p>
    </div>
</template>

<script setup>

const vChristmas = {
    mounted: (el, binding) => {
        console.log(binding)
        el.classList.add('christmas-text');

        if (binding.arg !== undefined) {
            el.classList.add(`${binding.arg}`);
        } else {
            el.classList.add(`red-green`);
        }

        if (binding.value !== undefined) {
            el.style.animationDuration = `${binding.value}s`;
        }
    }
}
</script>

<style scoped>
.red-green {
    background: rgb(21, 202, 130);
    background: linear-gradient(90deg, rgba(21, 202, 130, 1) 0%, rgba(255, 123, 154, 1) 100%);
}

.green {
    background: rgb(116, 214, 128);
    background: linear-gradient(90deg, rgba(116, 214, 128, 1) 0%, rgba(55, 139, 41, 1) 100%);
}

.red {
    background: rgb(255, 0, 0);
    background: linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 120, 120, 1) 100%);
}

.christmas-text {
    text-transform: uppercase;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s ease infinite;
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem;
    line-height: 3.5rem;
}

@keyframes textclip {
    to {
        background-position: 200% center;
    }
}
</style>
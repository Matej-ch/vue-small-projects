<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>

<style>
.layout-enter-active, .layout-leave-active {
    transition: all 0.3s;
}

.layout-enter-from, .layout-leave-to {
    opacity: 0;
    filter: blur(0.75rem);
}

.slide-right-enter-active, .slide-right-leave-active {
    transition: all 0.2s;
}

.slide-right-enter-from {
    opacity: 0;
    transform: translate(-50px, 0);
}

.slide-right-leave-to {
    opacity: 0;
    transform: translate(50px, 0);
}

</style>
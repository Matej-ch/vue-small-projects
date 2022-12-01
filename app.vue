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

.page-enter-active, .page-leave-active {
    transition: all 0.3s;
}

.page-enter-from, .page-leave-to {
    opacity: 0;
    filter: blur(0.75rem);
}
</style>
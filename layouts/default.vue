<template>
    <div class="flex flex-row">
        <Navbar/>
        <slot/>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    components: {Navbar}
}
</script>

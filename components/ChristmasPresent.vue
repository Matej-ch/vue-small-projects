<template>
    <div>
        <TallRedGift class="w-32" v-if="name === 'tall-red-gift'"/>
        <SmallRedGift class="w-32" v-else-if="name === 'small-red-gift'"/>
        <BlueGift class="w-32" v-else-if="name === 'blue-gift'"/>
    </div>
</template>

<!-- You shouldn't need to update this file -->
<script setup>
import TallRedGift from '~/assets/img/tall-red-gift.svg?component'
import BlueGift from '~/assets/img/blue-gift.svg?component'
import SmallRedGift from '~/assets/img/small-red-gift.svg?component'

const props = defineProps({
    name: String,
})
</script>

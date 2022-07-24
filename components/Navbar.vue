<template>
  <nav class="navigation">
    <div class="link">
      <nuxt-link :to="{name: 'index'}">
        Home
      </nuxt-link>
    </div>
    <div class="link">
      <nuxt-link :to="{name: 'border'}">
        Border radius previewer
      </nuxt-link>
    </div>

    <div class="link">
      <nuxt-link :to="{name: 'bindec'}">
        Bin 2 Dec
      </nuxt-link>
    </div>

    <div class="link">
      <nuxt-link :to="{name: 'freq'}">
        Word frequency
      </nuxt-link>
    </div>

    <div class="link">
      <nuxt-link :to="{name: 'truefalse'}">
        True or False
      </nuxt-link>
    </div>

    <div class="link">
      <nuxt-link :to="{name: 'github'}">
        Github status
      </nuxt-link>
    </div>

    <div class="link">
      <nuxt-link :to="{name: 'calc'}">
        Calculator
      </nuxt-link>
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped>

</style>

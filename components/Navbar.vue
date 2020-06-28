<template>
  <nav>
    <div>
      <nuxt-link :to="{name: 'index'}">
        Home
      </nuxt-link>
    </div>
    <div>
      <nuxt-link :to="{name: 'border'}">
        Border radius previewer
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>

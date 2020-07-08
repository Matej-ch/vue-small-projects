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

    <div>
      <nuxt-link :to="{name: 'bindec'}">
        Bin 2 Dec
      </nuxt-link>
    </div>

    <div>
      <nuxt-link :to="{name: 'freq'}">
        Word frequency
      </nuxt-link>
    </div>

    <div>
      <nuxt-link :to="{name: 'truefalse'}">
        True or False
      </nuxt-link>
    </div>

    <div>
      <nuxt-link :to="{name: 'github'}">
        Github status
      </nuxt-link>
    </div>

    <div>
      <nuxt-link :to="{name: 'calc'}">
        Calculator
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
import 'material-icons/iconfont/material-icons.css'

export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>

<template>
  <div class="center grid">
    Calculator

    <input type="text" value="">

    <button @click="0">
      0
    </button>
    <button @click="1">
      1
    </button>
    <button @click="2">
      2
    </button>
    <button @click="3">
      3
    </button>
    <button @click="4">
      4
    </button>
    <button @click="5">
      5
    </button>
    <button @click="6">
      6
    </button>
    <button @click="7">
      7
    </button>
    <button @click="8">
      8
    </button>
    <button @click="9">
      9
    </button>
    <button>
      +
    </button>
    <button>
      -
    </button>
    <button>
      *
    </button>
    <button>
      /
    </button>
    <button>C</button>
    <button>AC</button>
  </div>
</template>

<script>
export default {
  name: 'Calculator'
}
</script>

<style scoped>

</style>

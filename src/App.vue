<template>
  <div id="app overflow-hidden">
    <Main />
  </div>
</template>

<script>
import Main from './views/Home'

export default {
  components: {
    Main,
  },
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

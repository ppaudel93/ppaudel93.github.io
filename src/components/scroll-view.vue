<template>
  <div class="overflow-y-scroll">
    <ExpressBoilerplate class="h-screen scroll-child" />
  </div>
</template>

<script>
export default {
  components: {
    ExpressBoilerplate: () => import('./scroll-components/express-boilerplate'),
  },
}
</script>

<style lang="sass">
.scroll-child
  scroll-snap-align: start
  transition: opacity .5s .25s ease-out
.scroll-child.is-visible
  opacity: 1
</style>

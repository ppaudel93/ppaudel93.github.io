<template>
  <div>
    <transition
      name="scroll-component-transition"
      :enter-active-class="enterClass"
      :leave-active-class="leaveClass"
    >
      <component :is="selectedComponent" />
    </transition>
  </div>
</template>

<script>
import Overview from './scroll-components/overview'
import ExpressBoilerplate from './scroll-components/express-boilerplate'

const COMPONENTS_TO_INDEX_MAPPER = {
  0: Overview,
  1: ExpressBoilerplate,
}

export default {
  components: {
    Overview,
    ExpressBoilerplate,
  },
  data() {
    return {
      count: 0,
      prevCount: 0,
      blockScroll: false,
    }
  },
  computed: {
    selectedComponent() {
      return COMPONENTS_TO_INDEX_MAPPER[this.count]
    },
    enterClass() {
      if (this.prevCount < this.count)
        return 'animate__animated animate__fadeInUp animate__faster'
      return 'animate__animated animate__fadeInDown animate__faster'
    },
    leaveClass() {
      if (this.prevCount > this.count)
        return 'animate__animated animate__fadeOutDown animate__faster'
      return 'animate__animated animate__fadeOutUp animate__faster'
    },
  },
  watch: {
    count(_newVal, oldVal) {
      this.prevCount = oldVal
    },
  },
  mounted() {
    window.addEventListener('wheel', this.handleScroll)
    window.addEventListener('keyup', this.handleKeyPress)
  },
  methods: {
    handleScroll(event) {
      if (this.blockScroll) {
        return
      }
      this.blockScroll = true
      setTimeout(this.enableScroll, 500)
      const direction = Math.max(
        -1,
        Math.min(1, event.wheelDeltaY || -event.detail),
      )
      if (direction > 0) {
        if (this.count === 0) return
        this.count = this.count - 1
        return
      }
      if (this.count === Object.keys(COMPONENTS_TO_INDEX_MAPPER).length - 1)
        return
      this.count = this.count + 1
    },
    enableScroll() {
      this.blockScroll = false
    },
    handleKeyPress({ key }) {
      if (!key.includes('Arrow')) return
      this[`handle${key}`]()
    },
    handleArrowUp() {
      if (this.count === 0) return
      this.count--
    },
    handleArrowDown() {
      if (this.count === Object.keys(COMPONENTS_TO_INDEX_MAPPER).length - 1)
        return
      this.count++
    },
    handleArrowLeft() {},
    handleArrowRight() {},
  },
}
</script>

<style></style>

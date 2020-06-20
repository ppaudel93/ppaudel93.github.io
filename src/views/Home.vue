<template>
  <div
    class="grid grid-cols-4 gap-0 h-screen font-abeezee overflow-hidden color-secondary"
  >
    <div class="col-span-1 background-black text-left p-3 pb-0">
      <h1 class="text-7xl">Hello,</h1>
      <h1 class="text-3xl">I am Prayog Paudel</h1>
      <h1 class="text-3xl">Mandikhatar, KTM</h1>
      <h1 class="text-3xl">+977-9840063248</h1>
      <fieldset
        class="border-solid border-2 border-rounded mt-5 pt-10 p-1 pb-5 border-color"
      >
        <legend class="border-solid border-2 ml-10 p-1 border-color">
          Skills
        </legend>
        <IconArray />
      </fieldset>
      <fieldset
        class="border-solid border-2 border-rounded mt-24 pt-10 p-1 pb-5 border-color"
      >
        <legend class="border-solid border-2 ml-10 p-1 border-color">
          Links
        </legend>
        <SocialMedias />
      </fieldset>
    </div>
    <div class="col-span-3 flex flex-column overflow-hidden background-white">
      <ScrollView class="scroll-container w-full" />
    </div>
  </div>
</template>

<script>
import IconArray from '../components/icons'
import SocialMedias from '../components/social-medias'
import ScrollView from '../components/scroll-view'

export default {
  name: 'Home',
  components: {
    IconArray,
    SocialMedias,
    ScrollView,
  },
}
</script>

<style lang="css">
.background-black {
  background-color: var(--secondary);
  color: var(--primary);
}
.border-color {
  color: var(--primary);
}
.border-rounded {
  border-radius: 1rem;
}
.scroll-container {
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
}
</style>

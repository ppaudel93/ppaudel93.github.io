<template>
  <div class="grid grid-cols-4 gap-0 h-screen font-abeezee overflow-hidden">
    <div class="col-span-1 background-black text-white text-left p-3 pb-0">
      <h1 class="text-7xl">Hello,</h1>
      <h1 class="text-3xl">I am Prayog Paudel</h1>
      <h1 class="text-3xl">Mandikhatar, KTM</h1>
      <h1 class="text-3xl">+977-9840063248</h1>
      <fieldset
        class="border-solid border-2 border-color border-rounded mt-5 pt-10 p-1 pb-5"
      >
        <legend class="border-solid border-2 border-color ml-10 p-1">
          Skills
        </legend>
        <IconArray />
      </fieldset>
      <fieldset
        class="border-solid border-2 border-color border-rounded mt-24 pt-10 p-1 pb-5"
      >
        <legend class="border-solid border-2 border-color ml-10 p-1">
          Links
        </legend>
        <SocialMedias />
      </fieldset>
    </div>
    <div class="col-span-3">
      <ScrollView />
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
  background-color: #020202;
}
.text-white {
  color: #fff8f8;
}
.border-color {
  color: #fff8f8;
}
.border-rounded {
  border-radius: 1rem;
}
</style>

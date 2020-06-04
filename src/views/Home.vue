<template>
  <div class="grid grid-cols-3 gap-0 h-screen font-abeezee">
    <div class="col-span-1 background-black text-white text-left p-10 pb-8">
      <h1 class="text-8xl">Hello,</h1>
      <h1 class="text-4xl">I am Prayog Paudel</h1>
      <h1 class="text-4xl">Mandikhatar, KTM</h1>
      <h1 class="text-4xl">+977-9840063248</h1>
      <IconArray class="pt-10" />
      <SocialMedias class="pt-20" />
    </div>
    <div class="col-span-2">
      asdasddfgdfgdfg
    </div>
  </div>
</template>

<script>
import IconArray from '../components/icons'
import SocialMedias from '../components/social-medias'

export default {
  name: 'Home',
  components: {
    IconArray,
    SocialMedias,
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
</style>

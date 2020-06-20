import Vue from 'vue'
import App from './App.vue'
import './assets/styles/main.css'
import 'animate.css'
import ScrollOut from 'scroll-out'

ScrollOut({})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

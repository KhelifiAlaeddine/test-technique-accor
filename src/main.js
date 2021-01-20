import Vue from 'vue'
import Card from '../components/card.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Card),
}).$mount('#app')

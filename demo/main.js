import Vue from 'vue'
import VC from '../src/index.js'
import App from './App.vue'

Vue.use(VC)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
/* eslint-enable no-new */

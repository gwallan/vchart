import bar from './bar.vue'
import 'c3/c3.css'

bar.install = function (vue) {
  Vue.conponent('v-bar', bar)
}

export default bar

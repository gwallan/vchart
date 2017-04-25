import area from '../line/line.vue'
import 'c3/c3.css'

area.install = function (vue) {
  Vue.conponent('v-area', area)
}

export default area

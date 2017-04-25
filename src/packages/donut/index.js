import donut from '../pie/pie.vue'
import 'c3/c3.css'

donut.install = function (vue) {
  Vue.conponent('v-donut', donut)
}

export default donut

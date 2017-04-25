import pie from './pie.vue'
import 'c3/c3.css'

pie.install = function (vue) {
  Vue.conponent(pie.name, pie)
}

export default pie

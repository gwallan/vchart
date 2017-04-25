import treemap from './treemap.vue'
import 'c3/c3.css'

treemap.install = function (vue) {
  Vue.conponent(treemap.name, treemap)
}

export default treemap

import map from './map.vue'
import 'c3/c3.css'

map.install = function (vue) {
  Vue.conponent(map.name, map)
}

export default map

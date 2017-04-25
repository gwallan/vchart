import radar from './radar.vue'
import 'c3/c3.css'

radar.install = function (vue) {
  Vue.conponent(radar.name, radar)
}

export default radar

import line from './line.vue'
import 'c3/c3.css'

line.install = function (vue) {
  Vue.conponent(line.name, line)
}

export default line

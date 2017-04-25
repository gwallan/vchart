import cloud from './cloud.vue'
import 'c3/c3.css'

cloud.install = function (vue) {
  Vue.conponent(cloud.name, cloud)
}

export default cloud

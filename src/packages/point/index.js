import point from './point.vue'

point.install = function (vue) {
  Vue.conponent(point.name, point)
}

export default point

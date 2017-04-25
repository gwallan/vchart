import x from './x.vue'

x.install = function (vue) {
  Vue.conponent(x.name, x)
}

export default x

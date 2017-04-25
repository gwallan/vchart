import tooltip from './tooltip.vue'

tooltip.install = function (vue) {
  Vue.conponent(tooltip.name, tooltip)
}

export default tooltip

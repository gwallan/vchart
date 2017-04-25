import regions from './regions.vue'

regions.install = function (vue) {
  Vue.conponent(regions.name, regions)
}

export default regions

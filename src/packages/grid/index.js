import grid from './grid.vue'

grid.install = function (vue) {
  Vue.conponent(grid.name, grid)
}

export default grid

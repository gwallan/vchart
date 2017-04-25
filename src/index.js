import x from './packages/x'
import y from './packages/y'
import y2 from './packages/y2'
import grid from './packages/grid'
import legend from './packages/legend'
import tooltip from './packages/tooltip'
import point from './packages/point'
import regions from './packages/regions'

import line from './packages/line'
import bar from './packages/bar'
import area from './packages/area'
import pie from './packages/pie'
import donut from './packages/donut'
import radar from './packages/radar'
import map from './packages/map'
import cloud from './packages/cloud'
import treemap from './packages/treemap'

const store = {
  x,
  y,
  y2,
  grid,
  legend,
  tooltip,
  point,
  regions,

  line,
  bar,
  area,
  pie,
  donut,
  radar,
  map,
  cloud,
  treemap
}
store.install = function (Vue) {
  Vue.component(x.name, x)
  Vue.component(y.name, y)
  Vue.component(y2.name, y2)
  Vue.component(grid.name, grid)
  Vue.component(legend.name, legend)
  Vue.component(tooltip.name, tooltip)
  Vue.component(point.name, point)
  Vue.component(regions.name, regions)

  Vue.component(line.name, line)
  Vue.component('v-bar', bar)
  Vue.component('v-area', area)

  Vue.component(pie.name, pie)
  Vue.component('v-donut', donut)

  Vue.component(radar.name, radar)
  Vue.component(map.name, map)
  Vue.component(cloud.name, cloud)
  Vue.component(treemap.name, treemap)
}
export default store

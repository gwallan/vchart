<template>
  <div>
    <v-area :data="data" :config="config" theme="my-chart">
      <v-x :config="x"></v-x>
      <v-y :config="y"></v-y>
      <!-- <v-y2 :config="y2"></v-y2> -->
      <v-tooltip :config="tooltip"></v-tooltip>
      <v-point :config="point"></v-point>
      <v-grid :config="grid"></v-grid>
      <v-legend :config="legend"></v-legend>
    </v-area>
  </div>
</template>

<script>
import areaConfig from '../chartConfig/area.js'
import xConfig from '../chartConfig/x.js'
import yConfig from '../chartConfig/y.js'
import y2Config from '../chartConfig/y2.js'
import tooltipConfig from '../chartConfig/tooltip.js'
import pointConfig from '../chartConfig/point.js'
import gridConfig from '../chartConfig/grid.js'
import legendConfig from '../chartConfig/legend.js'

export default {
  data () {
    return {
      config: areaConfig,
      x: xConfig,
      y: yConfig,
      y2: y2Config,
      tooltip: tooltipConfig,
      point: pointConfig,
      grid: gridConfig,
      legend: legendConfig,
      data: {
        'x': '时间',
        'rows': [
          ['时间', '魅蓝3S相对时间'],
          ['39', '181'],
          ['32', '99'],
          ['43', '211'],
          ['24', '190'],
          ['25', '123'],
          ['16', '160'],
          ['27', '432'],
          ['38', '145'],
          ['59', '235']
        ],
        type: 'area'
      }
    }
  },

  created () {

  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <v-donut :data="data" :config="config" theme="my-chart">
      <v-x :config="x"></v-x>
      <v-y :config="y"></v-y>
      <v-y2 :config="y2"></v-y2>
      <v-tooltip :config="tooltip"></v-tooltip>
      <v-point :config="point"></v-point>
      <v-grid :config="grid"></v-grid>
      <v-legend :config="legend"></v-legend>
    </v-donut>
  </div>
</template>

<script>
import donutConfig from '../chartConfig/donut.js'
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
      config: donutConfig,
      x: xConfig,
      y: yConfig,
      y2: y2Config,
      tooltip: tooltipConfig,
      point: pointConfig,
      grid: gridConfig,
      legend: legendConfig,
      data: {
        columns: [
          ['data1', 30],
          ['data2', 120]
        ],
        type: 'donut'
      }
    }
  },

  created () {

  }
}
</script>

<style scoped>

</style>

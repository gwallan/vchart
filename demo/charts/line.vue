<template>
  <div>
    <v-line :data="data" :config="config" theme="my-chart">
      <v-x :config="x"></v-x>
      <v-y :config="y"></v-y>
      <!-- <v-y2 :config="y2"></v-y2> -->
      <v-tooltip :config="tooltip"></v-tooltip>
      <v-point :config="point"></v-point>
      <v-grid :config="grid"></v-grid>
      <v-legend :config="legend"></v-legend>
      <v-regions :config="regions"></v-regions>
    </v-line>
  </div>
</template>

<script>
import lineConfig from '../chartConfig/line.js'
import xConfig from '../chartConfig/x.js'
import yConfig from '../chartConfig/y.js'
// import y2Config from '../chartConfig/y2.js'
import tooltipConfig from '../chartConfig/tooltip.js'
import pointConfig from '../chartConfig/point.js'
import gridConfig from '../chartConfig/grid.js'
import legendConfig from '../chartConfig/legend.js'
import regionsConfig from '../chartConfig/regions.js'

export default {
  data () {
    return {
      config: lineConfig,
      x: xConfig,
      y: yConfig,
      // y2: y2Config,
      tooltip: tooltipConfig,
      point: pointConfig,
      grid: gridConfig,
      legend: legendConfig,
      regions: regionsConfig,
      data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ]
      }
    }
  },

  created () {

  }
}
</script>

<style scoped>

</style>

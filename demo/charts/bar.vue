<template>
  <div>
    <v-bar :data="data" :config="config" theme="my-chart">
      <v-x :config="x"></v-x>
      <v-y :config="y"></v-y>
      <!-- <v-y2 :config="y2"></v-y2> -->
      <v-tooltip :config="tooltip"></v-tooltip>
      <v-point :config="point"></v-point>
      <v-grid :config="grid"></v-grid>
      <v-legend :config="legend"></v-legend>
    </v-bar>
  </div>
</template>

<script>
import barConfig from '../chartConfig/bar.js'
import xConfig from '../chartConfig/x.js'
import yConfig from '../chartConfig/y.js'
// import y2Config from '../chartConfig/y2.js'
import tooltipConfig from '../chartConfig/tooltip.js'
import pointConfig from '../chartConfig/point.js'
import gridConfig from '../chartConfig/grid.js'
import legendConfig from '../chartConfig/legend.js'

export default {
  data () {
    return {
      config: barConfig,
      y: yConfig,
      // y2: y2Config,
      tooltip: tooltipConfig,
      point: pointConfig,
      grid: gridConfig,
      legend: legendConfig,
      data: {
        'x': 'x',
        'rows': [
          ['x', '好评率'],
          ['data1', '98.1'],
          ['data2', '98.0'],
          ['data3', '97.7'],
          ['data4', '97.9'],
          ['data5', '97.6'],
          ['data6', '97.6']
        ],
        'type': 'bar'
      }
    }
  },

  computed: {
    x () {
      let temp = _.cloneDeepWith(xConfig)
      temp.type = 'category'
      return temp
    }
  },

  created () {

  }
}
</script>

<style scoped>

</style>

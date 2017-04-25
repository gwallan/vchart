<template>
  <div>
    <v-pie :data="data" :config="config" theme="my-chart">
      <v-legend :config="legend"></v-legend>
      <v-tooltip :config="tooltip"></v-tooltip>
    </v-pie>
  </div>
</template>
<script>
import pieConfig from '../chartConfig/pie.js'
import legendConfig from '../chartConfig/legend.js'
import tooltipConfig from '../chartConfig/tooltip.js'

export default {
  data () {
    return {
      config: pieConfig,
      legend: legendConfig,
      tooltip: tooltipConfig,
      data: {
        columns: [
          ['data1', 30],
          ['data2', 120]
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

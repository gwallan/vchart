<template>
  <div>
    <v-map :data="data" :config="config" theme="my-chart">
      <v-tooltip :config="tooltip"></v-tooltip>
      <!-- <v-legend :config="legend"></v-legend> -->
    </v-map>
  </div>
</template>

<script>
import mapConfig from '../chartConfig/map.js'
import tooltipConfig from '../chartConfig/tooltip.js'
// import legendConfig from '../chartConfig/legend.js'

export default {
  data () {
    return {
      config: mapConfig,
      tooltip: tooltipConfig,
      // legend: legendConfig,
      data: {
        columns: [
          ['Gansu', 48], ['Qinghai', 47], ['Guangxi', 45], ['Guizhou', 35], ['Chongqing', 34],
          ['Beijing', 12], ['Fujian', 35], ['Anhui', 6], ['Guangdong', 40], ['Xizang', 3], ['Xinjiang', 12],
          ['Hainan', 21], ['Ningxia', 8], ['Shaanxi', 40], ['Shanxi', 11], ['Hubei', 1], ['Hunan', 23],
          ['Sichuan', 19], ['Yunnan', 19], ['Hebei', 34], ['Henan', 20], ['Liaoning', 14], ['Shandong', 0],
          ['Tianjin', 12], ['Jiangxi', 20], ['Jiangsu', 37], ['Shanghai', 34], ['Zhejiang', 46],
          ['Jilin', 38], ['Inner Mongol', 10], ['Heilongjiang', 0], ['Taiwan', 45], ['Xianggang', 35],
          ['Macau', 10]
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

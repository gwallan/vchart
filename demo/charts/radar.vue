<template>
  <div>
    <v-radar :data="data" :config="config" theme="my-chart">
      <v-legend :config="legend"></v-legend>
    </v-radar>
  </div>
</template>

<script>
import radarConfig from '../chartConfig/radar.js'
import legendConfig from '../chartConfig/legend.js'

export default {
  data () {
    return {
      config: radarConfig,
      legend: legendConfig,
      data: {
        keys: {
          x: 'brand',
          value: ['info']
        },
        json: [
          {'brand': '红米Note4',
            info: [
              {axis: '服务', value: '1.0'},
              {axis: '售后', value: '2.0'},
              {axis: '质量', value: '3.0'},
              {axis: '配送', value: '4.0'},
              {axis: '客服', value: '3.5'},
              {axis: '价格', value: '1.0'},
              {axis: '外观', value: '4.8'}
            ]
          },
          {'brand': '魅蓝Note3',
            info: [
              {axis: '服务', value: '2.3'},
              {axis: '售后', value: '4.9'},
              {axis: '质量', value: '2.3'},
              {axis: '配送', value: '3.4'},
              {axis: '客服', value: '4.1'},
              {axis: '价格', value: '2.1'},
              {axis: '外观', value: '1.8'}
            ]
          }
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

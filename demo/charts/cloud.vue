<template>
  <div>
    <v-cloud :data="data" :config="config" theme="my-chart">
      <v-tooltip :config="tooltip"></v-tooltip>
      <v-legend :config="legend"></v-legend>
    </v-cloud>
  </div>
</template>

<script>
import cloudConfig from '../chartConfig/cloud.js'
import tooltipConfig from '../chartConfig/tooltip.js'
import legendConfig from '../chartConfig/legend.js'

export default {
  data () {
    return {
      config: cloudConfig,
      tooltip: tooltipConfig,
      legend: legendConfig,
      data: {
        'keys': {
          'value': ['count', 'lemma', 'type']
        },
        'json': [
          {
            'count': 1,
            'lemma': '外形漂亮',
            'type': 1
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

<template>
  <div>
    <v-treemap :data="data" :config="config" theme="my-chart">
      <v-tooltip :config="tooltip"></v-tooltip>
      <v-legend :config="legend"></v-legend>
    </v-treemap>
  </div>
</template>

<script>
import treemapConfig from '../chartConfig/treemap.js'
import tooltipConfig from '../chartConfig/tooltip.js'
import legendConfig from '../chartConfig/legend.js'

export default {
  data () {
    return {
      config: treemapConfig,
      tooltip: tooltipConfig,
      legend: legendConfig,
      data: {
       'name': 'graph',
       'children': [
          {
            'name': '新品发布2',
            'children': [
              {
                'name': '数据调研A',
                'value': 7897
              },
              {
                'name': '数据调研B',
                'value': 76540
              },
              {
                'name': '数据调研C',
                'value': 66697
              }
            ]
          },
          {
            'name': '新品发布',
            'children': [
              {
                'name': '日常运营',
                'children': [
                  {
                    'name': 'Q-zone',
                    'value': 11123
                  },
                  {
                    'name': 'QQ',
                    'value': 10120
                  }
                ]
              },
              {
                'name': '广告设计',
                'value': 2897
              }
            ]
          },
          {
            'name': '日常运营',
            'children': [
              {
                'name': '线下推广',
                'children': [
                  {
                    'name': '日常运营3',
                    'value': 149431
                  },
                  {
                    'name': '户外广告',
                    'value': 900
                  }
                ]
              }
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

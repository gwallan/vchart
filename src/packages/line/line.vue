<template lang="html">
  <div class="v-chart-container">
    <div ref="canvas" :class="theme"></div>
    <slot></slot>
  </div>
</template>

<script>
import line from 'c3/src/component/c3-line.js'
import defaultConfig from './config.js'

var chart = null

export default {
  name: 'v-line',

  computed: {
    option () {
      let configCopy = _.cloneDeepWith(defaultConfig)
      if (this.config) configCopy = _.merge(configCopy, this.config)

      this.$children.forEach(function (child) {
        switch (child.$options._componentTag) {
          case 'v-x':
            if (!_.isPlainObject(configCopy.axis.x)) configCopy.axis.x = {}

            configCopy.axis.x = _.merge(configCopy.axis.x, child.option)
            break
          case 'v-y':
            if (!_.isPlainObject(configCopy.axis.y)) configCopy.axis.y = {}

            configCopy.axis.y = _.merge(configCopy.axis.y, child.option)
            break
          case 'v-y2':
            if (!_.isPlainObject(configCopy.axis.y2)) configCopy.axis.y2 = {}

            configCopy.axis.y2 = _.merge(configCopy.axis.y2, child.option)
            break
          case 'v-grid':
            if (!_.isPlainObject(configCopy.grid)) configCopy.grid = {}

            configCopy.grid = _.merge(configCopy.grid, child.option)
            break
          case 'v-legend':
            if (!_.isPlainObject(configCopy.legend)) configCopy.legend = {}

            configCopy.legend = _.merge(configCopy.legend, child.option)
            break
          case 'v-point':
            if (!_.isPlainObject(configCopy.point)) configCopy.point = {}

            configCopy.point = _.merge(configCopy.point, child.option)
            break
          case 'v-tooltip':
            if (!_.isPlainObject(configCopy.tooltip)) configCopy.tooltip = {}

            configCopy.tooltip = _.merge(configCopy.tooltip, child.option)
            break
          case 'v-regions':
            if (!_.isPlainObject(configCopy.regions)) configCopy.regions = {}

            configCopy.regions = _.merge(configCopy.regions, child.option)
            break
        }
      })

      configCopy.data = this.data
      if (!configCopy.data.type) configCopy.data.type = 'line'
      console.log('chart-option', configCopy)

      return configCopy
    }
  },

  mounted () {
    this.option.bindto = this.$refs.canvas
    chart = line.generate(this.option)
  },

  beforeDestory () {
    chart.destory()
  },

  props: {
    data: {
      type: Object,
      required: true
    },

    config: {
      type: Object
    },

    theme: String
  }

}
</script>

<style lang="scss" scoped>

</style>

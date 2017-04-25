<template lang="html">
  <div class="v-chart-container">
    <div ref="canvas" :class="theme"></div>
    <slot></slot>
  </div>
</template>

<script>
import pie from 'c3/src/component/c3-pie.js'
import defaultConfig from './config.js'

var chart = null

export default {
  name: 'v-pie',

  computed: {
    option () {
      let configCopy = _.cloneDeepWith(defaultConfig)
      if (this.config) configCopy = _.merge(configCopy, this.config)

      this.$children.forEach(function (child) {
        switch (child.$options._componentTag) {
          case 'v-legend':
            if (!configCopy.legend) configCopy.legend = {}
            if (!_.isPlainObject(configCopy.legend)) configCopy.legend = {}

            configCopy.legend = _.merge(configCopy.legend, child.option)
            break
          case 'v-tooltip':
            if (!configCopy.tooltip) configCopy.tooltip = {}
            if (!_.isPlainObject(configCopy.tooltip)) configCopy.tooltip = {}

            configCopy.tooltip = _.merge(configCopy.tooltip, child.option)
            break
        }
      })

      configCopy.data = this.data
      if (!configCopy.data.type) configCopy.data.type = 'pie'

      console.log('pie-configCopy', configCopy)
      return configCopy
    }
  },

  mounted () {
    this.option.bindto = this.$refs.canvas
    chart = pie.generate(this.option)
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
      type: Object,
      default: function () {
        return defaultConfig
      }
    },

    theme: String
  }

}
</script>

<style lang="scss" scoped>

</style>

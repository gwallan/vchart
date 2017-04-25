<template lang="html">
  <div class="v-chart-container">
    <div ref="canvas" :class="theme"></div>
    <slot></slot>
  </div>
</template>

<script>
import treemap from 'c3/src/component/c3-treemap.js'
import defaultConfig from './config.js'

var chart = null

export default {
  name: 'v-treemap',

  computed: {
    option () {
      let configCopy = _.cloneDeepWith(defaultConfig)
      if (this.config) configCopy = _.merge(configCopy, this.config)

      this.$children.forEach(function (child) {
        switch (child.$options._componentTag) {
          case 'v-legend':
            if (!_.isPlainObject(configCopy.legend)) configCopy.legend = {}

            configCopy.legend = _.merge(configCopy.legend, child.option)
            break
          case 'v-tooltip':
            if (!_.isPlainObject(configCopy.tooltip)) configCopy.tooltip = {}

            configCopy.tooltip = _.merge(configCopy.tooltip, child.option)
            break
        }
      })

      configCopy.data = this.data
      configCopy.data.type = 'treemap'

      return configCopy
    }
  },

  mounted () {
    this.option.bindto = this.$refs.canvas
    chart = treemap.generate(this.option)

    console.log('chart-option', this.option)
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

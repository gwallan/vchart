<template lang="html">
  <div class="v-y2" v-if="false">
  </div>
</template>

<script>
import defaultConfig from './config.js'
export default {
  name: 'v-y2',

  computed: {
    option () {
      let configCopy = _.cloneDeepWith(defaultConfig)
      if (this.config) configCopy = _.merge(configCopy, this.config)

      configCopy.show = true
      return configCopy
    }
  },

  props: {
    config: {
      type: Object
    }
  }
}
</script>

<style lang="css">
</style>

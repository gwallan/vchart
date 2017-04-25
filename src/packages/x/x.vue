<template lang="html">
  <div class="v-x" v-if="false">
  </div>
</template>

<script>
import defaultConfig from './config.js'
export default {
  name: 'v-x',

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

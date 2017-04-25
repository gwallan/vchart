<template lang="html">
  <div class="v-grid" v-if="false">
  </div>
</template>

<script>
import defaultConfig from './config.js'
export default {
  name: 'v-grid',

  computed: {
    option () {
      let configCopy = _.cloneDeepWith(defaultConfig)
      if (this.config) configCopy = _.merge(configCopy, this.config)

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

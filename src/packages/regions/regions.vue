<template lang="html">
  <div class="v-regions" v-if="false">
  </div>
</template>

<script>
import defaultConfig from './config.js'
export default {
  name: 'v-regions',

  computed: {
    option () {
      if (this.config) return this.config

      return defaultConfig
    }
  },

  props: {
    config: Object
  }
}
</script>

<style lang="css">
</style>

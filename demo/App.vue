<template>
  <div class="container">
    <header>
      <h3>测试图形</h3>
      <ul>
        <li :class="{active: focus === 'line'}" @click="linkTo('line')">线图</li>
        <li :class="{active: focus === 'bar'}" @click="linkTo('bar')">柱图</li>
        <li :class="{active: focus === 'pie'}" @click="linkTo('pie')">饼图</li>
        <!-- <li :class="{active: focus === 'scatter'}" @click="linkTo('scatter')">散点图</li> -->
        <li :class="{active: focus === 'area'}" @click="linkTo('area')">面积图</li>
        <li :class="{active: focus === 'donut'}" @click="linkTo('donut')">环形图</li>
        <li :class="{active: focus === 'radar'}" @click="linkTo('radar')">雷达图</li>
        <li :class="{active: focus === 'cloud'}" @click="linkTo('cloud')">词云图</li>
        <li :class="{active: focus === 'map'}" @click="linkTo('map')">地理图</li>
        <!-- <li :class="{active: focus === 'tree'}" @click="linkTo('tree')">树状图</li> -->
      </ul>
    </header>
    <section class="content">
      <component :is="currentChart"></component>
    </section>
  </div>
</template>

<script>
import radar from './charts/radar.vue'
import pie from './charts/pie.vue'
import donut from './charts/donut.vue'
import line from './charts/line.vue'
import bar from './charts/bar.vue'
import area from './charts/area.vue'
import map from './charts/map.vue'
// import tree from './charts/tree.vue'
import cloud from './charts/cloud.vue'

export default {
  data () {
    return {
      currentChart: null,
      focus: 'radar'
    }
  },

  created () {
    this.currentChart = radar
  },

  methods: {
    linkTo (type) {
      this.focus = type

      switch (type) {
        case 'radar':
          this.currentChart = radar
          break
        case 'pie':
          this.currentChart = pie
          break
        case 'donut':
          this.currentChart = donut
          break
        case 'line':
          this.currentChart = line
          break
        case 'bar':
          this.currentChart = bar
          break
        case 'area':
          this.currentChart = area
          break
        case 'map':
          this.currentChart = map
          break
        case 'tree':
          this.currentChart = tree
          break
        case 'cloud':
          this.currentChart = cloud
          break
        default:
          this.currentChart = null
      }
    }
  }

}
</script>

<style media="screen">
  *{
    margin: 0;
    padding: 0;
  }
  html{
    height: 100%;
  }
  body{
    height: 100%;

  }
  .v-chart-container{
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 1px 1px 20px #ccc;
    padding: 20px;
  }
</style>

<style scoped>

  .container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 750px;
    height: 100%;
  }
  header{
    height: 120px;
  }
  .content{
    flex: 1;
    /*background-color: #ccc;*/
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3{
    margin-top: 20px;
    text-align: center;
  }
  ul{
    display: flex;
    list-style: none;
    justify-content: center;
    margin: 20px 0px;
  }
  li{
    padding: 5px 15px;
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
  }
  .active{
    background-color: #ccc;
    border-radius: 4px;
  }
</style>

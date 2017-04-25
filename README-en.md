#  vchart

> `v0.0.1`
[中文_README](README.md)

## Feature
+ Based on d3.js build, fully compatible with c3.js API
+ Support for importing vchart.js charts and components on demand;
+ Lightweight, efficient

## Installation

```bash
$ npm install vchart --save
```

## Environment Support

* Browser: Modern browsers and Internet Explorer 9+

## Usage

+ Import all charts and components

  ```js
  import Vue from 'vue'
  import Vchart from 'vchart'
  import App from './App.vue'

  Vue.use(Vchart)
  ```
+ Import vchart.js modules manually to reduce bundle size

  For example：

  ```js
  import Vue from 'vue'
  import {
    line, // The core components of line
    x, // Optional
    y, // Optional
    y2, // Optional
    legend, // Optional
    tooltip, // Optional
    point, // Optional
    region, // Optional
    grid // Optional
  } from 'vchart'
  import App from './App.vue'

  Vue.use(line)
  Vue.use(x)
  Vue.use(y)
  Vue.use(y2)
  Vue.use(legend)
  Vue.use(tooltip)
  Vue.use(point)
  Vue.use(region)
  Vue.use(grid)

  ```
  Then you can use the components in your template.For example：

  ```js
  <template>
    <div>
      <v-line :data="customData" :config="config" theme="my-chart">
        <v-x :config="x"></v-x> // Optional
        <v-y :config="y"></v-y> // Optional
        <v-y2 :config="y2"></v-y2> // Optional
        <v-tooltip :config="tooltip"></v-tooltip> // Optional
        <v-point :config="point"></v-point> // Optional
        <v-grid :config="grid"></v-grid> // Optional
        <v-legend :config="legend"></v-legend> // Optional
      </v-line>
    </div>
  </template>

  <script>

  export default {
    data () {
      return {
        config: lineConfig,
        x: xConfig,
        y: yConfig,
        y2: y2Config,
        tooltip: tooltipConfig,
        point: pointConfig,
        grid: gridConfig,
        legend: legendConfig,
        data: customData
      }
    }
  }
  </script>

  <style scoped>

  </style>

  ```
  If you do not like this way,you can also use the way of c3.js to configure the charts,
  but for the principle of reusability and ease of maintenance,  we do not recommend doing like this.

  ```js
  import Vue from 'vue'
  import {line} from 'vchart'
  import App from './App.vue'

  Vue.use(v-line)

  ```

  In components

  ```js
  <template>
    <div>
      <v-line :data="customData" :config="customConfig">
      </v-line>
    </div>
  </template>

  ```
  In `customConfig` , you can depend on the way of c3.js to config x、y、y2、.etc

+ Static resource

  ```js
  <link href="./node_modules/vchart/dist/vchart.css">
  <script src="./node_modules/vchart/dist/vchart.js"></script>
  ```

#### DEMO

```bash
# 克隆仓库
git clone https://github.com/gwallan/vchart.git

# 切换到项目目录
cd vchart

# 安装依赖
npm install

# 查看示例
npm run dev
```


## License

MIT

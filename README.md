#  vchart

> `v0.0.1`
[English_README](README-en.md)

## 特点
+ 基于 d3.js 构建，全面兼容 c3.js API
+ 组件化的开发和应用，可以按需加载
+ 轻量、高效

## 支持环境

* IE9+、chrome等现在浏览器

## 安装

```bash
$ npm install vchart --save
```
## 用法

+ 引入所有的图形和组件

  ```js
  import Vue from 'vue'
  import Vchart from 'vchart'
  import App from './App.vue'

  Vue.use(Vchart)
  ```
+ 按需加载图形和组件

  例如：

  ```js
  import Vue from 'vue'
  import {
    line, // 线图核心组件
    x, // 可选，使你可以通过 v-x 标签配置 x 轴
    y, // 可选，使你可以通过 v-y 标签配置 y 轴
    y2, // 可选，使你可以通过 v-y2 标签配置 y2 轴
    legend, // 可选，使你可以通过 v-legend 标签配置 legend
    tooltip, // 可选，使你可以通过 v-tooltip 标签配置 tooltip
    point, // 可选，使你可以通过 v-point 标签配置 point
    region, // 可选，使你可以通过 v-region 标签配置 region
    grid // 可选，使你可以通过 v-grid 标签配置 grid
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
  然后你就可以在你的模板中使用组件了，例如：

  ```js
  <template>
    <div>
      <v-line :data="customData" :config="config" theme="my-chart">
        <v-x :config="x"></v-x> // 可选，配置 x 轴
        <v-y :config="y"></v-y> // 可选，配置 y 轴
        <v-y2 :config="y2"></v-y2> // 可选，配置 y2 轴
        <v-tooltip :config="tooltip"></v-tooltip> // 可选，配置 tooltip
        <v-point :config="point"></v-point> // 可选，配置 point
        <v-grid :config="grid"></v-grid> // 可选，配置 grid
        <v-legend :config="legend"></v-legend> // 可选，配置 legend
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
  如果你不喜欢这种方式，你还可以使用 c3.js 的方式进行图形的配置，但是出于复用性和易于维护性的原则，我们不推荐这么做。

  ```js
  import Vue from 'vue'
  import {line} from 'vchart'
  import App from './App.vue'

  Vue.use(v-line)

  ```

  组件中

  ```js
  <template>
    <div>
      <v-line :data="customData" :config="customConfig">
      </v-line>
    </div>
  </template>

  ```
  在 `customConfig` 中你可以按照 c3.js 的方式对 x，y，y2。。。等所有元素进行配置，他们都会生效。

+ 静态资源的方式引入

  ```js
  <link href="./node_modules/vchart/dist/vchart.css">
  <script src="./node_modules/vchart/dist/vchart.js"></script>
  ```

#### 示例

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

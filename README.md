#  v-chart
+ 构建于 d3.js
+ 全面兼容 c3.js API
+ 可实现按需加载
+ 组件化的使用方式

## 安装

 npm 安装

```bash
$ npm install vchart
```
## 快速上手

#### 引入 v-chart
你可以引入整个 v-chart，或是根据需要引入部分图形组件

+ 完整引入

  在 main.js 中写入以下内容

  ```js
  import Vue from 'vue'
  import Vchart from 'vchart'
  import App from './App.vue'

  Vue.use(Vchart)

  new Vue({
    el: '#app',
    render: h => h(App)
  })
  ```
  组件中使用

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
+ 按需引入

  如果你只用到了个别的图形，你可以只引入相关图形组件，以折线图为例：

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

  new Vue({
    el: '#app',
    render: h => h(App)
  })
  ```
  如果你不喜欢这种方式，你还可以使用 c3.js 的方式进行图形的配置，但是出于复用性和易于维护性的原则，我们不推荐这么做。

  ```js
  import Vue from 'vue'
  import {line} from 'vchart'
  import App from './App.vue'

  Vue.use(v-line)

  new Vue({
    el: '#app',
    render: h => h(App)
  })
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
git clone vchart

# 切换到项目目录
cd VC

# 安装依赖
npm install

# 查看示例
npm run dev
```

## API 说明

### base
基础配置：

+ #### size

  设置图表（画布）的大小

  示例：

  ```js
    size: {
      width: 680,
      height: 380
    }
  ```

+ #### padding

  设置图表（画布）的内边距

  示例：

  ```js
    padding: {
      top: 20,
      bottom: 20,
      left: 20,
      right: 0
    }
  ```

+ #### color

  设置自定义的图形颜色

  示例：

  ```js
    color: {
      pattern: ['#1f77b4', '#aec7e8', ...]
    }
  ```

+ #### interaction

  设置图表是否需要交互

  示例：

  ```js
    interaction: {
      enabled: false
    }
  ```
  说明：如果设置为**false**，则所有的交互（显示/隐藏tooltip、选择、鼠标事件等）将会被禁止

+ #### transition

  设置图形动画

  示例：

  ```js
    transition: {
      enabled: true,
      duration: 1000
    }
  ```

  配置：

  - ##### transition.enabled
    设置是否开启图形动画
    默认值：true
  - ##### transition.duration
    设置图形动画的持续时间
    默认值： 350

+ #### oninit

  设置在图标初始化时执行的回调

  示例：

  ```js
    oninit: function () { ... }
  ```

+ #### onrendered

  设置在绘制图标时执行的回调，基本上，这个回调会在每次重绘图标时被调用

  示例：

  ```js
    onrendered: function () { ... }
  ```  

+ #### onmouseover

  设置在鼠标进入图标时执行的回调

  示例：

  ```js
    onmouseover: function () { ... }
  ```

+ #### onmouseout

  设置在鼠标离开图标时执行的回调

  示例：

  ```js
    onmouseout: function () { ... }
  ```

+ #### onresize

  设置在用户调整屏幕大小时执行的回调

  示例：

  ```js
    onresize: function () { ... }
  ```

+ #### onresized

  设置在用户调整屏幕大小完成后执行的回调

  示例：

  ```js
    onresized: function () { ... }
  ```   

### data
数据配置：

+ #### data.url

  通过URL加载一个CSV或JSON文件。注意：如果通过`file://`协议来加载，则和大多数阻止`XMLHTTPRequests`
  的浏览器一样不会工作

  示例：

  ```js
    data: {
      url: '/data/c3_test.csv'
    }
  ```   

+ #### data.json

  为data解析json对象。参考data.keys

  示例：

  ```js
    data: {
      json: [
        {name: 'www.site1.com', upload: 200, download: 200, total: 400},
        {name: 'www.site2.com', upload: 100, download: 300, total: 400},
        {name: 'www.site3.com', upload: 300, download: 200, total: 500},
        {name: 'www.site4.com', upload: 400, download: 100, total: 500},
      ],
      keys: {
        // x: 'name', // it's possible to specify 'x' when category axis
        value: ['upload', 'download'],
      }
    }
  ```  

+ #### data.rows

  加载一个多为数组的数据，第一个数组包含数据名称，以下依次为相关的数据

  示例：

  ```js
    data: {
      rows: [
        ['data1', 'data2', 'data3'],
        [90, 120, 300],
        [40, 160, 240],
        [50, 200, 290],
        [120, 160, 230],
        [80, 130, 300],
        [90, 220, 320],
      ]
    }
  ```  

+ #### data.columns

  加载一个多为数组的数据，每个数组包含此条数据的名称和相关的数据值

  示例：

  ```js
    data: {
      columns: [
        ['data1', 30, 20, 50, 40, 60, 50],
        ['data2', 200, 130, 90, 240, 130, 220],
        ['data3', 300, 200, 160, 400, 250, 250]
      ]
    }
  ```

+ #### data.mimeType

  在通过data.url加载JSON数据时使用

  示例：

  ```js
    {data: {mimeType: 'json'}}
  ```       

+ #### data.keys

  选择所需数据对应的JSON对象

  示例：

  ```js
    data: {
      json: [
        {name: 'www.site1.com', upload: 200, download: 200, total: 400},
        {name: 'www.site2.com', upload: 100, download: 300, total: 400},
        {name: 'www.site3.com', upload: 300, download: 200, total: 500},
        {name: 'www.site4.com', upload: 400, download: 100, total: 500},
      ],
      keys: {
        // x: 'name', // it's possible to specify 'x' when category axis
        value: ['upload', 'download'],
      }
    },
  ```       

+ #### data.x

  确定x值数据的key

  我们可以通过此选项来显示非索引 x 值，当x轴设为`timeseries`的类型,这个选项是必须的。如果此选项设为`category`轴，数据的键值将被用于类别名称（We can show the data with non-index x values by this option. This option is required when the type of x axis is timeseries. If this option is set on category axis, the values of the data on the key will be used for category names.）

  注意：此选项必须使用在具有相同 x 值的数据

  示例：

  ```js
    data: {
      x: 'date'
    }
  ```  

+ #### data.xs

  确定每条x值数据的key

  如果我们想要显示有不同 x 值的数据，可以使用这个选项。

  示例：

  ```js
    data: {
      xs: {
        data1: 'x1',
        data2: 'x2',
      }
    }
  ```

+ #### data.names

  自定义数据集名称

  示例：

  ```js
    data: {
      names: {
        data1: 'Data Name 1',
        data2: 'Data Name 2',
      }
    }
  ```

+ #### data.classes

  自定义数据类

  如果设置这个选项，则元素 `g `会额外的增加一个以`c3-target-`为前缀的类（如：c3-target-additional-data1-class）

  示例：

  ```js
    data: {
      classes: {
        data1: 'additional-data1-class',
        data2: 'additional-data2-class',
      }
    }
  ```

+ #### data.groups

  为堆积设置组数据（http://c3js.org/samples/chart_bar_stacked.html）

  示例：

  ```js
    data: {
      groups: [
        ['data1', 'data2'],
        ['data3'],
      ]
    }
  ```

+ #### data.axes

  设置y轴的相关的数据，可以使用`y`,`y2`

  示例：

  ```js
    data: {
      axes: {
        data1: 'y',
        data2: 'y2'
      }
    }
  ```

+ #### data.type

  设置图形类型

  如果指定这个选项，则此类型将会被应用到每个数据。此外这个设置可以被`data.types`覆盖

  + line
  + spline
  + step
  + area
  + area-spline
  + area-step
  + bar
  + scatter
  + pie
  + donut
  + gauge

  示例：

  ```js
    data: {
      type: 'bar'
    }
  ```

+ #### data.types

  为每条数据设置图标类型

  这个设置可以覆盖`data.type`

  示例：

  ```js
    data: {
      types: {
        data1: 'bar'
        data2: 'spline'
      }
    }
  ```

+ #### data.labels

  在每条数据点上显示标签

  示例：

  ```js
    data: {
      labels: true
    }
  ```

+ #### data.order

  定义数据的顺序

  此选项可以改变堆叠数据和圆环/饼的块的顺序。如果指定为 null ，则默认是数据加载的顺序。如果指定了函数，它将用于对数据进行排序，并且它将接受数组作为参数。

  有效值`desc`\'asc'\`function(data1, data2){...}`\null

  示例：

  ```js
    data: {
      order: 'asc'
    }
  ```  

+ #### data.regions

  定义每个数据的区域

  每个数据的值必须是一个数组，它包含一个由 `start` `end` `style`组成的对象。如果 `start` 没有设置，
  起始值则默认为第一个数据点。如果 `end` 没有设置，结束值则默认为最后一个数据点。

  目前这个选项只支持折线图和虚线风格。如果制定此选项，这个线将会在此区域被显示为虚线。

  示例：

  ```js
    data: {
      regions: {
        data1: [{'start':1, 'end':2, 'style':'dashed'},{'start':3}],
        ...
      }
    }
  ```

+ #### data.color

  设置颜色转化函数

  这个选项应该是一个函数和一个指定接收 `color` (比如：#ff0)的函数。而且`d`有类似 `id` `value` `index` 等的数据参数。同时它必须返回一个表示颜色的字符串

  示例：

  ```js
    data: {
      color: function (color, d) { ... }
    }
  ```  

+ #### data.colors

  为每条数据设置颜色

  示例：

  ```js
    data: {
      colors: {
        data1: '#ff0000',
        ...
      }
    }
  ```

+ #### data.hide

  当图标显示时，隐藏每条数据

  如果设置为 `true`，搜有的数据都会被隐藏。如果在数组中指定多个id，这些指定id的数据将会被隐藏

  注意：这个选项不能隐藏legend。因此我们需要通过设置 `legend.hide` 来隐藏。

  示例：

  ```js
    data: {
      // all of data will be hidden
      hide: true
      // specified data will be hidden
      hide: ['data1', ...]
    }
  ```

+ #### data.empty.label.text

  当无数据时，设置文本

  示例：

  ```js
    data: {
      empty: {
        label: {
          text: "No Data"
        }
      }
    }
  ```

+ #### data.onclick

  在每条数据点的 `click` 事件上设置一个回调

  当每一个数据点被点击时将会调用此回调，同时接受 `d` 和 `element` 作为参数。`d` 是被点击的数据，`element` 是被点击的元素。在这个回调中，`this` 指 `Chart` 对象

  示例：

  ```js
    data: {
      onclick: function (d, element) { ... }
    }
  ```
+ #### data.onmouseover

  在每条数据点的 `mouseover` 事件上设置一个回调

  当每一个数据点被鼠标滑过时将会调用此回调，同时接受 `d` 和 `element` 作为参数。`d` 是被鼠标滑过时的数据，`element` 是被鼠标滑过时的元素。在这个回调中，`this` 指 `Chart` 对象

  示例：

  ```js
    data: {
      onmouseover: function (d, element) { ... }
    }
  ```  

+ #### data.onmouseout

  在每条数据点的 `mouseout` 事件上设置一个回调

  当每一个数据点被鼠标滑出时将会调用此回调，同时接受 `d` 和 `element` 作为参数。`d` 是被鼠标滑出时的数据，`element` 是被鼠标滑出时的元素。在这个回调中，`this` 指 `Chart` 对象

  示例：

  ```js
    data: {
      onmouseout: function (d, element) { ... }
    }
  ```



### v-line
可接受子标签：

+ v-x
+ v-y
+ v-y2
+ v-legend
+ v-tooltip
+ v-grid
+ v-point
+ v-region

属性：

+ data

  说明：用于渲染图形的数据，格式为:

  列数据格式：

  ```js
  {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25]
    ],
    type: 'spine'
  }

  ```

  行数据格式：

  ```js
  {
    rows: [
      ['data1', 'data2'],
      [30, 50],
      [200, 20],
      [100, 10],
      [400, 40],
      ...
    ],
    type: 'spine'
  }

  ```

+ config

  说明：用于修改图形的配置。

  示例：

  ```js
  {
    // 基础配置项
    'size': {
      'width': 600,
      'height': 650
    },
    'transition': {
      'enabled': true,
      'duration': 1000
    },
    'padding': {
      'left': 50,
      'right': 30,
      'top': 10,
      'bottom': 0
    },
    'color': {
      'pattern': ['#0691d2', '#3655a7', '#e80c4c']
    },

    'line': {
      'connectNull': true,
      'step': {
        'type': 'step-after'
      }
    }
  }

  ```

  配置：

    + line.connectNull

    可选值为： `true` `false`.
    + line.step.type

    step图形的类型，可选值为`step` `step-before` `step-after`,默认值为`step`。

    + 其他配置参考基础配置项。

+ theme

  - 说明：自定义皮肤的 css 类名。它会被加到 svg 元素父元素上。

### v-bar
属性和配置与 v-line 相同，data.type 为`bar`,可省略。
### v-area
属性和配置与 v-line 相同，data.type 可选值有`area` `area-spline` `area-step`。默认值为`area`可省略。
### v-pie
可接受子标签：

+ v-legend
+ v-tooltip

属性：

+ data

  说明：用于渲染图形的数据，格式与`v-line`相同。

  示例：

  ```js
  {
    'columns':[
      ['PRO 5', '5.3700'],
      ['魅蓝2', '3.5700'],
      ['MX5', '0.5000'],
      ['MX4', '1.5000']
    ],
    'type' : 'pie'
  }

  ```

+ config

  说明：用于修改图形的配置。

  示例：

  ```js
  {
    ... // 基础配置项

    'pie': {
      'label': {
        'show': true, // 显示扇区数值, 可选值 true false
        'format': undefined, // 扇区数值格式
        'threshold': 0.05, // 扇区显示最小阀值
        'position': ‘inner’, // 扇区数值显示位置，可选值 外部--extend、内部--inner
        'count': -1, // 扇区数值显示个数，默认值为-1，全部显示
      },
      'title': {
        'show': true, // 显示扇区标题, 可选值 true false
      },
      'expand': true, // 是否向外扩展显示每个扇区, 可选值 true false
      'split': false, // 是否分割显示每个扇区, 可选值 true false
      'other': null, // 当扇区被分割显示后，附属扇区所属颜色
    }
  }

  ```

  配置：
    + pie.label.show

    说明： 显示扇区数值

    可选值： `true` `false`

    + pie.label.format

    说明： 扇区数值格式化

    + pie.label.threshold

    说明： 扇区显示最小阈值

    + pie.label.position

    说明：  扇区显示位置

    可选值： ` extend` `inner`

    + pie.label.count

    说明： 扇区数值显示个数，默认值为-1，全部显示。

    + pie.title.show

    说明： 扇区标题显示。

    可选值： `true` `false`

    + pie.expand

    说明： 是否向外扩展显示每个扇区

    可选值： `true` `false`

    + pie.split

    说明： 是否分割显示每个扇区

    可选值： `true` `false`

    + pie.other

    说明： 当扇区被分割显示后，附属扇区所属颜色

    + 其他配置参考基础配置项

+ theme

  说明：自定义皮肤的 css 类名。它会被加到 svg 元素父元素上。

### v-donut
可接受子标签：

+ v-legend
+ v-tooltip

属性：

+ data

  说明：用于渲染图形的数据，格式与`v-line`相同。

  示例：

  ```js
  {
    'columns':[
      ['PRO 5', '5.3700'],
      ['魅蓝2', '3.5700'],
      ['MX5', '0.5000'],
      ['MX4', '1.5000']
    ],
    'type' : 'donut'
  }

  ```

+ config

  说明：用于修改图形的配置。

  示例：

  ```js
  {
    ... // 基础配置项

    'donut':{
      'label': {
        'show': true, //显示扇区数值, 可选值 true false
        'format': undefined, //扇区数值格式
        'threshold': 0.05, //扇区显示最小阀值
        'position': false, //扇区数值显示位置，, 可选值 外部--extend、内部--inner
        'count': -1, //扇区数值显示个数，默认全部显示
      },
      'title': {
        'show': true, //显示扇区标题, 可选值 true false
      },
      'stack': {
        'enabled': true, //是否启用扇区堆积效果, 可选值 true false
        'count': 3 //堆积启用后显示的扇区个数
      },
      'width': undefined, //环图宽度
      'expand': true, //是否向外扩展显示每个扇区
      'split': false, //是否分割显示每个扇区, 可选值 true false
      'other': null, //当扇区被分割显示后，附属扇区所属颜色
    }
  }

  ```

  配置：
    + donut.label.show

    说明： 显示扇区数值

    可选值： `true` `false`

    + donut.label.format

    说明： 扇区数值格式化

    + donut.label.threshold

    说明： 扇区显示最小阈值

    + donut.label.position

    说明：  扇区显示位置

    可选值： ` extend` `inner`

    + donut.label.count

    说明： 扇区数值显示个数，默认值为-1，全部显示。

    + donut.title.show

    说明： 扇区标题显示。

    可选值： `true` `false`

    + donut.stack.enabled

    说明： 是否启用扇区堆积效果

    可选值： `true` `false`

    + donut.stack.count

    说明： 堆积启用后显示的扇区个数

    + donut.expand

    说明： 是否向外扩展显示每个扇区

    可选值： `true` `false`

    + donut.width

    说明： 环图宽度

    + donut.split

    说明： 是否分割显示每个扇区

    可选值： `true` `false`

    + donut.other

    说明： 当扇区被分割显示后，附属扇区所属颜色

    + 其他配置参考基础配置项

+ theme

  说明：自定义皮肤的 css 类名。它会被加到 svg 元素父元素上。

### v-radar
可接受子标签：

+ v-legend

属性：

+ data

  说明：用于渲染图形的数据，格式为：

  ```js
  {
    keys: {
      x: 'brand',
      value: ['info']
    },
    json: [
      {'brand': '红米Note4',
        info: [
          {axis: '服务', value: '1.0'},
          {axis: '售后', value: '2.0'},
          {axis: '质量', value: '3.0'},
          {axis: '配送', value: '4.0'},
          {axis: '客服', value: '3.5'},
          {axis: '价格', value: '1.0'},
          {axis: '外观', value: '4.8'}
        ]
      },
      {'brand': '魅蓝Note3',
        info: [
          {axis: '服务', value: '2.3'},
          {axis: '售后', value: '4.9'},
          {axis: '质量', value: '2.3'},
          {axis: '配送', value: '3.4'},
          {axis: '客服', value: '4.1'},
          {axis: '价格', value: '2.1'},
          {axis: '外观', value: '1.8'}
        ]
      }
    ]
  }

  ```

+ config

  说明：用于修改图形的配置。

  示例：

  ```js
  {
    ... // 基础配置项

    'radar': {
      'levels': 4, // 坐标系级别个数
      'min': 4, // 坐标系起始值
      'max': 5, // 坐标系最大值
      'opacityArea': 0.35, // 数据区域背景透明度
      'coor': {
        'labelFormat': null // 坐标系轴刻度格式
      }
    }
  }

  ```

  配置：
    + radar.levels

    说明：坐标系级别个数

    + radar.min

    说明：设置坐标系的起始值

    + radar.max

    说明：设置坐标系的最大值

    + radar.opacityArea

    说明：设置数据区域背景透明度

    + radar.coor.labelFormat

    说明：设置极坐标系轴刻度格式

    + 其他配置参考基础配置项

+ theme

  说明：自定义皮肤的 css 类名。它会被加到 svg 元素父元素上。

### v-cloud
可接受子标签：

+ v-legend
+ v-tooltip

属性：

+ data

  说明：用于渲染图形的数据，格式为：

  ```js
  {
    'keys': {
      'value': ["count", "lemma", "type"]
    },
    'json': [
      {
        "count": 1,
        "lemma": '外形漂亮',
        "type": 1
      }
    ],
    'type': "cloud"
  }

  ```

+ config

  说明：用于修改图形的配置。

  示例：

  ```js
  {
    ... // 基础配置项

    'cloud': {
      'ratio': 1, // 显示区域相对画布的比例
      'domain': { // 文字频次大小范围值
        'min': 0,
        'max': 500
      },
      'size': { // 文字大小范围值
        'min': 12,
        'max': 40
      },
      'label': {
        'font': "", // 文字字体样式
        'color': null, // 文字标签颜色处理函数
        'highlight': { // 高亮文本
          'text': [],
          'color': null
        }
      }
    }
  }

  ```

  配置：
    + cloud.ratio

    说明：显示区域相对画布的比例

    + cloud.domain

    说明：文字频次大小范围值

    格式：
    ```js
    {
      'min': 0,
      'max': 500
    }
    ```

    + cloud.size

    说明：文字大小范围值
    格式：
    ```js
    {
      min: 12,
      max: 40
    }
    ```

    + cloud.label.font

    说明：文字字体样式

    + cloud.label.color

    说明：文字标签颜色处理函数

    + cloud.label.highlight

    说明：匹配文本高亮颜色

    格式：
    ```js
    {
      'text': [],
      'color': null
    }
    ```

    + 其他配置参考基础配置项

+ theme

  说明：自定义皮肤的 css 类名。它会被加到 svg 元素父元素上。

### v-map
可接受子标签：

+ v-tooltip

属性：

+ data

  说明：用于渲染图形的数据，格式为：

  ```js
  {
    'columns': [
      ['Gansu', 48], ['Qinghai', 47], ['Guangxi', 45], ['Guizhou', 35], ['Chongqing', 34],
      ['Beijing', 12], ['Fujian', 35], ['Anhui', 6], ['Guangdong', 40], ['Xizang', 3], ['Xinjiang', 12],
      ['Hainan', 21], ['Ningxia', 8], ['Shaanxi', 40], ['Shanxi', 11], ['Hubei', 1], ['Hunan', 23],
      ['Sichuan', 19], ['Yunnan', 19], ['Hebei', 34], ['Henan', 20], ['Liaoning', 14], ['Shandong', 0],
      ['Tianjin', 12], ['Jiangxi', 20], ['Jiangsu', 37], ['Shanghai', 34], ['Zhejiang', 46],
      ['Jilin', 38], ['Inner Mongol', 10], ['Heilongjiang', 0], ['Taiwan', 45], ['Xianggang', 35],
      ['Macau', 10]
    ]
  }

  ```

+ config

  说明：用于修改图形的配置。

  示例：

  ```js
  {
    ... // 基础配置项

    'map': {
      'ratio': 1, // 图形显示比例
      'position': { // 地图位置相对的偏移位置
        'x': 0,
        'y': 0
      },
      'scale': {
        'show': false, // // 比例尺显示
          'max': 100, // 比例尺最大值
          'min': 0, // 比例尺最小值
          'format': d3.format(".01f"),
          'orient': "vertical", // 比例尺样式，可选值为： 垂直-vertical 水平-horizon
          'position': { // 比例尺位置
            'top': 0,
            'left': 0
          },
          'colors': ["rgb(223, 255, 255)", "rgb(6, 110, 221)"], // 设定比例尺渐变的起始色和终止色
          'draw': null //自定义图例绘制
      },
      'region': { // 区域
        'empty': {
          'color': "white"
        }
      },
      'label': { // 区域标签
        'show': false,
        'format': null
      }
    }
  }

  ```

  配置：
    + map.ratio

    说明：显示区域相对画布的比例

    + map.position

    说明：地图位置相对的偏移位置

    格式：
    ```js
    {
        'x': 0,
        'y': 0
    }
    ```

    + map.scale

    说明：比例尺

    格式：
    ```js
    {
        'show': false, // // 比例尺显示
        'max': 100, // 比例尺最大值
        'min': 0, // 比例尺最小值
        'format': d3.format(".01f"),
        'orient': "vertical", // 比例尺样式，可选值为： 垂直-vertical 水平-horizon
        'position': { // 比例尺位置
          'top': 0,
          'left': 0
        },
        'colors': ["rgb(223, 255, 255)", "rgb(6, 110, 221)"], // 设定比例尺渐变的起始色和终止色
        'draw': null //自定义图例绘制
    }
    ```

    + map.region

    说明：区域

    格式：
    ```js
    {
        'empty': {
          'color': "white"
        }
    }
    ```

    + map.label

    说明：区域标签

    格式：
    ```js
    {
        'show': false,
        'format': null
    }
    ```

    + 其他配置参考基础配置项

+ theme

  说明：自定义皮肤的 css 类名。它会被加到 svg 元素父元素上。

### v-x

属性：

+ config

  示例：

  ```js
  {
    'type': 'indexed',
    'max': 100,
    'min': -100,
    'height': 20,
    'localtime': true,
    'extent': [5, 10],
    'categories': ['Category 1', 'Category 2', ...],
    'padding': {
      'left': 0,
      'right': 0,
    },
    'label': {
      'text': 'Your X Axis',
      'position': 'outer-center',
    }
    'tick': {
      'centered': true,
      'rotate': 60,
      'outer': false,
      'fit': true,
      'count': 5,
      'values': [1, 2, 4, 8, 16, 32, ...],
      'format': function (x) { return x.getFullYear(); },
      'culling': {
        'max': 5
      }
    }
  }

  ```

  配置：
    + x.type

    说明：x 轴类型

    可选值： `timeseries` `category` `indexed`

    默认值：`indexed`

    + x.categories

    说明：设置`category`类型 x 轴的刻度值

    默认值：[]

    + x.max

    说明：x 轴最大值

    默认值：undefined

    + x.min

    说明：x 轴最小值

    默认值：undefined

    + x.height

    说明：x 轴高度

    默认值：undefined

    + x.localtime

    说明：是否使用本地时间，只在 x.type 为`timeseries`时有效

    可选值： `true` `false`

    默认值：`true`

    + x.padding

    说明：设置 x 轴的 padding 值

    默认值：{}

    + x.label.text

    说明：设置 x 轴标签文字。

    默认值：''

    + x.label.position

    说明：设置 x 轴标签文字位置。

    可选值：

      - 水平坐标轴： `inner-right` `inner-center` `inner-left` `outer-right` `outer-center` `outer-left`

      - 垂直坐标轴： `inner-top` `inner-middle` `inner-bottom` `outer-top` `outer-middle` `outer-bottom`

    默认值：

      - 水平坐标轴： `inner-right`

      - 垂直坐标轴： `inner-top`

    + x.tick.centered

    说明：居中 x 轴坐标刻度值，只在 x.type为`category`时有效

    可选值： `true` `false`

    默认值：false

    + x.tick.rotate

    说明：旋转 x 轴坐标刻度值

    默认值：0

    + x.tick.outer

    说明：显示 x轴两端刻度线

    可选值： `true` `false`

    默认值：true

    + x.tick.fit

    说明：根据数据点匹配刻度值

    可选值： `true` `false`

    默认值：true

    + x.tick.count

    说明：x 轴刻度值显示个数

    默认值： undefined

    + x.tick.values

    说明：自定义显示 x 轴刻度值,覆盖 x.tick.count

    默认值：[]

    + x.tick.format

    说明：格式化 x 轴刻度值

    默认值：undefined

    + x.tick.culling

    说明：是否开启 x 轴刻度值的过滤，为`true`时，x 轴刻度值显示的最大数为 x.tick.culling.max 的值。本配置不会隐藏刻度线。

    默认值：
      - x.type为`indexed` `timeseries`时，默认值为`true`
      - x.type为`category`时，默认值为`true`

    + x.tick.culling.max

    说明：设置 x 轴刻度值显示的最大数

    默认值：8

### v-y

属性：

+ config

  示例：

  ```js
  {
    'inner': true,
    'max': 100,
    'min': -100,
    'inverted': false,
    'center': 0,
    'label': {
      'text': 'Your X Axis',
      'position': 'outer-center',
    },
    'tick': {
      'outer': false,
      'count': 5,
      'values': [1, 2, 4, 8, 16, 32, ...],
      'format': function (x) { return x.getFullYear(); },
    },
    'padding': {
      'left': 0,
      'right': 0,
    },
    'default': [0, 100]
  }

  ```

  配置：

    + y.inner

    说明：设置 y 轴刻度的位置

    可选值： `true` `false`

    默认值：false

    + y.max

    说明：y 轴最大值

    默认值：undefined

    + y.min

    说明：y 轴最小值

    默认值：undefined

    + y.inverted

    说明：反转 y 轴方向，设置为`true`时，y轴方向为从上到下

    可选值： `true` `false`

    默认值：`false`

    + y.center

    说明：设置 y 轴中值

    默认值：undefined

    + y.padding

    说明：设置 y 轴的 padding 值

    默认值：{}

    + y.label.text

    说明：设置 y 轴标签文字。

    默认值：''

    + y.label.position

    说明：设置 y 轴标签文字位置。

    可选值：

      - 水平坐标轴： `inner-right` `inner-center` `inner-left` `outer-right` `outer-center` `outer-left`

      - 垂直坐标轴： `inner-top` `inner-middle` `inner-bottom` `outer-top` `outer-middle` `outer-bottom`

    默认值：

      - 水平坐标轴： `inner-right`

      - 垂直坐标轴： `inner-top`

    + y.tick.outer

    说明：显示 y 轴两端刻度线

    可选值： `true` `false`

    默认值：`true`

    + y.tick.count

    说明：y 轴刻度值显示个数

    默认值： undefined

    + y.tick.values

    说明：自定义显示 y 轴刻度值,覆盖 y.tick.count

    默认值：[]

    + y.tick.format

    说明：格式化 y 轴刻度值

    默认值：undefined

    + y.default

    说明：y轴初始化范围

    默认值：undefined

### v-y2

属性：

+ config

  示例：

  ```js
  {
    'inner': true,
    'max': 100,
    'min': -100,
    'inverted': false,
    'center': 0,
    'label': {
      'text': 'Your X Axis',
      'position': 'outer-center',
    },
    'tick': {
      'outer': false,
      'count': 5,
      'values': [1, 2, 4, 8, 16, 32, ...],
      'format': function (x) { return x.getFullYear(); },
    },
    'padding': {
      'left': 0,
      'right': 0,
    },
    'default': [0, 100]

  }

  ```

  配置：

    + y2.inner

    说明：设置 y2 轴刻度的位置

    可选值： `true` `false`

    默认值：false

    + y2.max

    说明：y2 轴最大值

    默认值：undefined

    + y2.min

    说明：y2 轴最小值

    默认值：undefined

    + y2.inverted

    说明：反转 y2 轴方向，设置为`true`时，y2轴方向为从上到下

    可选值： `true` `false`

    默认值：`false`

    + y2.center

    说明：设置 y2 轴中值

    默认值：undefined

    + y2.padding

    说明：设置 y2 轴的 padding 值

    默认值：{}

    + y2.label.text

    说明：设置 y2 轴标签文字。

    默认值：''

    + y2.label.position

    说明：设置 y2 轴标签文字位置。

    可选值：

      - 水平坐标轴： `inner-right` `inner-center` `inner-left` `outer-right` `outer-center` `outer-left`

      - 垂直坐标轴： `inner-top` `inner-middle` `inner-bottom` `outer-top` `outer-middle` `outer-bottom`

    默认值：

      - 水平坐标轴： `inner-right`

      - 垂直坐标轴： `inner-top`

    + y2.tick.outer

    说明：显示 y2 轴两端刻度线

    可选值： `true` `false`

    默认值：`true`

    + y2.tick.count

    说明：y2 轴刻度值显示个数

    默认值： undefined

    + y2.tick.values

    说明：自定义显示 y2 轴刻度值,覆盖 y2.tick.count

    默认值：[]

    + y2.tick.format

    说明：格式化 y2 轴刻度值

    默认值：undefined

    + y2.default

    说明：y2轴初始化范围

    默认值：undefined

### v-tooltip

属性：

+ config

  配置及默认值：

  ```js
  {
    grouped: true,
    format: {
      title: undefined,
      name: undefined,
      value: undefined
    },
    position: undefined,
    contents: undefined
  }

  ```

  配置详解：

    + grouped

    说明：以组的形式显示 tooltip

    可选值： `true` `false`

    默认值：true

    + format.tittle

    说明：格式化标题，可以是一个函数。

    ```js
    format: {
      title: function (x) { return 'Data ' + x; }
    }
    ```

    默认值：undefined

    + format.name

    说明：格式化每条数据的名字，可以是一个函数。

    ```js
    format: {
      name: function (name, ratio, id, index) { return name; }
    }
    ```

    默认值：undefined

    + format.value

    说明：格式化名字对应的值，可以是一个函数。

    ```js
    format: {
      value: function (value, ratio, id, index) { return ratio; }
    }
    ```

    默认值：undefined

    + position

    说明：自定义 tooltip 的位置。可以是一个函数，必须返回包含 'top'和'left'的对象。

    ```js
    position: function (data, width, height, element) {
      return {top: 0, left: 0}
    }
    ```

    默认值：undefined

    + contents

    说明：自定义 tooltip

    ```js
    contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
      return ... // formatted html as you want
    }
    ```

    默认值：undefined

### v-regions

属性：

+ config

  示例：

  ```js
  {
    'even': '.light',
    'odd': '.dark'
  }
  ```

  配置详解：

    + even

    说明：配置奇数行区域背景，接收一个 CSS 表达式作为值，将这个 css 表达式的样式作用于奇数行的区域背景。

    + odd

    说明：配置偶数行区域背景，接收一个 CSS 表达式作为值，将这个 css 表达式的样式作用于偶数行的区域背景。

### v-point

属性：

+ config

  配置及默认值：

  ```js
  {
    r: 2.5,
    focus: {
      expand: {
        enabled: true,
        r: 1.75
      }
    },
    select: {
      r: 4
    }
  }

  ```

  配置详解：

    + r

    说明：图形上标记点的大小

    默认值：2.5

    + focus.expand.enabled

    说明：focus 时,点是否扩散.

    可选值： `true` `false`

    默认值：true

    + focus.enxpand.r

    说明：扩散时的点大小

    默认值：r * 1.75

    + select.r

    说明：选中时的点大小

    默认值：r * 4

### v-legend

属性：

+ config

  配置及默认值：

  ```js
  {
    hide: false,
    position: bottom,
    inset: {
      anchor: 'top-left',
      x: 10,
      y: 0,
      step: undefined
    },
    item: {
      onmouseover: undefined,
      onclick: undefined,
      onmouseout: undefined
    }
  }

  ```

  配置详解：

    + hide

    说明：`true`时，隐藏所有图例，字符串或数组时，隐藏匹配的图例.

    ```js
    {
      hide: true
      //or hide: 'data1'
      //or hide: ['data1', 'data2']
    }
    ```

    默认值：false

    + position

    说明：图例位置

    可选值： `bottom` `right` `inset`

    默认值：bottom

    + inset

    说明：调整图例

    默认值：
    ```
    {
      anchor: 'top-left',
      x: 10,
      y: 0,
      step: undefined
    }
    ```

    + inset.anchor

    说明：决定图例的位置

    可选值： `top-left` `top-right` `bottom-left` `bottom-right`

    默认值：`top-left`

    + inset.step

    说明：图例分几行显示

    默认值：undefined

    + item

    说明：自定义图例的交互行为

    ```js
    {
      item: {
        onclick: function (id) { ... },
        onmouseover: function (id) { ... },
        onmouseout: function (id) { ... }
      }
    }
    ```

    默认值：undefined

### v-grid

属性：

+ config

  配置及默认值：

  ```js
  {
    x: {
      show: true,
      lines: []
    },
    y: {
      show: true,
      lines: []
    }
  }

  ```

  配置详解：

    + x.show

    说明：显示 x 轴参考线

    可选值： `true` `false`

    默认值：false

    + x.lines

    说明：在 x 轴上匹配`value`的位置处显示参考线，其中`text` `class` `position`均可选。

    ```
    {
      x: {
        show: true
        lines: [
          {value: 2, text: 'Label on 2'},
          {value: 5, text: 'Label on 5', class: 'label-5'}
          {value: 6, text: 'Label on 6', position: 'start'}
        ]
      }
    }
    ```

    默认值：[]

    position 可选值： `start` `middle` `end`

    position 默认值： `end`

    + y.show

    说明：显示 y 轴参考线

    可选值： `true` `false`

    默认值：false

    + y.lines

    说明：在 y 轴上匹配`value`的位置处显示参考线，其中`text` `class` `position`均可选。

    ```
    {
      y: {
        show: true
        lines: [
          {value: 2, text: 'Label on 2'},
          {value: 5, text: 'Label on 5', class: 'label-5'}
          {value: 6, text: 'Label on 6', position: 'start'}
        ]
      }
    }
    ```

    默认值：[]

    position 可选值： `start` `middle` `end`

    position 默认值： `end`



## License

MIT

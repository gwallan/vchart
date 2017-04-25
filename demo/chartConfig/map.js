export default {
  size: {
    width: 850,
    height: 450
  },
  padding: {
    right: 0
    // left: 0
  },
  map: {
    label: {
      show: false // 省份区域名称显示
    },
    ratio: 1,
    scale: {
      width: 5,
      height: 100,
      max: 100, // 比例尺最大值
      min: 0, // 比例尺最小值
      position: {
        top: function (w, h) {
          return this.currentHeight - h - 50
        },
        left: function (w, h) {
          return this.currentWidth - h - 50
        }
      },
      format: function (d) {
        return parseInt(d)
      },
      colors: ['#A5DBFF', '#0065CB'],
      draw: function (ele, axis) {
        ele.selectAll('text').attr('x', 10)
        ele.append('circle')
          .attr('class', 'max')
          .attr('r', 5)
          .attr('cx', 5 / 2)
          .style('fill', this.config.map_scale_colors[1])
        ele.append('circle')
          .attr('class', 'min')
          .attr('r', 5)
          .attr('cx', 5 / 2)
          .attr('cy', 100)
          .style('fill', this.config.map_scale_colors[0])
      }
    },
    region: {
      empty: {
        color: 'rgb(223, 255, 255)'
      }
    }
  }
}

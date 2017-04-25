export default
{
  size: {
    width: 600,
    height: 450
  },
  'padding': {
    'left': 50,
    'right': 30,
    'top': 10,
    'bottom': 0
  },
  'color': {
    'pattern': ['#0691d2', '#3655a7', '#63308d', '#9b046b', '#e80c4c']
  },
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
      'color': null, // 文字标签颜色处理函数
      'highlight': { // 高亮文本
        'text': [],
        'color': null
      }
    }
  }
}

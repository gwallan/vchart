
export default
{
  size: {
    height: 600,
    width: 650
  },
  transition: {
    enabled: true,
    duration: 1500
  },
  padding: {
    top: 10
  },
  'color': {'pattern': ['#0691d2', '#3655a7', '#63308d', '#9b046b', '#e80c4c']},
  'radar': {
    min: 0,
    max: 5,
    opacityArea: 0,
    coor: {
      labelFormat: function (v) {
        return parseFloat(v).toFixed(1)
      }
    }
  }
}

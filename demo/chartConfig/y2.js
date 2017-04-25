export default
{
  'min': 0,
  'tick': {
    'count': 5,
    'format': function (v) {
      if (!v) return 0
      if (parseInt(v) === v) return v
      if (parseFloat(v) === v) return parseFloat(v).toFixed(2)
      return v
    }
  }
}

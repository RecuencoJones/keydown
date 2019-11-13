const config = {
  // Time to buffer inputs before cutting
  bufferTime: 500,

  // filter keys to display on keydown
  filterKeys: require('./key-filters/custom'),

  // keys visualizer
  visualizer: require('./visualizers/tray'),

  // log additional debugging information
  debug: false
}

module.exports = config

function consoleVisualizer(data) {
  if (data === null) {
    process.stdout.write('\n')
  } else {
    process.stdout.write(data)
  }
}

module.exports = consoleVisualizer

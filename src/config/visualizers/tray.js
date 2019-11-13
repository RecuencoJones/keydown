const { app } = require('electron')

function trayVisualizer(data) {
  if (app.$tray) {
    app.$tray.setTitle(`${ data || app.getName() }`)
  }
}

module.exports = trayVisualizer

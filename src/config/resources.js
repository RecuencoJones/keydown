const { resolve } = require('path')

const assetsDir = resolve(__dirname, '..', 'assets')

module.exports = {
  appIcon: resolve(assetsDir, 'key.png'),
  trayIcon: resolve(assetsDir, 'key@tray.png')
}

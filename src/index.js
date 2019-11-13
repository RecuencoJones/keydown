const { resolve } = require('path')
const { app, Tray, Menu } = require('electron')
const { start, stop } = require('./core')
const config = require('./config')

app.on('ready', () => {
  tray = new Tray(resolve(__dirname, '..', 'assets', 'key@tray.png'))

  tray.setTitle(`${ app.getName() }`)

  tray.setContextMenu(Menu.buildFromTemplate([
    {
      label: 'Quit KeyDown',
      accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Alt+F4',
      click: () => app.quit()
    }
  ]))

  app.$tray = tray

  start(config)
})

app.on('will-quit', () => {
  stop()
})
